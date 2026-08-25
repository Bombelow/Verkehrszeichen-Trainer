const config = () => ({ url: (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, ''), key: process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || '' });
const headers = key => ({ apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' });

module.exports = async function handler(request, response) {
  if (request.method !== 'PUT') return response.status(405).json({ error: 'Nur PUT ist erlaubt.' });
  try {
    const { url, key } = config();
    if (!url || !key) throw new Error('Die Supabase-Verbindung ist noch nicht vollständig konfiguriert.');
    const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
    if (!token) throw new Error('Nicht angemeldet.');
    const current = await fetch(`${url}/auth/v1/user`, { headers: { ...headers(key), Authorization: `Bearer ${token}` } });
    const user = await current.json();
    if (!current.ok) throw new Error('Die Anmeldung ist abgelaufen.');
    const updated = await fetch(`${url}/auth/v1/admin/users/${user.id}`, { method: 'PUT', headers: headers(key), body: JSON.stringify({ user_metadata: { ...(user.user_metadata || {}), stats: request.body?.stats || {}, progress: request.body?.progress || {} } }) });
    if (!updated.ok) throw new Error('Die Statistik konnte nicht gespeichert werden.');
    return response.status(200).json({ ok: true });
  } catch (error) { return response.status(400).json({ error: error.message || 'Es ist ein Fehler aufgetreten.' }); }
}
