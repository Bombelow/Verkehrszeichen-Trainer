const config = () => ({
  url: (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, ''),
  key: process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || ''
});

const username = value => String(value || '').trim().toLowerCase();
const validUsername = value => /^[a-z0-9][a-z0-9._-]{2,29}$/.test(value);
const accountEmail = value => `${value}@accounts.verkehrszeichen-trainer.invalid`;
const headers = key => ({ apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' });

async function supabase(path, options = {}) {
  const { url, key } = config();
  if (!url || !key) throw new Error('Die Supabase-Verbindung ist noch nicht vollständig konfiguriert.');
  const response = await fetch(`${url}${path}`, { ...options, headers: { ...headers(key), ...(options.headers || {}) } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.msg || data.message || data.error_description || 'Die Anmeldung ist fehlgeschlagen.');
  return data;
}

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Nur POST ist erlaubt.' });
  try {
    const { action, username: suppliedName, password } = request.body || {};
    const name = username(suppliedName);
    if (action === 'profile') {
      const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
      if (!token) throw new Error('Nicht angemeldet.');
      const { key } = config();
      const user = await supabase('/auth/v1/user', { headers: { Authorization: `Bearer ${token}`, apikey: key } });
      return response.status(200).json({ username: user.user_metadata?.username, stats: user.user_metadata?.stats || {}, progress: user.user_metadata?.progress || {} });
    }
    if (!validUsername(name)) throw new Error('Der Benutzername muss 3–30 Zeichen lang sein und darf nur Kleinbuchstaben, Ziffern, Punkt, Unterstrich oder Bindestrich enthalten.');
    if (typeof password !== 'string' || password.length < 8) throw new Error('Das Passwort muss mindestens 8 Zeichen lang sein.');
    if (action === 'register') {
      await supabase('/auth/v1/admin/users', { method: 'POST', body: JSON.stringify({ email: accountEmail(name), password, email_confirm: true, user_metadata: { username: name, stats: {}, progress: {} } }) });
      return response.status(201).json({ ok: true });
    }
    if (action === 'login') {
      const session = await supabase('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email: accountEmail(name), password }) });
      return response.status(200).json({ token: session.access_token, username: session.user?.user_metadata?.username || name, stats: session.user?.user_metadata?.stats || {}, progress: session.user?.user_metadata?.progress || {} });
    }
    return response.status(400).json({ error: 'Unbekannte Aktion.' });
  } catch (error) { return response.status(400).json({ error: error.message || 'Es ist ein Fehler aufgetreten.' }); }
}
