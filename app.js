/* Verkehrszeichen-Datensatz: VzKat 04/2025, Bild-IDs nach SEVAS API. */
const raw=`101|Gefahrstelle|Gefahrzeichen
101-10|Flugbetrieb – Aufstellung rechts|Gefahrzeichen
101-11|Fußgängerüberweg – Aufstellung rechts|Gefahrzeichen
101-12|Viehtrieb – Aufstellung rechts|Gefahrzeichen
103-10|Kurve rechts|Gefahrzeichen
103-20|Kurve links|Gefahrzeichen
105-10|Doppelkurve – zunächst rechts|Gefahrzeichen
105-20|Doppelkurve – zunächst links|Gefahrzeichen
108|Gefälle|Gefahrzeichen
110|Steigung|Gefahrzeichen
112|Unebene Fahrbahn|Gefahrzeichen
114|Schleuder- oder Rutschgefahr|Gefahrzeichen
117-10|Seitenwind von rechts|Gefahrzeichen
117-20|Seitenwind von links|Gefahrzeichen
120|Verengte Fahrbahn|Gefahrzeichen
121-10|Einseitig verengte Fahrbahn – rechts|Gefahrzeichen
121-20|Einseitig verengte Fahrbahn – links|Gefahrzeichen
123|Arbeitsstelle|Gefahrzeichen
124|Stau|Gefahrzeichen
125|Gegenverkehr|Gefahrzeichen
131|Lichtzeichenanlage|Gefahrzeichen
133-10|Fußgänger – Aufstellung rechts|Gefahrzeichen
133-20|Fußgänger – Aufstellung links|Gefahrzeichen
136-10|Kinder – Aufstellung rechts|Gefahrzeichen
136-20|Kinder – Aufstellung links|Gefahrzeichen
138-10|Radverkehr – Aufstellung rechts|Gefahrzeichen
138-20|Radverkehr – Aufstellung links|Gefahrzeichen
142-10|Wildwechsel – Aufstellung rechts|Gefahrzeichen
142-20|Wildwechsel – Aufstellung links|Gefahrzeichen
151|Bahnübergang|Gefahrzeichen
156-10|Dreistreifige Bake – Aufstellung rechts|Gefahrzeichen
156-20|Dreistreifige Bake – Aufstellung links|Gefahrzeichen
157-10|Zweistreifige Bake – Aufstellung rechts|Gefahrzeichen
157-20|Zweistreifige Bake – Aufstellung links|Gefahrzeichen
159-10|Einstreifige Bake – Aufstellung rechts|Gefahrzeichen
159-20|Einstreifige Bake – Aufstellung links|Gefahrzeichen
201-50|Andreaskreuz – stehend|Vorrangzeichen
201-51|Andreaskreuz – liegend|Vorrangzeichen
205|Vorfahrt gewähren|Vorrangzeichen
206|Halt. Vorfahrt gewähren.|Vorrangzeichen
208|Vorrang des Gegenverkehrs|Vorrangzeichen
209|Vorgeschriebene Fahrtrichtung – rechts|Vorschriftzeichen
209-10|Vorgeschriebene Fahrtrichtung – links|Vorschriftzeichen
209-30|Vorgeschriebene Fahrtrichtung – geradeaus|Vorschriftzeichen
211|Vorgeschriebene Fahrtrichtung – hier rechts|Vorschriftzeichen
211-10|Vorgeschriebene Fahrtrichtung – hier links|Vorschriftzeichen
214|Geradeaus oder rechts|Vorschriftzeichen
214-10|Geradeaus oder links|Vorschriftzeichen
214-30|Rechts oder links|Vorschriftzeichen
215|Kreisverkehr|Vorschriftzeichen
220-10|Einbahnstraße – linksweisend|Richtzeichen
220-20|Einbahnstraße – rechtsweisend|Richtzeichen
222|Vorgeschriebene Vorbeifahrt – rechts vorbei|Vorschriftzeichen
222-10|Vorgeschriebene Vorbeifahrt – links vorbei|Vorschriftzeichen
224|Haltestelle|Richtzeichen
229|Taxenstand|Richtzeichen
237|Radweg|Vorschriftzeichen
238|Reitweg|Vorschriftzeichen
239|Gehweg|Vorschriftzeichen
240|Gemeinsamer Geh- und Radweg|Vorschriftzeichen
241-30|Getrennter Rad- und Gehweg – Radverkehr links|Vorschriftzeichen
242.1|Beginn einer Fußgängerzone|Richtzeichen
242.2|Ende einer Fußgängerzone|Richtzeichen
244.1|Beginn einer Fahrradstraße|Richtzeichen
244.3|Beginn einer Fahrradzone|Richtzeichen
244.4|Ende einer Fahrradzone|Richtzeichen
244.2|Ende einer Fahrradzone|Richtzeichen
245|Bussonderfahrstreifen|Vorschriftzeichen
250|Verbot für Fahrzeuge aller Art|Vorschriftzeichen
251|Verbot für Kraftwagen und sonstige mehrspurige Kraftfahrzeuge|Vorschriftzeichen
253|Verbot für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
254|Verbot für Radverkehr|Vorschriftzeichen
255|Verbot für Krafträder mit Beiwagen, Kleinkrafträder und Mofas|Vorschriftzeichen
259|Verbot für Fußgänger|Vorschriftzeichen
260|Verbot für Kraftfahrzeuge|Vorschriftzeichen
261|Verbot für kennzeichnungspflichtige Kraftfahrzeuge mit gefährlichen Gütern|Vorschriftzeichen
262|Verbot für Fahrzeuge über angegebene tatsächliche Masse|Vorschriftzeichen
263|Verbot für Fahrzeuge über angegebene tatsächliche Achslast|Vorschriftzeichen
264|Verbot für Fahrzeuge über angegebene tatsächliche Breite|Vorschriftzeichen
265|Verbot für Fahrzeuge über angegebene tatsächliche Höhe|Vorschriftzeichen
266|Verbot für Fahrzeuge über angegebene tatsächliche Länge|Vorschriftzeichen
267|Verbot der Einfahrt|Vorschriftzeichen
268|Schneeketten vorgeschrieben|Vorschriftzeichen
269|Verbot für Fahrzeuge mit wassergefährdender Ladung|Vorschriftzeichen
270.1|Beginn einer Verkehrsverbotszone zur Verminderung schädlicher Luftverunreinigungen|Richtzeichen
270.2|Ende einer Verkehrsverbotszone|Richtzeichen
272|Verbot des Wendens|Vorschriftzeichen
273|Verbot des Unterschreitens des Mindestabstandes|Vorschriftzeichen
274|Zulässige Höchstgeschwindigkeit|Vorschriftzeichen
274.1|Beginn einer Tempo-30-Zone|Richtzeichen
274.2|Ende einer Tempo-30-Zone|Richtzeichen
275|Vorgeschriebene Mindestgeschwindigkeit|Vorschriftzeichen
276|Überholverbot für Kraftfahrzeuge aller Art|Vorschriftzeichen
277|Überholverbot für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
278|Ende der zulässigen Höchstgeschwindigkeit|Vorschriftzeichen
279|Ende der vorgeschriebenen Mindestgeschwindigkeit|Vorschriftzeichen
280|Ende des Überholverbotes für Kraftfahrzeuge aller Art|Vorschriftzeichen
281|Ende des Überholverbotes für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
282|Ende sämtlicher Streckenverbote|Vorschriftzeichen
283|Absolutes Haltverbot|Vorschriftzeichen
286|Eingeschränktes Haltverbot|Vorschriftzeichen
290.1|Beginn eines eingeschränkten Haltverbots für eine Zone|Richtzeichen
290.2|Ende eines eingeschränkten Haltverbots für eine Zone|Richtzeichen
293|Fußgängerüberweg|Markierung
295|Fahrstreifenbegrenzung und Fahrbahnbegrenzung|Markierung
297|Pfeilmarkierungen|Markierung
299|Grenzmarkierung für Halt- oder Parkverbote|Markierung
301|Vorfahrt|Vorrangzeichen
306|Vorfahrtstraße|Vorrangzeichen
307|Ende der Vorfahrtstraße|Vorrangzeichen
308|Vorrang vor dem Gegenverkehr|Vorrangzeichen
310|Ortstafel – Vorderseite|Richtzeichen
311|Ortstafel – Rückseite|Richtzeichen
314|Parken|Richtzeichen
314-10|Parken – Anfang oder Ende|Richtzeichen
314-20|Parken – Ende oder Anfang|Richtzeichen
314-30|Parken – Mitte|Richtzeichen
314.1|Beginn einer Parkraumbewirtschaftungszone|Richtzeichen
314.2|Ende einer Parkraumbewirtschaftungszone|Richtzeichen
315|Parken auf Gehwegen|Richtzeichen
316|Parken und Reisen|Richtzeichen
317|Wandererparkplatz|Richtzeichen
325.1|Beginn eines verkehrsberuhigten Bereichs|Richtzeichen
325.2|Ende eines verkehrsberuhigten Bereichs|Richtzeichen
327|Tunnel|Richtzeichen
330.1|Autobahn|Richtzeichen
330.2|Ende der Autobahn|Richtzeichen
331.1|Kraftfahrstraße|Richtzeichen
331.2|Ende der Kraftfahrstraße|Richtzeichen
332|Ausfahrt von der Autobahn|Richtzeichen
333|Ausfahrt von der Kraftfahrstraße|Richtzeichen
340|Leitlinie|Markierung
341|Wartelinie|Markierung
342|Haifischzähne|Markierung
350|Fußgängerüberweg|Richtzeichen
354|Wasserschutzgebiet|Richtzeichen
356|Verkehrshelfer|Richtzeichen
357|Sackgasse|Richtzeichen
358|Erste Hilfe|Richtzeichen
363|Polizei|Richtzeichen
365-50|Fernsprecher|Richtzeichen
366|Touristischer Hinweis|Richtzeichen
367|Hinweis auf Autohof|Richtzeichen
375|Hinweis auf eine Stadt oder ein Stadtviertel|Richtzeichen
380|Richtgeschwindigkeit|Richtzeichen
381|Übernachtungsmöglichkeit|Richtzeichen
385|Parkplatz mit Anschluss an den öffentlichen Personenverkehr|Richtzeichen
386.1|Touristischer Hinweis|Richtzeichen
388|Seitenstreifen für mehrspurige Kraftfahrzeuge|Richtzeichen
390|Mautpflichtige Strecke|Richtzeichen
391|Mautpflichtige Strecke für Lastkraftwagen|Richtzeichen
392|Zollstelle|Richtzeichen
393|Informationstafel an Grenzübergangsstellen|Richtzeichen
394|Laternenring|Richtzeichen
401|Bundesstraße|Richtzeichen
405|Autobahnnummer|Richtzeichen
406|Knotenpunkt auf Autobahnen|Richtzeichen
410|Europastraße|Richtzeichen
415|Pfeilwegweiser auf Bundesstraßen|Richtzeichen
418|Pfeilwegweiser auf sonstigen Straßen|Richtzeichen
421|Pfeilwegweiser auf Autobahnen|Richtzeichen
422|Wegweiser für bestimmte Verkehrsarten|Richtzeichen
430|Wegweiser zur Autobahn|Richtzeichen
432|Wegweiser zu innerörtlichen Zielen und zu Einrichtungen|Richtzeichen
434|Tabellenwegweiser auf Autobahnen|Richtzeichen
437|Straßennummernschild|Richtzeichen
438|Vorwegweiser außerhalb von Autobahnen|Richtzeichen
440|Vorwegweiser zur Autobahn|Richtzeichen
448.1|Ankündigung oder Fortsetzung der streckenbezogenen Leistungsfähigkeit|Richtzeichen
449|Vorwegweiser auf Autobahnen|Richtzeichen
450|Ankündigungsbake|Richtzeichen
453|Entfernungstafel auf Autobahnen|Richtzeichen
454|Entfernungstafel auf anderen Straßen|Richtzeichen
455.1|Ankündigung einer Anschlussstelle|Richtzeichen
457|Umleitungsankündigung|Richtzeichen
460|Bedarfsumleitung|Richtzeichen
466|Weiterleitung auf Bedarfsumleitung|Richtzeichen
500|Überleitungstafel|Verkehrseinrichtung
501|Überleitungsbake|Verkehrseinrichtung
600|Absperrschranke|Verkehrseinrichtung
605|Leitbake|Verkehrseinrichtung
610|Leitkegel|Verkehrseinrichtung
615|Fahrbare Absperrtafel|Verkehrseinrichtung
616|Fahrbare Absperrtafel mit Blinkpfeil|Verkehrseinrichtung
620|Leitpfosten|Verkehrseinrichtung
625|Richtungstafel in Kurven|Verkehrseinrichtung
626|Leitmal|Verkehrseinrichtung
628|Leitplatte|Verkehrseinrichtung
720|Grünpfeil|Lichtzeichen
721|Grünpfeil mit Lichtzeichen|Lichtzeichen
1000-30|Richtung, Anfang der Strecke – rechtsweisend|Zusatzzeichen|1
1000-31|Richtung, Anfang der Strecke – linksweisend|Zusatzzeichen|1
1000-32|Richtung, Ende der Strecke – rechtsweisend|Zusatzzeichen|1
1000-33|Richtung, Ende der Strecke – linksweisend|Zusatzzeichen|1
1000-34|Richtung – linksweisend|Zusatzzeichen|1
1000-35|Richtung – rechtsweisend|Zusatzzeichen|1
1000-36|Richtung – geradeausweisend|Zusatzzeichen|1
1001-30|Verlauf der Vorfahrtstraße – abknickende Vorfahrt nach rechts|Zusatzzeichen|1
1001-31|Verlauf der Vorfahrtstraße – abknickende Vorfahrt nach links|Zusatzzeichen|1
1002-10|Verlauf einer Vorfahrtstraße an einer Kreuzung – von unten nach links|Zusatzzeichen|1
1004-30|Entfernung – 100 m|Zusatzzeichen|1
1004-31|Entfernung – 200 m|Zusatzzeichen|1
1004-32|Entfernung – 400 m|Zusatzzeichen|1
1005-30|Entfernung – 100 m|Zusatzzeichen|1
1006-30|Gefahrstelle – 1 km|Zusatzzeichen|1
1007-30|Ölspur|Zusatzzeichen|1
1008-30|Vorrangstraße|Zusatzzeichen|1
1008-31|Vorfahrt geändert|Zusatzzeichen|1
1010-10|Kraftfahrzeuge und Züge|Zusatzzeichen|1
1010-11|Personenkraftwagen|Zusatzzeichen|1
1010-12|Krafträder, auch mit Beiwagen|Zusatzzeichen|1
1010-13|Wohnwagen|Zusatzzeichen|1
1010-50|Kraftwagen und sonstige mehrspurige Fahrzeuge|Zusatzzeichen|1
1012-30|Ende|Zusatzzeichen|1
1012-31|Ende einer Umleitung|Zusatzzeichen|1
1013-50|Schneeflocke|Zusatzzeichen|1
1013-51|Nässe|Zusatzzeichen|1
1013-52|Bei Glätte|Zusatzzeichen|1
1014-50|Tunnelkategorie B|Zusatzzeichen|1
1014-51|Tunnelkategorie C|Zusatzzeichen|1
1014-52|Tunnelkategorie D|Zusatzzeichen|1
1014-53|Tunnelkategorie E|Zusatzzeichen|1
1018-10|Bauarbeiten|Zusatzzeichen|1
1018-11|Erntemaschinen|Zusatzzeichen|1
1020-11|Schwerbehinderte mit Parkausweis frei|Zusatzzeichen|1
1020-12|Radverkehr und Anlieger frei|Zusatzzeichen|1
1020-13|Inline-Skaten und Rollschuhfahren zugelassen|Zusatzzeichen|1
1020-30|Anlieger frei|Zusatzzeichen|1
1020-31|Anlieger oder Parken frei|Zusatzzeichen|1
1020-32|Bewohner mit Parkausweis frei|Zusatzzeichen|1
1022-10|Radverkehr frei|Zusatzzeichen|1
1022-11|Mofas frei|Zusatzzeichen|1
1022-12|Krafträder und Mofas frei|Zusatzzeichen|1
1024-10|Personenkraftwagen frei|Zusatzzeichen|1
1024-11|Lastkraftwagen frei|Zusatzzeichen|1
1024-12|Lastkraftwagen mit Anhänger frei|Zusatzzeichen|1
1024-13|Kraftomnibus frei|Zusatzzeichen|1
1024-14|Schienenbahn frei|Zusatzzeichen|1
1024-15|Straßenbahn frei|Zusatzzeichen|1
1024-17|Kraftfahrzeuge bis 25 km/h frei|Zusatzzeichen|1
1026-30|Taxen frei|Zusatzzeichen|1
1026-31|Linienverkehr frei|Zusatzzeichen|1
1028-30|Anlieger frei|Zusatzzeichen|1
1028-31|Bis Baustelle frei|Zusatzzeichen|1
1030-10|Elektrokleinstfahrzeuge frei|Zusatzzeichen|1
1031-50|Kraftfahrzeuge und Züge bis 3,5 t|Zusatzzeichen|1
1031-51|Kraftfahrzeuge und Züge über 3,5 t|Zusatzzeichen|1
1032-30|Anwohner frei|Zusatzzeichen|1
1033-10|Lieferverkehr frei|Zusatzzeichen|1
1040-30|Zeitliche Beschränkung|Zusatzzeichen|1
1042-30|Zeitliche Beschränkung|Zusatzzeichen|1
1044-10|Nur Schwerbehinderte mit außergewöhnlicher Gehbehinderung|Zusatzzeichen|1
1044-11|Nur Bewohner mit Parkausweis|Zusatzzeichen|1
1048-10|Nur Kraftomnibusse|Zusatzzeichen|1
1048-11|Nur Personenkraftwagen|Zusatzzeichen|1
1048-12|Nur Lastkraftwagen|Zusatzzeichen|1
1049-10|Nur Personenkraftwagen mit Anhänger|Zusatzzeichen|1
1049-11|Nur Lastkraftwagen mit Anhänger|Zusatzzeichen|1
1052-30|Bei Nässe|Zusatzzeichen|1
1052-31|Bei Glätte|Zusatzzeichen|1
1053-30|Bei Nebel|Zusatzzeichen|1
1053-31|Bei Smog|Zusatzzeichen|1
1053-32|Bei Schneefall|Zusatzzeichen|1
1053-33|Bei Regen|Zusatzzeichen|1
1053-34|Bei Schnee- oder Eisglätte|Zusatzzeichen|1
1053-35|Bei Schneeglätte|Zusatzzeichen|1
1053-36|Bei Eisglätte|Zusatzzeichen|1
1053-37|Bei Nässe und Schmutz|Zusatzzeichen|1
1053-38|Bei Schnee- und Eisglätte|Zusatzzeichen|1
1053-39|Bei Reif- und Eisglätte|Zusatzzeichen|1
101-13|Reiter – Aufstellung rechts|Gefahrzeichen
101-14|Amphibienwanderung – Aufstellung rechts|Gefahrzeichen
101-15|Steinschlag – Aufstellung rechts|Gefahrzeichen
101-20|Flugbetrieb – Aufstellung links|Gefahrzeichen
101-21|Fußgängerüberweg – Aufstellung links|Gefahrzeichen
101-22|Viehtrieb – Aufstellung links|Gefahrzeichen
101-23|Reiter – Aufstellung links|Gefahrzeichen
101-24|Amphibienwanderung – Aufstellung links|Gefahrzeichen
101-25|Steinschlag – Aufstellung links|Gefahrzeichen
101-51|Schnee- oder Eisglätte|Gefahrzeichen
101-52|Splitt, Schotter|Gefahrzeichen
101-53|Ufer|Gefahrzeichen
101-54|Unzureichendes Lichtraumprofil|Gefahrzeichen
101-55|Bewegliche Brücke|Gefahrzeichen
102|Kreuzung oder Einmündung|Gefahrzeichen
156-11|Bahnübergang mit dreistreifiger Bake und Entfernungsangabe – rechts|Gefahrzeichen
156-21|Bahnübergang mit dreistreifiger Bake und Entfernungsangabe – links|Gefahrzeichen
157|Dreistreifige Bake|Gefahrzeichen
157-11|Dreistreifige Bake mit Entfernungsangabe – rechts|Gefahrzeichen
157-21|Dreistreifige Bake mit Entfernungsangabe – links|Gefahrzeichen
159|Zweistreifige Bake|Gefahrzeichen
159-11|Zweistreifige Bake mit Entfernungsangabe – rechts|Gefahrzeichen
159-21|Zweistreifige Bake mit Entfernungsangabe – links|Gefahrzeichen
162|Einstreifige Bake|Gefahrzeichen
162-10|Einstreifige Bake – Aufstellung rechts|Gefahrzeichen
162-20|Einstreifige Bake – Aufstellung links|Gefahrzeichen
201|Andreaskreuz|Vorschriftzeichen
201-51|Andreaskreuz – stehend mit Blitzpfeil|Vorschriftzeichen
201-52|Andreaskreuz – liegend|Vorschriftzeichen
201-53|Andreaskreuz – liegend mit Blitzpfeil|Vorschriftzeichen
220-40|Einbahnstraße – doppelseitig|Richtzeichen
223.1|Seitenstreifen befahren|Vorschriftzeichen
223.2|Seitenstreifen nicht mehr befahren|Vorschriftzeichen
223.3|Seitenstreifen räumen|Vorschriftzeichen
230|Ladebereich|Vorschriftzeichen
230-10|Ladebereich – Anfang rechts|Vorschriftzeichen
230-20|Ladebereich – Ende rechts|Vorschriftzeichen
241|Getrennter Rad- und Gehweg|Vorschriftzeichen
257-50|Verbot für Mofas|Vorschriftzeichen
257-51|Verbot für Reiter|Vorschriftzeichen
257-52|Verbot für Gespannfuhrwerke|Vorschriftzeichen
257-53|Verbot für Viehtrieb|Vorschriftzeichen
257-54|Verbot für Kraftomnibusse|Vorschriftzeichen
257-55|Verbot für Personenkraftwagen|Vorschriftzeichen
257-56|Verbot für Personenkraftwagen mit Anhänger|Vorschriftzeichen
257-57|Verbot für Lastkraftwagen mit Anhänger|Vorschriftzeichen
257-58|Verbot für Fahrzeuge bis 25 km/h|Vorschriftzeichen
257-59|Verbot für Elektrokleinstfahrzeuge|Vorschriftzeichen
277.1|Überholverbot von einspurigen Fahrzeugen|Vorschriftzeichen
281.1|Ende des Überholverbots von einspurigen Fahrzeugen|Vorschriftzeichen
314-50|Parkhaus, Parkgarage|Richtzeichen
318|Parkscheibe|Richtzeichen
328|Nothalte- und Pannenbucht|Richtzeichen
350.1|Radschnellweg|Richtzeichen
350.2|Ende des Radschnellwegs|Richtzeichen
357-50|Sackgasse – für Radverkehr und Fußgänger durchlässig|Richtzeichen
357-51|Sackgasse – für Fußgänger durchlässig|Richtzeichen
357-52|Sackgasse – für Radverkehr durchlässig|Richtzeichen
365-51|Notrufsäule|Richtzeichen
365-52|Tankstelle|Richtzeichen
365-58|Toilette|Richtzeichen
365-65|Ladestation für Elektrofahrzeuge|Richtzeichen
365-66|Wasserstofftankstelle|Richtzeichen
386.2|Touristische Route|Richtzeichen
386.3|Touristische Unterrichtungstafel|Richtzeichen
390.2|Ende der Mautpflicht|Richtzeichen
500|Überleitungstafel|Verkehrseinrichtung
501|Überleitungsbake|Verkehrseinrichtung
502|Überleitungstafel mit Gegenverkehr|Verkehrseinrichtung
605-10|Leitbake – Aufstellung rechts|Verkehrseinrichtung
605-20|Leitbake – Aufstellung links|Verkehrseinrichtung
605-40|Leitbake – doppelseitig|Verkehrseinrichtung
610|Leitkegel|Verkehrseinrichtung
615|Fahrbare Absperrtafel|Verkehrseinrichtung
616|Fahrbare Absperrtafel mit Blinkpfeil|Verkehrseinrichtung
625-10|Richtungstafel in Kurven – linksweisend|Verkehrseinrichtung
625-20|Richtungstafel in Kurven – rechtsweisend|Verkehrseinrichtung
626|Leitplatte|Verkehrseinrichtung
627|Leitmal|Verkehrseinrichtung
628|Leitschwelle mit Leitbake|Verkehrseinrichtung
629|Leitbord mit Leitbake|Verkehrseinrichtung
630|Parkwarntafel|Verkehrseinrichtung
1000-10|Richtung, linksweisend|Zusatzzeichen|1
1000-11|Vorankündigung, linksweisend|Zusatzzeichen|1
1000-20|Richtung, rechtsweisend|Zusatzzeichen|1
1000-21|Vorankündigung, rechtsweisend|Zusatzzeichen|1
1000-32|Radverkehr kreuzt von links und rechts|Zusatzzeichen|1
1001-30|Auf … m|Zusatzzeichen|1
1001-31|Auf … km|Zusatzzeichen|1
1001-32|Noch … m|Zusatzzeichen|1
1001-33|Noch … km|Zusatzzeichen|1
1002-11|Verlauf der Vorfahrtstraße an Kreuzungen – von oben nach links|Zusatzzeichen|1
1002-12|Verlauf der Vorfahrtstraße – Einmündung von oben|Zusatzzeichen|1
1002-13|Verlauf der Vorfahrtstraße – Einmündung von rechts|Zusatzzeichen|1
1002-20|Verlauf der Vorfahrtstraße an Kreuzungen – von unten nach rechts|Zusatzzeichen|1
1002-21|Verlauf der Vorfahrtstraße an Kreuzungen – von oben nach rechts|Zusatzzeichen|1
1004-32|Stop in 100 m|Zusatzzeichen|1
1006-30|Schleudergefahr für Wohnwagengespanne|Zusatzzeichen|1
1006-31|Unfallgefahr|Zusatzzeichen|1
1006-32|Unfallgefahr LKW|Zusatzzeichen|1
1007-31|Rauch|Zusatzzeichen|1
1007-32|Rollsplitt|Zusatzzeichen|1
1007-33|Baustellenausfahrt|Zusatzzeichen|1
1007-34|Straßenschäden|Zusatzzeichen|1
1007-35|Verschmutzte Fahrbahn|Zusatzzeichen|1
1007-36|Sprengarbeiten|Zusatzzeichen|1
1007-50|Unfall|Zusatzzeichen|1
1007-51|Hochwasser|Zusatzzeichen|1
1007-61|Nebel|Zusatzzeichen|1
1008-30|Vorfahrt geändert|Zusatzzeichen|1
1008-31|Verkehrsführung geändert|Zusatzzeichen|1
1010-12|Parkflächen für Anhänger auch länger als 14 Tage|Zusatzzeichen|1
1010-14|Information Rollende Landstraße|Zusatzzeichen|1
1010-52|Radverkehr|Zusatzzeichen|1
1010-53|Fußgänger|Zusatzzeichen|1
1010-54|Reiter|Zusatzzeichen|1
1010-55|Viehtrieb|Zusatzzeichen|1
1010-56|Straßenbahn|Zusatzzeichen|1
1010-57|Kraftomnibus|Zusatzzeichen|1
1010-58|Personenkraftwagen|Zusatzzeichen|1
1010-59|Personenkraftwagen mit Anhänger|Zusatzzeichen|1
1010-60|Lastkraftwagen mit Anhänger|Zusatzzeichen|1
1010-61|Kraftfahrzeuge bis 25 km/h|Zusatzzeichen|1
1010-62|Krafträder und Mopeds|Zusatzzeichen|1
1010-63|Mofas|Zusatzzeichen|1
1010-64|Gespannfuhrwerk|Zusatzzeichen|1
1010-65|E-Bikes|Zusatzzeichen|1
1010-66|Elektrisch betriebene Fahrzeuge|Zusatzzeichen|1
1010-67|Wohnmobile|Zusatzzeichen|1
1010-68|Elektrokleinstfahrzeug|Zusatzzeichen|1
1010-69|Lastenfahrrad|Zusatzzeichen|1
1012-30|Ladezone|Zusatzzeichen|1
1012-32|Radfahrer absteigen|Zusatzzeichen|1
1012-33|Keine Mofas|Zusatzzeichen|1`;
const verifiedQuizIds=new Set(`101 101-10 101-11 101-12 110 112 114 117-10 117-20 120 121-10 121-20 123 124 125 131 133-10 133-20 136-10 136-20 138-10 138-20 142-10 142-20 151 156-10 156-20 157-10 157-20 159-10 159-20 201-50 201-51 205 206 208 209 209-10 209-30 211 211-10 214 214-10 214-30 215 220-10 220-20 220-40 222 222-10 224 229 237 238 239 240 241-30 242.1 242.2 244.1 244.2 244.3 244.4 245 250 251 253 254 255 259 260 261 267 268 269 270.1 270.2 272 274 274.1 274.2 275 276 277 278 279 280 281 282 283 286 290.1 290.2 301 306 307 308 310 311 311.1 314 314-10 314-20 314-30 314-31 314-50 314.1 314.2 315 316 317 325.1 325.2 327 330.1 330.2 331.1 331.2 332 333 350 354 356 357 358 363 365-50 365-51 365-52 365-58 365-65 365-66 380 381 385 390 391 392 393 394 401 405 406 410 605-10 605-20 605-40 610 615 616 620 625-10 625-20 626 627 628 629 630 720 721 1010-13 1010-14 1010-15 1010-50 1013-50 1013-51 1013-52 1014-50 1014-51 1014-52 1014-53 1020-11 1020-12 1020-13 1020-30 1020-31 1020-32 1022-10 1022-11 1022-12 1024-10 1024-11 1024-12 1024-13 1024-14 1024-15 1024-17 1024-19 1024-20 1024-21`.split(' '));
const reportedWithoutStaticSvg=new Set(`108 110 274 278 293 295 297 299 315 340 341 342 350 366 367 375 380 381 388 394 406 415 418 421 422 430 432 434 450 454 455.1 457 460 500 501 600 605 610 615 616 620 625 626 628 1000-35 1000-36 1018-10 1018-11 1020-10 1032-30 1033-10 1048-10 1048-11 1048-12 1049-10 157 159 162 201 223.1 223.2 223.3 241 318 350.1 350.2 502 627 629 630`.split(' '));
const officialVzKatAssets=new Set(`108 110 201 223.1 223.2 223.3 241 274 278 293 295 297 299 315 318 340 341 342 350 350.1 350.2 394 406 415 418 421 422 430 432 434 450 454 455.1 457 460 501 600 605 610 615 616 620 625 626 627 628 629 630`.split(' '));
const imageOverrides={
  '108':'108-10','110':'110-10','274':'274-50','278':'278-50','315':'315-50',
  '350':'350-10','350.1':'350.1-10','350.2':'350.2-10','605':'605-10','625':'625-10',
  '626':'626-10','628':'628-10','157':'157-10','159':'159-10','162':'162-10',
  '201':'201-50','241':'241-30'
};
const signs=[...new Map(raw.split('\n').map(line=>{const [id,name,category,extra]=line.split('|');const imageId=imageOverrides[id]??(reportedWithoutStaticSvg.has(id)?null:id);const svg=officialVzKatAssets.has(id)?`assets/vz/${id}.png`:imageId?`https://sevas.nrw.de/vz/${imageId}.svg`:null;return[id,{id,name,category,extra:extra==='1',svg,quiz:verifiedQuizIds.has(id)&&(!reportedWithoutStaticSvg.has(id)||officialVzKatAssets.has(id))}]})).values()];
const app=document.querySelector('#app');let current='start';let library={query:'',category:'all',extras:true};let session=null;
const load=key=>JSON.parse(localStorage.getItem(key)||'{}');const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
const stats=()=>load('vzt-stats');const progress=()=>load('vzt-progress');const img=s=>s.svg?`<img src="${s.svg}" alt="Verkehrszeichen ${s.id}: ${s.name}" loading="lazy">`:'<div class="no-image">Keine statische SEVAS-SVG verfügbar</div>';
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function shell(title,body){app.innerHTML=`<section><h1>${title}</h1>${body}</section>`}
function navigate(view){current=view;session=null;location.hash=view;render()}
function render(){document.querySelectorAll('[data-view]').forEach(a=>a.classList.toggle('active',a.dataset.view===current));if(current==='start')return home();if(current==='bibliothek')return catalogue();if(current==='training')return modeStart('training');if(current==='pruefung')return modeStart('pruefung');if(current==='statistik')return statistics()}
function home(){const s=stats(),p=progress(),solved=Object.keys(p).length;shell('Verkehrszeichen sicher erkennen.',`<div class="hero"><p class="badge">StVO · VzKat · SEVAS</p><p class="lead">Lerne Nummern, Bedeutung und Kategorien der Verkehrszeichen – gezielt, mit amtlichen VzKat-Abbildungen und SEVAS-SVGs.</p><div class="actions"><a class="button light" href="#training" data-view="training">Jetzt trainieren</a><a class="button ghost" href="#bibliothek" data-view="bibliothek">Zeichenbibliothek</a></div></div><div class="stats"><div class="stat"><b>${signs.filter(x=>!x.extra).length}</b><span>Hauptzeichen</span></div><div class="stat"><b>${signs.filter(x=>x.extra).length}</b><span>Zusatzzeichen in der Bibliothek</span></div><div class="stat"><b>${solved}</b><span>Zeichen bereits beantwortet</span></div></div><div class="card" style="margin-top:22px"><h2>So funktioniert’s</h2><p class="muted">In Training und Prüfung sind Zusatzzeichen zunächst ausgeblendet. In beiden Modi wählst du freie Antwort oder Multiple Choice mit vier echten Alternativen. Falsch beantwortete Zeichen landen automatisch in der Wiederholung.</p></div>`)}
function catalogue(){const cats=[...new Set(signs.map(s=>s.category))];const list=signs.filter(s=>(library.extras||!s.extra)&&(!library.query||(`${s.id} ${s.name} ${s.category}`).toLowerCase().includes(library.query.toLowerCase()))&&(library.category==='all'||s.category===library.category));shell('Zeichenbibliothek',`<p class="lead">Suche nach VZ-Nummer, Bezeichnung oder Kategorie. Abbildungen stammen aus der amtlichen VzKat oder als SVG aus SEVAS.</p><div class="toolbar"><input id="query" value="${esc(library.query)}" placeholder="z. B. 274, Parken, Radverkehr"><select id="category"><option value="all">Alle Kategorien</option>${cats.map(c=>`<option ${c===library.category?'selected':''}>${c}</option>`).join('')}</select><label class="row"><input id="extras" type="checkbox" ${library.extras?'checked':''}> Zusatzzeichen einblenden</label></div><p class="muted">${list.length} Zeichen gefunden</p><div class="grid">${list.map(card).join('')}</div>`);document.querySelector('#query').oninput=e=>{library.query=e.target.value;catalogue()};document.querySelector('#category').onchange=e=>{library.category=e.target.value;catalogue()};document.querySelector('#extras').onchange=e=>{library.extras=e.target.checked;catalogue()};document.querySelectorAll('[data-sign]').forEach(b=>b.onclick=()=>detail(b.dataset.sign))}
function card(s){return`<button class="sign-card" data-sign="${s.id}">${img(s)}<b>VZ ${s.id}</b><small>${esc(s.name)}</small>${s.extra?'<p><span class="badge extra">Zusatzzeichen</span></p>':''}</button>`}
function detail(id){const s=signs.find(x=>x.id===id);const official=s.svg?.startsWith('assets/');shell(`VZ ${s.id}`,`<div class="detail"><div>${img(s)}</div><div><p><span class="badge ${s.extra?'extra':''}">${s.extra?'Zusatzzeichen':'Hauptzeichen'}</span></p><h2>${esc(s.name)}</h2><dl><dt>Nummer</dt><dd>VZ ${s.id}</dd><dt>Kategorie</dt><dd>${s.category}</dd><dt>Abbildung</dt><dd>${s.svg?`<a href="${s.svg}" target="_blank" rel="noreferrer">${official?'Amtliche VzKat-Abbildung öffnen':'SEVAS-SVG öffnen'}</a>`:'Für dieses Zeichen ist keine statische SEVAS-SVG verfügbar.'}</dd></dl><button class="button ghost" id="back">Zur Bibliothek</button></div></div>`);document.querySelector('#back').onclick=()=>navigate('bibliothek')}
function modeStart(mode){const p=progress();const hard=Object.entries(p).filter(([,x])=>x.wrong>=2).map(([id])=>id);shell(mode==='training'?'Training':'Prüfungsmodus',`<p class="lead">${mode==='training'?'Übe ohne Zeitdruck und wiederhole gezielt schwierige Zeichen.':'Eine Prüfung umfasst zehn Fragen und wertet dein Ergebnis direkt aus.'}</p><div class="mode-choice"><button class="card" data-answer="free"><h2>Freie Antwort</h2><p class="muted">Schreibe die VZ-Nummer zum gezeigten Zeichen.</p></button><button class="card" data-answer="choice"><h2>Multiple Choice</h2><p class="muted">Wähle aus vier Antwortmöglichkeiten.</p></button></div><label class="row card"><input id="include-extras" type="checkbox"> Zusatzzeichen einbeziehen <span class="muted">(sonst nur Hauptzeichen)</span></label>${hard.length?`<p><button class="button warn" id="review">${hard.length} schwierige Zeichen wiederholen</button></p>`:''}`);document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>start(mode,b.dataset.answer,false));const r=document.querySelector('#review');if(r)r.onclick=()=>start('training','choice',true)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function start(mode,answer,review){const extras=document.querySelector('#include-extras')?.checked;let pool=signs.filter(s=>s.quiz&&(extras||!s.extra));if(review){const p=progress();pool=pool.filter(s=>(p[s.id]?.wrong||0)>=2)}session={mode,answer,review,pool:shuffle(pool),index:0,correct:0,total:mode==='pruefung'?10:Math.min(10,pool.length)};question()}
function question(){const q=session.pool[session.index%session.pool.length];const pct=Math.round(session.index/session.total*100);let controls=session.answer==='free'?`<div class="row" style="justify-content:center;margin-top:18px"><input class="answer-input" id="answer" placeholder="VZ-Nummer eingeben, z. B. 205"><button class="button" id="check">Antwort prüfen</button></div>`:`<div class="choice-grid">${shuffle([q,...shuffle(session.pool.filter(x=>x.id!==q.id)).slice(0,3)]).map(s=>`<button class="choice" data-choice="${s.id}"><b>VZ ${s.id}</b><br><small>${esc(s.name)}</small></button>`).join('')}</div>`;shell(session.mode==='training'?'Training':'Prüfung',`<div class="question"><p class="muted">Frage ${session.index+1} von ${session.total}</p><div class="progress"><i style="width:${pct}%"></i></div>${img(q)}<h2>Welche VZ-Nummer gehört zu diesem Zeichen?</h2>${controls}<div id="feedback"></div></div>`);if(session.answer==='free'){document.querySelector('#check').onclick=()=>grade(document.querySelector('#answer').value.trim(),q);document.querySelector('#answer').onkeydown=e=>{if(e.key==='Enter')grade(e.target.value.trim(),q)}}else document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>grade(b.dataset.choice,q))}
function grade(value,q){const ok=value.replace(/^VZ\s*/i,'')===q.id;const all=stats();all.correct=(all.correct||0)+(ok?1:0);all.total=(all.total||0)+1;save('vzt-stats',all);const p=progress();p[q.id]||={right:0,wrong:0};p[q.id][ok?'right':'wrong']++;save('vzt-progress',p);session.correct+=ok?1:0;document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;if(b.dataset.choice===q.id)b.classList.add('correct');if(b.dataset.choice===value&&!ok)b.classList.add('wrong')});const f=document.querySelector('#feedback');f.innerHTML=`<div class="feedback"><b>${ok?'Richtig!':'Noch nicht richtig.'}</b> VZ ${q.id} bedeutet: ${esc(q.name)}.</div><button class="button" id="next">${session.index+1===session.total?'Ergebnis anzeigen':'Nächste Frage'}</button>`;document.querySelector('#next').onclick=()=>{session.index++;session.index===session.total?result():question()}}
function result(){const pct=Math.round(session.correct/session.total*100);shell(session.mode==='pruefung'?'Prüfung beendet':'Training beendet',`<div class="card" style="max-width:620px;margin:auto;text-align:center"><p class="badge">Dein Ergebnis</p><h1>${session.correct} / ${session.total}</h1><p class="lead" style="margin:auto">${pct}% richtig beantwortet.</p><div class="actions" style="justify-content:center"><button class="button" id="again">Noch einmal</button><a class="button ghost" href="#statistik" data-view="statistik">Statistik ansehen</a></div></div>`);document.querySelector('#again').onclick=()=>navigate(session.mode)}
function statistics(){const s=stats(),p=progress(),hard=Object.entries(p).filter(([,x])=>x.wrong>x.right).sort((a,b)=>b[1].wrong-a[1].wrong);const rate=s.total?Math.round(s.correct/s.total*100):0;shell('Deine Statistik',`<div class="stats"><div class="stat"><b>${s.total||0}</b><span>Antworten</span></div><div class="stat"><b>${rate}%</b><span>Trefferquote</span></div><div class="stat"><b>${hard.length}</b><span>Wiederholungen empfohlen</span></div></div><div class="card" style="margin-top:24px"><h2>Schwierige Zeichen</h2>${hard.length?`<div class="grid">${hard.map(([id,x])=>{const z=signs.find(s=>s.id===id);return`<div class="sign-card">${img(z)}<b>VZ ${id}</b><small>${esc(z.name)}</small><p class="muted">${x.wrong}× falsch · ${x.right}× richtig</p></div>`}).join('')}</div>`:'<p class="empty">Noch keine schwierigen Zeichen. Starte ein Training!</p>'}</div><p><button class="button warn" id="reset">Statistik zurücksetzen</button></p>`);document.querySelector('#reset').onclick=()=>{if(confirm('Statistik und Wiederholungen wirklich zurücksetzen?')){localStorage.removeItem('vzt-stats');localStorage.removeItem('vzt-progress');statistics()}}}
document.addEventListener('click',e=>{const a=e.target.closest('[data-view]');if(a){e.preventDefault();navigate(a.dataset.view)}});window.addEventListener('hashchange',()=>{const v=location.hash.slice(1)||'start';if(v!==current){current=v;render()}});current=location.hash.slice(1)||'start';render();
