# Verkehrszeichen-Trainer

Interaktive Lernhilfe für Verkehrszeichen nach StVO mit Bibliothek, Training, Prüfung, Wiederholung und lokaler Statistik.

## Datenbasis

Die enthaltenen Datensätze sind gegen die VzKat-Komplettübersicht (Stand 04/2025) geprüft, soweit sie durch die dokumentierte SEVAS-Anzeige-API abbildbar sind. Die Bilder werden **nicht kopiert**: Jede Karte bindet das passende SVG direkt nach dem von SEVAS dokumentierten Muster `https://sevas.nrw.de/vz/{VZ-Nummer}.svg` ein. Dynamische Wertezeichen werden als Grundzeichen geführt.

Die Bibliothek enthält Haupt- und Zusatzzeichen. Training und Prüfung verwenden nur Hauptzeichen, bis „Zusatzzeichen einbeziehen“ bewusst aktiviert wird. Der Fortschritt liegt ausschließlich im Browser (`localStorage`).

## Lokal starten

Als statische Website kann das Projekt mit jedem Webserver geöffnet werden, z. B. `python -m http.server 8080`.
