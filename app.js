/* Verkehrszeichen-Datensatz: VzKat 04/2025, Bild-IDs nach SEVAS API. */
const raw=`101|Gefahrstelle|Gefahrzeichen
101-10|Flugbetrieb – Aufstellung rechts|Gefahrzeichen
101-11|Fußgängerüberweg – Aufstellung rechts|Gefahrzeichen
101-12|Viehtrieb – Aufstellung rechts|Gefahrzeichen
103-10|Kurve – links|Gefahrzeichen
103-20|Kurve – rechts|Gefahrzeichen
105-10|Doppelkurve – zunächst links|Gefahrzeichen
105-20|Doppelkurve – zunächst rechts|Gefahrzeichen
108|Gefälle|Gefahrzeichen
110|Steigung|Gefahrzeichen
112|Unebene Fahrbahn|Gefahrzeichen
114|Schleuder- oder Rutschgefahr|Gefahrzeichen
117-10|Seitenwind von rechts|Gefahrzeichen
117-20|Seitenwind von links|Gefahrzeichen
120|Verengte Fahrbahn|Gefahrzeichen
121-10|Einseitig verengte Fahrbahn – Verengung rechts|Gefahrzeichen
121-20|Einseitig verengte Fahrbahn – Verengung links|Gefahrzeichen
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
156-10|Bahnübergang mit dreistreifiger Bake – Aufstellung rechts|Gefahrzeichen
156-20|Bahnübergang mit dreistreifiger Bake – Aufstellung links|Gefahrzeichen
157-10|Dreistreifige Bake – Aufstellung rechts|Gefahrzeichen
157-20|Dreistreifige Bake – Aufstellung links|Gefahrzeichen
159-10|Zweistreifige Bake – Aufstellung rechts|Gefahrzeichen
159-20|Zweistreifige Bake – Aufstellung links|Gefahrzeichen
201-50|Andreaskreuz – stehend|Vorrangzeichen
201-51|Andreaskreuz – stehend mit Blitzpfeil|Vorrangzeichen
205|Vorfahrt gewähren|Vorrangzeichen
206|Halt. Vorfahrt gewähren|Vorrangzeichen
208|Vorrang des Gegenverkehrs|Vorrangzeichen
209|Vorgeschriebene Fahrtrichtung – rechts|Vorschriftzeichen
209-10|Vorgeschriebene Fahrtrichtung – links|Vorschriftzeichen
209-30|Vorgeschriebene Fahrtrichtung – geradeaus|Vorschriftzeichen
211|Vorgeschriebene Fahrtrichtung – hier rechts|Vorschriftzeichen
211-10|Vorgeschriebene Fahrtrichtung – hier links|Vorschriftzeichen
214|Vorgeschriebene Fahrtrichtung – geradeaus oder rechts|Vorschriftzeichen
214-10|Vorgeschriebene Fahrtrichtung – geradeaus oder links|Vorschriftzeichen
214-30|Vorgeschriebene Fahrtrichtung – rechts oder links|Vorschriftzeichen
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
241-30|Getrennter Rad- und Gehweg – Radweg links|Vorschriftzeichen
242.1|Beginn einer Fußgängerzone|Richtzeichen
242.2|Ende einer Fußgängerzone|Richtzeichen
244.1|Beginn einer Fahrradstraße|Richtzeichen
244.3|Beginn einer Fahrradzone|Richtzeichen
244.4|Ende einer Fahrradzone|Richtzeichen
244.2|Ende einer Fahrradstraße|Richtzeichen
245|Bussonderfahrstreifen|Vorschriftzeichen
250|Verbot für Fahrzeuge aller Art|Vorschriftzeichen
251|Verbot für Kraftwagen|Vorschriftzeichen
253|Verbot für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
254|Verbot für Radverkehr|Vorschriftzeichen
255|Verbot für Krafträder|Vorschriftzeichen
259|Verbot für Fußgänger|Vorschriftzeichen
260|Verbot für Kraftfahrzeuge|Vorschriftzeichen
261|Verbot für kennzeichnungspflichtige Kraftfahrzeuge mit gefährlichen Gütern|Vorschriftzeichen
262|Tatsächliche Masse (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
263|Tatsächliche Achslast (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
264|Tatsächliche Breite (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
265|Tatsächliche Höhe (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
266|Tatsächliche Länge (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
267|Verbot der Einfahrt|Vorschriftzeichen
268|Schneeketten vorgeschrieben|Vorschriftzeichen
269|Verbot für Fahrzeuge mit wassergefährdender Ladung|Vorschriftzeichen
270.1|Beginn einer Verkehrsverbotszone zur Verminderung schädlicher Luftverunreinigungen in einer Zone|Richtzeichen
270.2|Ende einer Verkehrsverbotszone zur Verminderung schädlicher Luftverunreinigungen in einer Zone|Richtzeichen
272|Verbot des Wendens|Vorschriftzeichen
273|Verbot des Unterschreitens des angegebenen Mindestabstandes (Unternummer steht jeweils für den Zahlenwert)|Vorschriftzeichen
274|Zulässige Höchstgeschwindigkeit|Vorschriftzeichen
274.1|Beginn einer Tempo 30-Zone|Richtzeichen
274.2|Ende einer Tempo 30-Zone|Richtzeichen
275|Vorgeschriebene Mindestgeschwindigkeit (Unternummer (nur volle Zehner) steht jeweils für den Zahlenwert)|Vorschriftzeichen
276|Überholverbot für Kraftfahrzeuge aller Art|Vorschriftzeichen
277|Überholverbot für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
278|Ende der zulässigen Höchstgeschwindigkeit|Vorschriftzeichen
279|Ende der vorgeschriebenen Mindestgeschwindigkeit (Unternummer (nur volle Zehner) steht jeweils für den Zahlenwert)|Vorschriftzeichen
280|Ende des Überholverbots für Kraftfahrzeuge aller Art|Vorschriftzeichen
281|Ende des Überholverbots für Kraftfahrzeuge über 3,5 t|Vorschriftzeichen
282|Ende sämtlicher streckenbezogener Geschwindigkeitsbeschränkungen und Überholverbote|Vorschriftzeichen
283|Absolutes Haltverbot|Vorschriftzeichen
286|Eingeschränktes Haltverbot|Vorschriftzeichen
290.1|Beginn eines eingeschränkten Haltverbotes für eine Zone|Richtzeichen
290.2|Ende eines eingeschränkten Haltverbotes für eine Zone|Richtzeichen
293|Fußgängerüberweg|Markierung
295|Fahrstreifenbegrenzung und Fahrbahnbegrenzung|Markierung
297|Pfeilmarkierungen|Markierung
299|Grenzmarkierung für Halt- oder Parkverbote|Markierung
301|Vorfahrt|Vorrangzeichen
306|Vorfahrtstraße|Vorrangzeichen
307|Ende der Vorfahrtstraße|Vorrangzeichen
308|Vorrang vor dem Gegenverkehr|Vorrangzeichen
310|Ortstafel Vorderseite|Richtzeichen
311|Ortstafel Rückseite|Richtzeichen
314|Parken|Richtzeichen
314-10|Parken – Anfang (Aufstellung rechts) oder Ende (Aufstellung links)|Richtzeichen
314-20|Parken – Ende (Aufstellung rechts) oder Anfang (Aufstellung links)|Richtzeichen
314-30|Parken – Mitte (Aufstellung rechts)|Richtzeichen
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
332|Ausfahrttafel auf der Autobahn|Richtzeichen
333|Ausfahrt von der Autobahn|Richtzeichen
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
385|Ortshinweistafel|Richtzeichen
386.1|Touristischer Hinweis|Richtzeichen
390|Mautpflicht nach dem Bundesfernstraßenmautgesetz|Richtzeichen
391|Mautpflichtige Strecke|Richtzeichen
392|Zollstelle|Richtzeichen
393|Informationstafel an Grenzübergangsstellen|Richtzeichen
394|Laternenring|Richtzeichen
401|Bundesstraßen|Richtzeichen
405|Autobahnen|Richtzeichen
406|Knotenpunkte der Autobahnen|Richtzeichen
410|Europastraßen|Richtzeichen
415|Pfeilwegweiser auf Bundesstraßen|Richtzeichen
418|Pfeilwegweiser auf sonstigen Straßen|Richtzeichen
421|Pfeilwegweiser für bestimmte Verkehrsarten|Richtzeichen
422|Wegweiser für bestimmte Verkehrsarten|Richtzeichen
430|Pfeilwegweiser zur Autobahn|Richtzeichen
432|Pfeilwegweiser zu Zielen mit erheblicher Verkehrsbedeutung|Richtzeichen
434|Tabellenwegweiser|Richtzeichen
437|Straßennamensschild|Richtzeichen
438|Vorwegweiser außerhalb von Autobahnen|Richtzeichen
440|Vorwegweiser zur Autobahn|Richtzeichen
448.1|Autohof|Richtzeichen
449|Vorwegweiser auf Autobahnen|Richtzeichen
450|Ankündigungsbake|Richtzeichen
453|Entfernungstafel|Richtzeichen
454|Umleitungswegweiser|Richtzeichen
455.1|Ankündigung oder Fortsetzung der Umleitung|Richtzeichen
460|Bedarfsumleitung|Richtzeichen
466|Weiterführende Bedarfsumleitung|Richtzeichen
501|Überleitungstafel – ohne Gegenverkehr|Verkehrseinrichtung
600|Absperrschranke|Verkehrseinrichtung
605|Leitbake|Verkehrseinrichtung
610|Leitkegel|Verkehrseinrichtung
615|Fahrbare Absperrtafel|Verkehrseinrichtung
616|Fahrbare Absperrtafel mit Blinkpfeil|Verkehrseinrichtung
620|Leitpfosten|Verkehrseinrichtung
625|Richtungstafel in Kurven|Verkehrseinrichtung
626|Leitplatte|Verkehrseinrichtung
628|Leitschwelle mit Leitbake (Z 605)|Verkehrseinrichtung
720|Grünpfeilschild|Lichtzeichen
721|Grünpfeilschild mit Beschränkung auf den Radverkehr|Lichtzeichen
1000-30|Beide Richtungen, zwei gegengerichtete waagerechte Pfeile|Zusatzzeichen|1
1000-31|Beide Richtungen, zwei gegengerichtete senkrechte Pfeile|Zusatzzeichen|1
1000-32|Radverkehr kreuzt von links und rechts oder Radverkehr ist in der Gegenrichtung zugelassen|Zusatzzeichen|1
1000-34|Umleitungsbeschilderung Halbkreis|Zusatzzeichen|1
1001-30|Auf ... m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1001-31|Auf ... km (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1002-10|Verlauf der Vorfahrtstraße an Kreuzungen – von unten nach links|Zusatzzeichen|1
1004-30|Entfernungsangabe in m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1004-31|Entfernungsangabe in km (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1004-32|Stop in 100 m|Zusatzzeichen|1
1005-30|Reißverschluss erst in ... m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1006-30|Schleudergefahr für Wohnwagengespanne an Gefällestrecken mit starkem Seitenwind auf Autobahnen|Zusatzzeichen|1
1007-30|Ölspur|Zusatzzeichen|1
1008-30|Vorfahrt geändert|Zusatzzeichen|1
1008-31|Verkehrsführung geändert|Zusatzzeichen|1
1010-10|Erlaubt Kindern auch auf der Fahrbahn und dem Seitenstreifen zu spielen|Zusatzzeichen|1
1010-11|Wintersport erlaubt|Zusatzzeichen|1
1010-12|Kennzeichnung von Parkflächen, auf denen Anhänger auch länger als 14 Tage parken dürfen|Zusatzzeichen|1
1010-13|Kennzeichnung von Parkflächen, auf denen Wohnwagen auch länger als 14 Tage parken dürfen|Zusatzzeichen|1
1010-50|Kraftwagen und sonstige mehrspurige Fahrzeuge|Zusatzzeichen|1
1012-30|Ladezone|Zusatzzeichen|1
1012-31|Ende|Zusatzzeichen|1
1013-50|Seitenstreifen befahren|Zusatzzeichen|1
1013-51|Seitenstreifen räumen|Zusatzzeichen|1
1013-52|Ende in ... m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1014-50|Tunnelkategorie gemäß ADR-Übereinkommen – B|Zusatzzeichen|1
1014-51|Tunnelkategorie gemäß ADR-Übereinkommen – C|Zusatzzeichen|1
1014-52|Tunnelkategorie gemäß ADR-Übereinkommen – D|Zusatzzeichen|1
1014-53|Tunnelkategorie gemäß ADR-Übereinkommen – E|Zusatzzeichen|1
1020-11|Schwerbehinderte mit Parkausweis Nr. ... frei|Zusatzzeichen|1
1020-12|Radverkehr und Anlieger frei|Zusatzzeichen|1
1020-13|Inline-Skaten und Rollschuhfahren zugelassen|Zusatzzeichen|1
1020-30|Anlieger frei|Zusatzzeichen|1
1020-31|Anlieger oder Parken frei|Zusatzzeichen|1
1020-32|Bewohner mit Parkausweis Nr. ... frei|Zusatzzeichen|1
1022-10|Radverkehr frei|Zusatzzeichen|1
1022-11|Mofas frei|Zusatzzeichen|1
1022-12|Krafträder, auch mit Beiwagen, Kleinkrafträder und Mofas frei|Zusatzzeichen|1
1024-10|Personenkraftwagen frei|Zusatzzeichen|1
1024-11|Personenkraftwagen mit Anhänger frei|Zusatzzeichen|1
1024-12|Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t, einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen Personenkraftwagen und Kraftomnibusse frei|Zusatzzeichen|1
1024-13|Lastkraftwagen mit Anhänger frei|Zusatzzeichen|1
1024-14|Kraftomnibus frei|Zusatzzeichen|1
1024-15|Schienenbahn frei|Zusatzzeichen|1
1024-17|Kraftfahrzeuge und Züge, die nicht schneller als 25 km/h fahren können oder dürfen frei|Zusatzzeichen|1
1026-30|Taxi frei|Zusatzzeichen|1
1026-31|Kraftomnibusse im Gelegenheitsverkehr frei|Zusatzzeichen|1
1028-30|Baustellenfahrzeuge frei|Zusatzzeichen|1
1028-31|Bis Baustelle frei|Zusatzzeichen|1
1031-50|Freistellung vom Verkehrsverbot nach § 40 Absatz 1 BImSchG – rote, gelbe und grüne Plakette|Zusatzzeichen|1
1031-51|Freistellung vom Verkehrsverbot nach § 40 Absatz 1 BImSchG – gelbe und grüne Plakette|Zusatzzeichen|1
1040-30|Zeitliche Beschränkung (16 – 18 h)|Zusatzzeichen|1
1042-30|Zeitliche Beschränkung (werktags)|Zusatzzeichen|1
1044-10|Nur Schwerbehinderte mit außergewöhnlicher Gehbehinderung und Blinde|Zusatzzeichen|1
1044-11|Nur Schwerbehinderte mit Parkausweis Nr. ...|Zusatzzeichen|1
1049-11|Kraftfahrzeuge und Züge, die nicht schneller als 25 km/h fahren können oder dürfen, dürfen überholt werden|Zusatzzeichen|1
1049-12|Nur militärische Kettenfahrzeuge|Zusatzzeichen|1
1052-30|Nur kennzeichnungspflichtige Kraftfahrzeuge mit gefährlichen Gütern|Zusatzzeichen|1
1052-31|Nur Fahrzeuge mit wassergefährdender Ladung|Zusatzzeichen|1
1053-30|Parken in gekennzeichneten Flächen erlaubt|Zusatzzeichen|1
1053-31|Mit Parkschein|Zusatzzeichen|1
1053-32|Gebührenpflichtig|Zusatzzeichen|1
1053-33|Massenangabe – 7,5 t|Zusatzzeichen|1
1053-34|Auf dem Seitenstreifen|Zusatzzeichen|1
1053-35|Bei Nässe|Zusatzzeichen|1
1053-36|Durchgangsverkehr|Zusatzzeichen|1
1053-37|Massenangabe – 12 t|Zusatzzeichen|1
1053-38|Querparken als Sinnbild|Zusatzzeichen|1
1053-39|Schrägparken als Sinnbild|Zusatzzeichen|1
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
156-11|Bahnübergang mit dreistreifiger Bake mit Entfernungsangabe – Aufstellung rechts|Gefahrzeichen
156-21|Bahnübergang mit dreistreifiger Bake mit Entfernungsangabe – Aufstellung links|Gefahrzeichen
157|Dreistreifige Bake|Gefahrzeichen
157-11|Dreistreifige Bake mit Entfernungsangabe – Aufstellung rechts|Gefahrzeichen
157-21|Dreistreifige Bake mit Entfernungsangabe – Aufstellung links|Gefahrzeichen
159|Zweistreifige Bake|Gefahrzeichen
159-11|Zweistreifige Bake mit Entfernungsangabe – Aufstellung rechts|Gefahrzeichen
159-21|Zweistreifige Bake mit Entfernungsangabe – Aufstellung links|Gefahrzeichen
162|Einstreifige Bake|Gefahrzeichen
162-10|Einstreifige Bake – Aufstellung rechts|Gefahrzeichen
162-20|Einstreifige Bake – Aufstellung links|Gefahrzeichen
201|Andreaskreuz|Vorschriftzeichen
201-51|Andreaskreuz – stehend mit Blitzpfeil|Vorschriftzeichen
201-52|Andreaskreuz – liegend|Vorschriftzeichen
201-53|Andreaskreuz – liegend mit Blitzpfeil|Vorschriftzeichen
220-40|Einbahnstraße – doppelseitig (-10/-20)|Richtzeichen
223.1|Seitenstreifen befahren|Vorschriftzeichen
223.2|Seitenstreifen nicht mehr befahren|Vorschriftzeichen
223.3|Seitenstreifen räumen|Vorschriftzeichen
230|Ladebereich|Vorschriftzeichen
230-10|Ladebereich – Anfang – Aufstellung rechts|Vorschriftzeichen
230-20|Ladebereich – Ende – Aufstellung rechts|Vorschriftzeichen
241|Getrennter Rad- und Gehweg|Vorschriftzeichen
257-50|Verbot für Mofas|Vorschriftzeichen
257-51|Verbot für Reiter|Vorschriftzeichen
257-52|Verbot für Gespannfuhrwerke|Vorschriftzeichen
257-53|Verbot für Viehtrieb|Vorschriftzeichen
257-54|Verbot für Kraftomnibusse|Vorschriftzeichen
257-55|Verbot für Personenkraftwagen|Vorschriftzeichen
257-56|Verbot für Personenkraftwagen mit Anhänger|Vorschriftzeichen
257-57|Verbot für Lastkraftwagen mit Anhänger|Vorschriftzeichen
257-58|Verbot für Kraftfahrzeuge und Züge, die nicht schneller als 25 km/h fahren können oder dürfen|Vorschriftzeichen
257-59|Verbot für Elektrokleinstfahrzeuge im Sinne der Elektrokleinstfahrzeuge-Verordnung (eKFV)|Vorschriftzeichen
277.1|Verbot des Überholens von einspurigen Fahrzeugen für mehrspurige Kraftfahrzeuge und Krafträder mit Beiwagen|Vorschriftzeichen
281.1|Ende des Verbots des Überholens von einspurigen Fahrzeugen für mehrspurige Kraftfahrzeuge und Krafträder mit Beiwagen|Vorschriftzeichen
314-50|Parkhaus, Parkgarage|Richtzeichen
318|Parkscheibe|Richtzeichen
328|Nothalte- und Pannenbucht|Richtzeichen
350.1|Radschnellweg|Richtzeichen
350.2|Ende des Radschnellwegs|Richtzeichen
357-50|Sackgasse – für Radverkehr und Fußgänger durchlässige Sackgasse|Richtzeichen
357-51|Sackgasse – für Fußgänger durchlässige Sackgasse|Richtzeichen
357-52|Sackgasse – für Radverkehr durchlässige Sackgasse|Richtzeichen
365-51|Notrufsäule|Richtzeichen
365-52|Tankstelle|Richtzeichen
365-58|Toilette|Richtzeichen
365-65|Ladestation für Elektrofahrzeuge|Richtzeichen
365-66|Wasserstofftankstelle|Richtzeichen
386.2|Touristische Route|Richtzeichen
386.3|Touristische Unterrichtungstafel|Richtzeichen
390.2|Ende der Mautpflicht nach dem Bundesfernstraßenmautgesetz|Richtzeichen
501|Überleitungstafel – ohne Gegenverkehr|Verkehrseinrichtung
605-10|Leitbake – Schraffenbake – Aufstellung rechts|Verkehrseinrichtung
605-20|Leitbake – Schraffenbake – Aufstellung links|Verkehrseinrichtung
605-40|Leitbake – Schraffenbake – doppelseitig (-10/-20)|Verkehrseinrichtung
610|Leitkegel|Verkehrseinrichtung
615|Fahrbare Absperrtafel|Verkehrseinrichtung
616|Fahrbare Absperrtafel mit Blinkpfeil|Verkehrseinrichtung
625-10|Richtungstafel in Kurven – linksweisend: 500 x 500|Verkehrseinrichtung
625-20|Richtungstafel in Kurven – rechtsweisend: 500 x 500|Verkehrseinrichtung
626|Leitplatte|Verkehrseinrichtung
627|Leitmal|Verkehrseinrichtung
628|Leitschwelle mit Leitbake (Z 605)|Verkehrseinrichtung
629|Leitbord mit Leitbake|Verkehrseinrichtung
630|Parkwarntafel|Verkehrseinrichtung
1000-10|Richtung, linksweisend|Zusatzzeichen|1
1000-11|Vorankündigung, linksweisend|Zusatzzeichen|1
1000-20|Richtung, rechtsweisend|Zusatzzeichen|1
1000-21|Vorankündigung, rechtsweisend|Zusatzzeichen|1
1000-32|Radverkehr kreuzt von links und rechts oder Radverkehr ist in der Gegenrichtung zugelassen|Zusatzzeichen|1
1001-30|Auf ... m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1001-31|Auf ... km (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1001-32|noch ... m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1001-33|noch ... km (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1002-11|Verlauf der Vorfahrtstraße an Kreuzungen – von oben nach links|Zusatzzeichen|1
1002-12|Verlauf der Vorfahrtstraße an Einmündungen – von unten nach links, Einmündung von oben|Zusatzzeichen|1
1002-13|Verlauf der Vorfahrtstraße an Einmündungen – von unten nach links, Einmündung von rechts|Zusatzzeichen|1
1002-20|Verlauf der Vorfahrtstraße an Kreuzungen – von unten nach rechts|Zusatzzeichen|1
1002-21|Verlauf der Vorfahrtstraße an Kreuzungen – von oben nach rechts|Zusatzzeichen|1
1004-32|Stop in 100 m|Zusatzzeichen|1
1006-30|Schleudergefahr für Wohnwagengespanne an Gefällestrecken mit starkem Seitenwind auf Autobahnen|Zusatzzeichen|1
1006-31|Unfallgefahr|Zusatzzeichen|1
1006-32|Unfallgefahr Lkw|Zusatzzeichen|1
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
1010-12|Kennzeichnung von Parkflächen, auf denen Anhänger auch länger als 14 Tage parken dürfen|Zusatzzeichen|1
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
1010-61|Kraftfahrzeuge und Züge, die nicht schneller als 25 km/h fahren können oder dürfen|Zusatzzeichen|1
1010-62|Krafträder, auch mit Beiwagen, Kleinkrafträder und Mopeds|Zusatzzeichen|1
1010-63|Mofas|Zusatzzeichen|1
1010-64|Gespannfuhrwerk|Zusatzzeichen|1
1010-65|E-Bikes|Zusatzzeichen|1
1010-66|Elektrisch betriebene Fahrzeuge|Zusatzzeichen|1
1010-67|Wohnmobile|Zusatzzeichen|1
1010-68|Elektrokleinstfahrzeug im Sinne der Elektrokleinstfahrzeuge-Verordnung (eKFV)|Zusatzzeichen|1
1010-69|Fahrrad zum Transport von Gütern oder Personen – Lastenfahrrad|Zusatzzeichen|1
1012-30|Ladezone|Zusatzzeichen|1
1012-32|Radfahrer absteigen|Zusatzzeichen|1
1012-33|Keine Mofas|Zusatzzeichen|1
350-40|Fußgängerüberweg – doppelseitig (-10/-20)|Richtzeichen
350.1-10|Radschnellweg – Aufstellung rechts|Richtzeichen
350.1-20|Radschnellweg – Aufstellung links|Richtzeichen
350.2-10|Ende des Radschnellwegs – Aufstellung rechts|Richtzeichen
350.2-20|Ende des Radschnellwegs – Aufstellung links|Richtzeichen
365-53|Tankstelle mit Autogas|Richtzeichen
365-54|Tankstelle mit Erdgas|Richtzeichen
365-55|Autobahnhotel|Richtzeichen
365-56|Autobahngasthaus|Richtzeichen
365-57|Autobahnkiosk|Richtzeichen
365-59|Autobahnkapelle|Richtzeichen
365-60|Zelt- und Wohnwagenplatz|Richtzeichen
365-61|Informationsstelle|Richtzeichen
365-62|Pannenhilfe|Richtzeichen
365-63|Fußgängerunterführung|Richtzeichen
365-64|Fußgängerüberführung|Richtzeichen
365-67|Wohnmobilplatz|Richtzeichen
365-68|Wohnmobil- und Wohnwagenplatz|Richtzeichen
365-69|Tankstelle mit Flüssigerdgas|Richtzeichen
365-70|Tankmöglichkeit verschiedene Kraftstoffarten|Richtzeichen
365-71|Tankmöglichkeit alle Kraftstoffarten|Richtzeichen
365-72|Lkw-Platz|Richtzeichen
386.1-10|Touristischer Hinweis als Wegweiser – Wegweiser linksweisend|Richtzeichen
386.1-11|Touristischer Hinweis als Wegweiser – Vorwegweiser linksweisend|Richtzeichen
386.1-12|Touristischer Hinweis als Wegweiser – Pfeilwegweiser linksweisend|Richtzeichen
386.1-20|Touristischer Hinweis als Wegweiser – Wegweiser rechtsweisend|Richtzeichen
386.1-21|Touristischer Hinweis als Wegweiser – Vorwegweiser rechtsweisend|Richtzeichen
386.1-22|Touristischer Hinweis als Wegweiser – Pfeilwegweiser rechtsweisend|Richtzeichen
386.1-30|Touristischer Hinweis als Wegweiser – Vor-/Wegweiser geradeaus|Richtzeichen
386.1-40|Touristischer Hinweis als Wegweiser – Pfeilwegweiser doppelseitig|Richtzeichen
386.1-50|Touristischer Hinweis mit Bezugsziel – Variante „in“|Richtzeichen
386.1-51|Touristischer Hinweis mit Bezugsziel – Variante „via“|Richtzeichen
386.1-52|Touristischer Hinweis mit Bezugsziel – Variante „Richtung“|Richtzeichen
386.1-53|Touristischer Hinweis Fluss oder Kanal|Richtzeichen
386.2-10|Touristische Route – Wegweiser linksweisend|Richtzeichen
386.2-11|Touristische Route – Vorwegweiser linksweisend|Richtzeichen
386.2-12|Touristische Route – Pfeilwegweiser linksweisend|Richtzeichen
386.2-20|Touristische Route – Wegweiser rechtsweisend|Richtzeichen
386.2-21|Touristische Route – Vorwegweiser rechtsweisend|Richtzeichen
386.2-22|Touristische Route – Pfeilwegweiser rechtsweisend|Richtzeichen
386.2-30|Touristische Route – Vor-/Wegweiser geradeaus|Richtzeichen
386.2-40|Touristische Route – Pfeilwegweiser doppelseitig|Richtzeichen
386.2-51|Touristische Route – Hinweis mit Bezugsziel, Variante „via“|Richtzeichen
386.2-52|Touristische Route – Hinweis mit Bezugsziel, Variante „Richtung“|Richtzeichen
386.2-53|Touristische Route als Hinweisschild|Richtzeichen
386.3-50|Touristische Unterrichtungstafel – Erinnerungstafel gemäß „Brocken-Erklärung“|Richtzeichen
394-50|Laternenring – Schild|Richtzeichen
406-50|Knotenpunkte der Autobahnen – ein- oder zweistellige Nummer|Richtzeichen
406-51|Knotenpunkte der Autobahnen – drei- oder mehrstellige Nummer|Richtzeichen
415-10|Pfeilwegweiser auf Bundesstraßen – linksweisend|Richtzeichen
415-20|Pfeilwegweiser auf Bundesstraßen – rechtsweisend|Richtzeichen
415-40|Pfeilwegweiser auf Bundesstraßen – doppelseitig|Richtzeichen
418-10|Pfeilwegweiser auf sonstigen Straßen – linksweisend|Richtzeichen
418-20|Pfeilwegweiser auf sonstigen Straßen – rechtsweisend|Richtzeichen
418-40|Pfeilwegweiser auf sonstigen Straßen – doppelseitig|Richtzeichen
419|Pfeilwegweiser auf sonstigen Straßen mit geringerer Verkehrsbedeutung|Richtzeichen
419-10|Pfeilwegweiser auf sonstigen Straßen mit geringerer Verkehrsbedeutung – linksweisend|Richtzeichen
419-20|Pfeilwegweiser auf sonstigen Straßen mit geringerer Verkehrsbedeutung – rechtsweisend|Richtzeichen
419-40|Pfeilwegweiser auf sonstigen Straßen mit geringerer Verkehrsbedeutung – doppelseitig|Richtzeichen
421-10|Pfeilwegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – linksweisend|Richtzeichen
421-11|Pfeilwegweiser für bestimmte Verkehrsarten, kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – linksweisend|Richtzeichen
421-12|Pfeilwegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – linksweisend|Richtzeichen
421-20|Pfeilwegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – rechtsweisend|Richtzeichen
421-21|Pfeilwegweiser für bestimmte Verkehrsarten, kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – rechtsweisend|Richtzeichen
421-22|Pfeilwegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – rechtsweisend|Richtzeichen
421-40|Pfeilwegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – doppelseitig|Richtzeichen
421-41|Pfeilwegweiser für bestimmte Verkehrsarten, kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – doppelseitig|Richtzeichen
421-42|Pfeilwegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – doppelseitig|Richtzeichen
422-10|Wegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – hier links|Richtzeichen
422-11|Wegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – links einordnen|Richtzeichen
422-12|Wegweiser für bestimmte Verkehrsarten, Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – hier links|Richtzeichen
422-13|Wegweiser für bestimmte Verkehrsarten, Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – links einordnen|Richtzeichen
422-14|Wegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – hier links|Richtzeichen
422-15|Wegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – links einordnen|Richtzeichen
422-16|Wegweiser für bestimmte Verkehrsarten, Radverkehr – hier links|Richtzeichen
422-17|Wegweiser für bestimmte Verkehrsarten, Radverkehr – links einordnen|Richtzeichen
422-20|Wegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – hier rechts|Richtzeichen
422-21|Wegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – rechts einordnen|Richtzeichen
422-22|Wegweiser für bestimmte Verkehrsarten, Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – hier rechts|Richtzeichen
422-23|Wegweiser für bestimmte Verkehrsarten, Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – rechts einordnen|Richtzeichen
422-24|Wegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – hier rechts|Richtzeichen
422-25|Wegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – rechts einordnen|Richtzeichen
422-26|Wegweiser für bestimmte Verkehrsarten, Radverkehr – hier rechts|Richtzeichen
422-27|Wegweiser für bestimmte Verkehrsarten, Radverkehr – rechts einordnen|Richtzeichen
422-30|Wegweiser für bestimmte Verkehrsarten, KFZ mit einer zulässigen Gesamtmasse über 3,5 t – geradeaus|Richtzeichen
422-32|Wegweiser für bestimmte Verkehrsarten, Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – geradeaus|Richtzeichen
422-34|Wegweiser für bestimmte Verkehrsarten, Fahrzeuge mit wassergefährdender Ladung – geradeaus|Richtzeichen
422-36|Wegweiser für bestimmte Verkehrsarten, Radverkehr – geradeaus|Richtzeichen
430-10|Pfeilwegweiser zur Autobahn – linksweisend|Richtzeichen
430-20|Pfeilwegweiser zur Autobahn – rechtsweisend|Richtzeichen
430-40|Pfeilwegweiser zur Autobahn – doppelseitig|Richtzeichen
432-10|Pfeilwegweiser zu Zielen mit erheblicher Verkehrsbedeutung – linksweisend|Richtzeichen
432-20|Pfeilwegweiser zu Zielen mit erheblicher Verkehrsbedeutung – rechtsweisend|Richtzeichen
432-40|Pfeilwegweiser zu Zielen mit erheblicher Verkehrsbedeutung – doppelseitig|Richtzeichen
434-50|Tabellenwegweiser – kompakte Form|Richtzeichen
434-51|Tabellenwegweiser – teilaufgelöste Form|Richtzeichen
434-52|Tabellenwegweiser – aufgelöste Form (nur innerorts) mit Bundesstraßennummer|Richtzeichen
434-53|Tabellenwegweiser – aufgelöste Form (nur innerorts) ohne Bundesstraßennummer|Richtzeichen
439|Gegliederter Vorwegweiser außerhalb von Autobahnen|Richtzeichen
441|Gegliederter Vorwegweiser zur Autobahn|Richtzeichen
442|Vorwegweiser für bestimmte Verkehrsarten|Richtzeichen
442-10|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – linksweisend|Richtzeichen
442-11|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – linksweisend|Richtzeichen
442-12|Fahrzeuge mit wassergefährdender Ladung – linksweisend|Richtzeichen
442-13|Radverkehr – linksweisend|Richtzeichen
442-14|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – im Kreisverkehr linksweisend|Richtzeichen
442-15|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – im Kreisverkehr linksweisend|Richtzeichen
442-16|Fahrzeuge mit wassergefährdender Ladung – im Kreisverkehr linksweisend|Richtzeichen
442-17|Radverkehr – im Kreisverkehr linksweisend|Richtzeichen
442-20|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – rechtsweisend|Richtzeichen
442-21|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – rechtsweisend|Richtzeichen
442-22|Fahrzeuge mit wassergefährdender Ladung – rechtsweisend|Richtzeichen
442-23|Radverkehr – rechtsweisend|Richtzeichen
442-24|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – im Kreisverkehr rechtsweisend|Richtzeichen
442-25|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – im Kreisverkehr rechtsweisend|Richtzeichen
442-26|Fahrzeuge mit wassergefährdender Ladung – im Kreisverkehr rechtsweisend|Richtzeichen
442-27|Radverkehr – im Kreisverkehr rechtsweisend|Richtzeichen
442-30|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – im Kreisverkehr geradeausweisend|Richtzeichen
442-31|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – im Kreisverkehr geradeausweisend|Richtzeichen
442-32|Fahrzeuge mit wassergefährdender Ladung – im Kreisverkehr geradeausweisend|Richtzeichen
442-33|Radverkehr – im Kreisverkehr geradeausweisend|Richtzeichen
442-50|KFZ mit einer zulässigen Gesamtmasse über 3,5 t – ohne Pfeilsymbol|Richtzeichen
442-51|Kennzeichnungspflichtige Fahrzeuge mit gefährlichen Gütern – ohne Pfeilsymbol|Richtzeichen
442-52|Fahrzeuge mit wassergefährdender Ladung – ohne Pfeilsymbol|Richtzeichen
442-53|Radverkehr – ohne Pfeilsymbol|Richtzeichen
448|Ankündigungstafel|Richtzeichen
448-50|Ankündigungstafel – auf anderen Straßen außerhalb von Autobahnen|Richtzeichen
449-50|Vorwegweiser – auf anderen Straßen außerhalb von Autobahnen|Richtzeichen
450-50|Ankündigungsbake – einstreifig (100 m)|Richtzeichen
450-51|Ankündigungsbake – zweistreifig (200 m)|Richtzeichen
450-52|Ankündigungsbake – dreistreifig (300 m)|Richtzeichen
450-53|Ankündigungsbake – einstreifig (100 m, gelb)|Richtzeichen
450-54|Ankündigungsbake – zweistreifig (200 m, gelb)|Richtzeichen
450-55|Ankündigungsbake – dreistreifig (300 m, gelb)|Richtzeichen
453-50|Entfernungstafel auf autobahnähnlich ausgebauten, zweibahnigen Straßen|Richtzeichen
454-10|Umleitungswegweiser – linksweisend|Richtzeichen
454-20|Umleitungswegweiser – rechtsweisend|Richtzeichen
454-40|Umleitungswegweiser – doppelseitig|Richtzeichen
455.1-10|Ankündigung oder Fortsetzung der Umleitung – Vorankündigung links|Richtzeichen
455.1-11|Ankündigung oder Fortsetzung der Umleitung – hier links|Richtzeichen
455.1-12|Ankündigung oder Fortsetzung der Umleitung – links einordnen|Richtzeichen
455.1-13|Ankündigung oder Fortsetzung der Umleitung – im Kreisverkehr links|Richtzeichen
455.1-20|Ankündigung oder Fortsetzung der Umleitung – Vorankündigung rechts|Richtzeichen
455.1-21|Ankündigung oder Fortsetzung der Umleitung – hier rechts|Richtzeichen
455.1-22|Ankündigung oder Fortsetzung der Umleitung – rechts einordnen|Richtzeichen
455.1-23|Ankündigung oder Fortsetzung der Umleitung – im Kreisverkehr rechts|Richtzeichen
455.1-30|Ankündigung oder Fortsetzung der Umleitung – geradeaus|Richtzeichen
455.1-31|Ankündigung oder Fortsetzung der Umleitung – im Kreisverkehr geradeaus|Richtzeichen
455.1-50|Ankündigung oder Fortsetzung der Umleitung – ohne Pfeilsymbol|Richtzeichen
455.2|Ende der Umleitung (in Verbindung mit Z 455.1)|Richtzeichen
457.1|Umleitungsankündigung|Richtzeichen
457.2|Ende der Umleitung|Richtzeichen
458|Planskizze|Richtzeichen
460-10|Bedarfsumleitung – Vorankündigung links|Richtzeichen
460-11|Bedarfsumleitung – hier links|Richtzeichen
460-12|Bedarfsumleitung – links einordnen|Richtzeichen
460-13|Bedarfsumleitung – im Kreisverkehr links|Richtzeichen
460-20|Bedarfsumleitung – Vorankündigung rechts|Richtzeichen
460-21|Bedarfsumleitung – hier rechts|Richtzeichen
460-22|Bedarfsumleitung – rechts einordnen|Richtzeichen
460-23|Bedarfsumleitung – im Kreisverkehr rechts|Richtzeichen
460-30|Bedarfsumleitung – geradeaus|Richtzeichen
460-31|Bedarfsumleitung – im Kreisverkehr geradeaus|Richtzeichen
460-50|Bedarfsumleitung – ohne Pfeilsymbol|Richtzeichen
467.1|Umlenkungspfeil (Streckenempfehlung)|Richtzeichen
467.1-10|Umlenkungspfeil (Streckenempfehlung) – linksweisend|Richtzeichen
467.1-20|Umlenkungspfeil (Streckenempfehlung) – rechtsweisend|Richtzeichen
467.1-30|Umlenkungspfeil (Streckenempfehlung) – geradeaus|Richtzeichen
467.2|Umlenkungspfeil Ende (Ende einer Streckenempfehlung)|Richtzeichen
501-10|Überleitungstafel – ohne Gegenverkehr – 1-streifig nach links|Richtzeichen
501-11|Überleitungstafel – ohne Gegenverkehr – 2-streifig nach links|Richtzeichen
501-12|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach links|Richtzeichen
501-13|Überleitungstafel – ohne Gegenverkehr – 2-streifig nach links, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-14|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach links, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-15|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach links, davon 2 Fahrstreifen übergeleitet|Richtzeichen
501-16|Überleitungstafel – ohne Gegenverkehr – 2-streifig, davon linker Fahrstreifen nach links übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-17|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon linker Fahrstreifen nach links übergeleitet und die beiden rechten Fahrstreifen geradeaus|Richtzeichen
501-18|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon die beiden linken Fahrstreifen nach links übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-19|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon linker Fahrstreifen nach links übergeleitet und die drei rechten Fahrstreifen geradeaus|Richtzeichen
501-20|Überleitungstafel – ohne Gegenverkehr – 1-streifig nach rechts|Richtzeichen
501-21|Überleitungstafel – ohne Gegenverkehr – 2-streifig nach rechts|Richtzeichen
501-22|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach rechts|Richtzeichen
501-23|Überleitungstafel – ohne Gegenverkehr – 2-streifig nach rechts, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-24|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach rechts, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-25|Überleitungstafel – ohne Gegenverkehr – 3-streifig nach rechts, davon 2 Fahrstreifen übergeleitet|Richtzeichen
501-26|Überleitungstafel – ohne Gegenverkehr – 2-streifig, davon linker Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-27|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon linker Fahrstreifen nach rechts übergeleitet und die beiden rechten Fahrstreifen geradeaus|Richtzeichen
501-28|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon die beiden linken Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-29|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon linker Fahrstreifen nach rechts übergeleitet und die drei rechten Fahrstreifen geradeaus|Richtzeichen
501-50|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die beiden linken Fahrstreifen nach links übergeleitet und die beiden rechten Fahrstreifen geradeaus|Richtzeichen
501-51|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die drei linken Fahrstreifen nach links übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-52|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach links, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-53|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach links, davon 2 Fahrstreifen übergeleitet|Richtzeichen
501-54|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach links, davon 3 Fahrstreifen übergeleitet|Richtzeichen
501-60|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die beiden linken Fahrstreifen nach rechts übergeleitet und die beiden rechten Fahrstreifen geradeaus|Richtzeichen
501-61|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die drei linken Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen geradeaus|Richtzeichen
501-62|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach rechts, davon 1 Fahrstreifen übergeleitet|Richtzeichen
501-63|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach rechts, davon 2 Fahrstreifen übergeleitet|Richtzeichen
501-64|Überleitungstafel – ohne Gegenverkehr – 4-streifig nach rechts, davon 3 Fahrstreifen übergeleitet|Richtzeichen
501-70|Überleitungstafel – ohne Gegenverkehr – 2-streifig, davon linker Fahrstreifen nach links übergeleitet und rechter Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-71|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon linker Fahrstreifen nach links übergeleitet und die beiden rechten Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-72|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon die beiden linken Fahrstreifen nach links übergeleitet und rechter Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-73|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon linker Fahrstreifen nach links übergeleitet und die drei rechten Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-74|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die beiden linken Fahrstreifen nach links übergeleitet und die beiden rechten Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-75|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die drei linken Fahrstreifen nach links übergeleitet und rechter Fahrstreifen nach rechts verschwenkt|Richtzeichen
501-80|Überleitungstafel – ohne Gegenverkehr – 2-streifig, davon linker Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen nach links verschwenkt|Richtzeichen
501-81|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon linker Fahrstreifen nach rechts übergeleitet und die beiden rechten Fahrstreifen nach links verschwenkt|Richtzeichen
501-82|Überleitungstafel – ohne Gegenverkehr – 3-streifig, davon die beiden linken Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen nach links verschwenkt|Richtzeichen
501-83|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon linker Fahrstreifen nach rechts übergeleitet und die drei rechten Fahrstreifen nach links verschwenkt|Richtzeichen
501-84|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die beiden linken Fahrstreifen nach rechts übergeleitet und die beiden rechten Fahrstreifen nach links verschwenkt|Richtzeichen
501-85|Überleitungstafel – ohne Gegenverkehr – 4-streifig, davon die drei linken Fahrstreifen nach rechts übergeleitet und rechter Fahrstreifen nach links verschwenkt|Richtzeichen
505|Überleitungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 StVO|Richtzeichen
505-11|Überleitungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 StVO – 2-streifig nach links|Richtzeichen
505-12|Überleitungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 StVO – 3-streifig nach links|Richtzeichen
505-21|Überleitungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 StVO – 2-streifig nach rechts|Richtzeichen
505-22|Überleitungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 StVO – 3-streifig nach rechts|Richtzeichen
511|Verschwenkungstafel – ohne Gegenverkehr|Richtzeichen
511-10|Verschwenkungstafel – ohne Gegenverkehr – 1-streifig nach links|Richtzeichen
511-11|Verschwenkungstafel – ohne Gegenverkehr – 2-streifig nach links|Richtzeichen
511-12|Verschwenkungstafel – ohne Gegenverkehr – 3-streifig nach links|Richtzeichen
511-13|Verschwenkungstafel – ohne Gegenverkehr – 4-streifig nach links|Richtzeichen
511-20|Verschwenkungstafel – ohne Gegenverkehr – 1-streifig nach rechts|Richtzeichen
511-21|Verschwenkungstafel – ohne Gegenverkehr – 2-streifig nach rechts|Richtzeichen
511-22|Verschwenkungstafel – ohne Gegenverkehr – 3-streifig nach rechts|Richtzeichen
511-23|Verschwenkungstafel – ohne Gegenverkehr – 4-streifig nach rechts|Richtzeichen
511-25|Verschwenkungstafel – ohne Gegenverkehr – 1-streifige Verschwenkung auf den Seitenstreifen|Richtzeichen
511-26|Verschwenkungstafel – ohne Gegenverkehr – 2-streifige Verschwenkung, 1-streifig auf den Seitenstreifen|Richtzeichen
511-27|Verschwenkungstafel – ohne Gegenverkehr – 3-streifige Verschwenkung, 1-streifig auf den Seitenstreifen|Richtzeichen
511-28|Verschwenkungstafel – ohne Gegenverkehr – 4-streifige Verschwenkung, 1-streifig auf den Seitenstreifen|Richtzeichen
512|Verschwenkungstafel – mit Gegenverkehr|Richtzeichen
512-10|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach links 1-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
512-11|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach links 1-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
512-12|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach links 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
512-20|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach rechts 1-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
512-21|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach rechts 1-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
512-22|Verschwenkungstafel – mit Gegenverkehr – Verschwenkung nach rechts 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
513|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr|Richtzeichen
513-10|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 1-streifig nach links|Richtzeichen
513-11|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 2-streifig nach links|Richtzeichen
513-12|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 3-streifig nach links|Richtzeichen
513-13|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 4-streifig nach links|Richtzeichen
513-14|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 5-streifig nach links|Richtzeichen
513-20|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 1-streifig nach rechts|Richtzeichen
513-21|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 2-streifig nach rechts|Richtzeichen
513-22|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 3-streifig nach rechts|Richtzeichen
513-23|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 4-streifig nach rechts|Richtzeichen
513-24|Verschwenkungstafel kurze Verschwenkung – ohne Gegenverkehr – 5-streifig nach rechts|Richtzeichen
514|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr|Richtzeichen
514-10|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 1-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-11|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-12|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 3-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-13|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 1-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-14|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 2-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-15|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 3-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-16|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 1-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
514-17|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 2-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
514-18|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach links 3-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
514-20|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 1-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-21|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-22|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 3-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
514-23|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 1-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-24|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 2-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-25|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 3-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
514-26|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 1-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
514-27|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 2-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
514-28|Verschwenkungstafel kurze Verschwenkung – mit Gegenverkehr – nach rechts 3-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
515|Verschwenkungstafel – ohne Gegenverkehr mit integriertem Zeichen 264|Richtzeichen
515-11|Verschwenkungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 – 2-streifig nach links|Richtzeichen
515-12|Verschwenkungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 – 3-streifig nach links|Richtzeichen
515-21|Verschwenkungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 – 2-streifig nach rechts|Richtzeichen
515-22|Verschwenkungstafel – ohne Gegenverkehr mit integriertem Zeichen 264 – 3-streifig nach rechts|Richtzeichen
521|Fahrstreifentafel – ohne Gegenverkehr|Richtzeichen
521-30|Fahrstreifentafel – ohne Gegenverkehr – 2-streifig in Fahrtrichtung|Richtzeichen
521-31|Fahrstreifentafel – ohne Gegenverkehr – 3-streifig in Fahrtrichtung|Richtzeichen
521-32|Fahrstreifentafel – ohne Gegenverkehr – 4-streifig in Fahrtrichtung|Richtzeichen
521-33|Fahrstreifentafel – ohne Gegenverkehr – 5-streifig in Fahrtrichtung|Richtzeichen
522|Fahrstreifentafel – mit Gegenverkehr|Richtzeichen
522-30|Fahrstreifentafel – mit Gegenverkehr – 1-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
522-31|Fahrstreifentafel – mit Gegenverkehr – 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
522-32|Fahrstreifentafel – mit Gegenverkehr – 1-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
522-33|Fahrstreifentafel – mit Gegenverkehr – 2-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
522-34|Fahrstreifentafel – mit Gegenverkehr – 3-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
522-35|Fahrstreifentafel – mit Gegenverkehr – 2-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
522-36|Fahrstreifentafel – mit Gegenverkehr – 3-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
522-37|Fahrstreifentafel – mit Gegenverkehr – 3-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
522-38|Fahrstreifentafel – mit Gegenverkehr – 1-streifig in Fahrtrichtung und 3-streifig in Gegenrichtung|Richtzeichen
523|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 274|Richtzeichen
523-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 274 – 2-streifig in Fahrtrichtung|Richtzeichen
523-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 274 – 3-streifig in Fahrtrichtung|Richtzeichen
524|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 253|Richtzeichen
524-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 253 – 2-streifig in Fahrtrichtung|Richtzeichen
524-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 253 – 3-streifig in Fahrtrichtung|Richtzeichen
524-32|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 253 – 4-streifig in Fahrtrichtung|Richtzeichen
524-33|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 253 – 5-streifig in Fahrtrichtung|Richtzeichen
525|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 275|Richtzeichen
525-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 275 – 3-streifig in Fahrtrichtung|Richtzeichen
526|Fahrstreifentafel – mit Gegenverkehr mit integriertem Zeichen 275|Richtzeichen
526-31|Fahrstreifentafel – mit Gegenverkehr mit integriertem Zeichen 275 – 2-streifig in Fahrtrichtung und 1-streifig in Gegenrichtung|Richtzeichen
526-33|Fahrstreifentafel – mit Gegenverkehr mit integriertem Zeichen 275 – 2-streifig in Fahrtrichtung und 2-streifig in Gegenrichtung|Richtzeichen
527|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 262|Richtzeichen
527-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 262 – 2-streifig in Fahrtrichtung|Richtzeichen
527-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 262 – 3-streifig in Fahrtrichtung|Richtzeichen
528|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 263|Richtzeichen
528-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 263 – 2-streifig in Fahrtrichtung|Richtzeichen
528-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 263 – 3-streifig in Fahrtrichtung|Richtzeichen
529|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 265|Richtzeichen
529-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 265 – 2-streifig in Fahrtrichtung|Richtzeichen
529-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 265 – 3-streifig in Fahrtrichtung|Richtzeichen
531|Einengungstafel – ohne Gegenverkehr|Richtzeichen
531-10|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 2 auf 1 Fahrstreifen|Richtzeichen
531-11|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 3 auf 2 Fahrstreifen|Richtzeichen
531-12|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 4 auf 3 Fahrstreifen|Richtzeichen
531-13|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 5 auf 4 Fahrstreifen|Richtzeichen
531-14|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 3 auf 1 Fahrstreifen|Richtzeichen
531-15|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 4 auf 2 Fahrstreifen|Richtzeichen
531-16|Einengungstafel – ohne Gegenverkehr – Einzug rechts, von 5 auf 3 Fahrstreifen|Richtzeichen
531-20|Einengungstafel – ohne Gegenverkehr – Einzug links, von 2 auf 1 Fahrstreifen|Richtzeichen
531-21|Einengungstafel – ohne Gegenverkehr – Einzug links, von 3 auf 2 Fahrstreifen|Richtzeichen
531-22|Einengungstafel – ohne Gegenverkehr – Einzug links, von 4 auf 3 Fahrstreifen|Richtzeichen
531-23|Einengungstafel – ohne Gegenverkehr – Einzug links, von 5 auf 4 Fahrstreifen|Richtzeichen
531-24|Einengungstafel – ohne Gegenverkehr – Einzug links, von 3 auf 1 Fahrstreifen|Richtzeichen
531-25|Einengungstafel – ohne Gegenverkehr – Einzug links, von 4 auf 2 Fahrstreifen|Richtzeichen
531-26|Einengungstafel – ohne Gegenverkehr – Einzug links, von 5 auf 3 Fahrstreifen|Richtzeichen
532|Einengungstafel – mit Gegenverkehr|Richtzeichen
532-10|Einengungstafel – mit Gegenverkehr – Einzug rechts, noch 1 Fahrstreifen und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
532-20|Einengungstafel – mit Gegenverkehr – Einzug links, noch 1 Fahrstreifen und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
532-21|Einengungstafel – mit Gegenverkehr – Einzug links, noch 1 Fahrstreifen und 2 Fahrstreifen in Gegenrichtung|Richtzeichen
533|Trennungstafel|Richtzeichen
533-20|Trennungstafel – 2-streifig durchgehend und 1-streifig rechts ab|Richtzeichen
533-21|Trennungstafel – 3-streifig durchgehend und 1-streifig rechts ab|Richtzeichen
533-22|Trennungstafel – 2-streifig durchgehend und 2-streifig rechts ab|Richtzeichen
533-23|Trennungstafel – 3-streifig durchgehend und 2-streifig rechts ab|Richtzeichen
533-24|Trennungstafel – 4-streifig durchgehend und 1-streifig rechts ab|Richtzeichen
533-25|Trennungstafel – 4-streifig durchgehend und 2-streifig rechts ab|Richtzeichen
533-26|Trennungstafel – 4-streifig durchgehend und 3-streifig rechts ab|Richtzeichen
533-27|Trennungstafel – 5-streifig durchgehend und 1-streifig rechts ab|Richtzeichen
533-28|Trennungstafel – 5-streifig durchgehend und 2-streifig rechts ab|Richtzeichen
533-29|Trennungstafel – 5-streifig durchgehend und 3-streifig rechts ab|Richtzeichen
533-60|Trennungstafel – 2-streifig durchgehend und 1-streifig sowie aus dem rechten durchgehenden Fahrstreifen rechts ab|Richtzeichen
533-61|Trennungstafel – 3-streifig durchgehend und 1-streifig sowie aus dem rechten durchgehenden Fahrstreifen rechts ab|Richtzeichen
533-62|Trennungstafel – 4-streifig durchgehend und 1-streifig sowie aus dem rechten durchgehenden Fahrstreifen rechts ab|Richtzeichen
533-63|Trennungstafel – 5-streifig durchgehend und 1-streifig sowie aus dem rechten durchgehenden Fahrstreifen rechts ab|Richtzeichen
535|Einengungstafel – ohne Gegenverkehr mit integriertem Zeichen 279|Richtzeichen
535-11|Einengungstafel – ohne Gegenverkehr mit integriertem Zeichen 279 – Einzug rechts, noch 2 Fahrstreifen in Fahrtrichtung|Richtzeichen
535-21|Einengungstafel – ohne Gegenverkehr mit integriertem Zeichen 279 – Einzug links, noch 2 Fahrstreifen in Fahrtrichtung|Richtzeichen
536|Einengungstafel – mit Gegenverkehr mit integriertem Zeichen 279|Richtzeichen
536-20|Einengungstafel – mit Gegenverkehr mit integriertem Zeichen 279 – Einzug links, noch 1 Fahrstreifen und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
536-21|Einengungstafel – mit Gegenverkehr mit integriertem Zeichen 279 – Einzug links, noch 1 Fahrstreifen und 2 Fahrstreifen in Gegenrichtung|Richtzeichen
537|Fahrstreifentafel – ohne Gegenverkehr mit integrierten Zeichen 278|Richtzeichen
537-30|Fahrstreifentafel – ohne Gegenverkehr mit integrierten Zeichen 278 – 2-streifig in Fahrtrichtung|Richtzeichen
537-31|Fahrstreifentafel – ohne Gegenverkehr mit integrierten Zeichen 278 – 3-streifig in Fahrtrichtung|Richtzeichen
538|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 282|Richtzeichen
538-30|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 282 – 2-streifig in Fahrtrichtung|Richtzeichen
538-31|Fahrstreifentafel – ohne Gegenverkehr mit integriertem Zeichen 282 – 3-streifig in Fahrtrichtung|Richtzeichen
541|Aufweitungstafel – ohne Gegenverkehr|Richtzeichen
541-10|Aufweitungstafel – ohne Gegenverkehr – 1-streifig plus Fahrstreifen links|Richtzeichen
541-11|Aufweitungstafel – ohne Gegenverkehr – 2-streifig plus Fahrstreifen links|Richtzeichen
541-12|Aufweitungstafel – ohne Gegenverkehr – 3-streifig plus Fahrstreifen links|Richtzeichen
541-13|Aufweitungstafel – ohne Gegenverkehr – 4-streifig plus Fahrstreifen links|Richtzeichen
541-20|Aufweitungstafel – ohne Gegenverkehr – 1-streifig plus Fahrstreifen rechts|Richtzeichen
541-21|Aufweitungstafel – ohne Gegenverkehr – 2-streifig plus Fahrstreifen rechts|Richtzeichen
541-22|Aufweitungstafel – ohne Gegenverkehr – 3-streifig plus Fahrstreifen rechts|Richtzeichen
541-23|Aufweitungstafel – ohne Gegenverkehr – 4-streifig plus Fahrstreifen rechts|Richtzeichen
542|Aufweitungstafel – mit Gegenverkehr|Richtzeichen
542-10|Aufweitungstafel – mit Gegenverkehr – 1-streifig plus Fahrstreifen links und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
542-11|Aufweitungstafel – mit Gegenverkehr – 1-streifig plus Fahrstreifen links und 2 Fahrstreifen in Gegenrichtung|Richtzeichen
542-12|Aufweitungstafel – mit Gegenverkehr – 2-streifig plus Fahrstreifen links und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
542-13|Aufweitungstafel – mit Gegenverkehr – 2-streifig plus Fahrstreifen links und 2 Fahrstreifen in Gegenrichtung|Richtzeichen
542-14|Aufweitungstafel – mit Gegenverkehr – 1-streifig plus Fahrstreifen links und 3 Fahrstreifen in Gegenrichtung|Richtzeichen
542-15|Aufweitungstafel – mit Gegenverkehr – 2-streifig plus Fahrstreifen links und 3 Fahrstreifen in Gegenrichtung|Richtzeichen
545|Aufweitungstafel – ohne Gegenverkehr mit integriertem Zeichen 275|Richtzeichen
545-11|Aufweitungstafel – ohne Gegenverkehr mit integriertem Zeichen 275 – 2-streifig plus Fahrstreifen links|Richtzeichen
546|Aufweitungstafel – mit Gegenverkehr mit integriertem Zeichen 275|Richtzeichen
546-10|Aufweitungstafel – mit Gegenverkehr mit integriertem Zeichen 275 – 1-streifig plus Fahrstreifen links und 1 Fahrstreifen in Gegenrichtung|Richtzeichen
546-11|Aufweitungstafel – mit Gegenverkehr mit integriertem Zeichen 275 – 1-streifig plus Fahrstreifen links und 2 Fahrstreifen in Gegenrichtung|Richtzeichen
550|Zusammenführungstafel – an durchgehender Strecke|Richtzeichen
550-20|Zusammenführungstafel – an durchgehender Strecke – 1-streifig plus 1 Fahrstreifen von rechts|Richtzeichen
550-21|Zusammenführungstafel – an durchgehender Strecke – 2-streifig plus 1 Fahrstreifen von rechts|Richtzeichen
550-22|Zusammenführungstafel – an durchgehender Strecke – 3-streifig plus 1 Fahrstreifen von rechts|Richtzeichen
550-23|Zusammenführungstafel – an durchgehender Strecke – 2-streifig plus 2 Fahrstreifen von rechts|Richtzeichen
550-24|Zusammenführungstafel – an durchgehender Strecke – 3-streifig plus 2 Fahrstreifen von rechts|Richtzeichen
550-25|Zusammenführungstafel – an durchgehender Strecke – 4-streifig plus 1 Fahrstreifen von rechts|Richtzeichen
550-26|Zusammenführungstafel – an durchgehender Strecke – 4-streifig plus 2 Fahrstreifen von rechts|Richtzeichen
550-27|Zusammenführungstafel – an durchgehender Strecke – 4-streifig plus 3 Fahrstreifen von rechts|Richtzeichen
550-28|Zusammenführungstafel – an durchgehender Strecke – 5-streifig plus 1 Fahrstreifen von rechts|Richtzeichen
550-29|Zusammenführungstafel – an durchgehender Strecke – 5-streifig plus 2 Fahrstreifen von rechts|Richtzeichen
550-60|Zusammenführungstafel – an durchgehender Strecke – 5-streifig plus 3 Fahrstreifen von rechts|Richtzeichen
551|Zusammenführungstafel – an einmündender Strecke|Richtzeichen
551-20|Zusammenführungstafel – an einmündender Strecke – 1-streifig einmündend plus 1-streifig durchgehend|Richtzeichen
551-21|Zusammenführungstafel – an einmündender Strecke – 1-streifig einmündend plus 2-streifig durchgehend|Richtzeichen
551-22|Zusammenführungstafel – an einmündender Strecke – 2-streifig einmündend plus 2-streifig durchgehend|Richtzeichen
551-23|Zusammenführungstafel – an einmündender Strecke – 2-streifig einmündend plus 3-streifig durchgehend|Richtzeichen
551-24|Zusammenführungstafel – an einmündender Strecke – 1-streifig einmündend plus 3-streifig durchgehend|Richtzeichen
551-25|Zusammenführungstafel – an einmündender Strecke – 1-streifig einmündend plus 4-streifig durchgehend|Richtzeichen
551-26|Zusammenführungstafel – an einmündender Strecke – 2-streifig einmündend plus 4-streifig durchgehend|Richtzeichen
551-27|Zusammenführungstafel – an einmündender Strecke – 3-streifig einmündend plus 4-streifig durchgehend|Richtzeichen
551-28|Zusammenführungstafel – an einmündender Strecke – 1-streifig einmündend plus 5-streifig durchgehend|Richtzeichen
551-29|Zusammenführungstafel – an einmündender Strecke – 2-streifig einmündend plus 5-streifig durchgehend|Richtzeichen
551-60|Zusammenführungstafel – an einmündender Strecke – 3-streifig einmündend plus 5-streifig durchgehend|Richtzeichen
590|Blockumfahrung|Richtzeichen
590-10|Blockumfahrung rechts, links, links|Richtzeichen
590-11|Blockumfahrung rechts, rechts, rechts|Richtzeichen
600-30|Absperrschranke – 100 x 800|Verkehrseinrichtung
600-31|Absperrschranke – 100 x 1 200|Verkehrseinrichtung
600-32|Absperrschranke – 100 x 1 600|Verkehrseinrichtung
600-33|Absperrschranke – 250 x 1 200|Verkehrseinrichtung
600-34|Absperrschranke – 250 x 1 600|Verkehrseinrichtung
600-35|Absperrschranke – 250 x 2 000|Verkehrseinrichtung
600-36|Absperrschranke – 250 x 2 400|Verkehrseinrichtung
600-37|Absperrschranke – 500 x 1 600|Verkehrseinrichtung
600-38|Absperrschranke – 500 x 2 000|Verkehrseinrichtung
600-39|Absperrschranke – 500 x 2 400|Verkehrseinrichtung
600-50|Absperrschranke – 100 x 2 000|Verkehrseinrichtung
600-51|Absperrschranke – 100 x 2 400|Verkehrseinrichtung
600-52|Absperrschranke – 250 x 800|Verkehrseinrichtung
600-60|Sperrpfosten (Schraffur waagerecht)|Verkehrseinrichtung
605-11|Leitbake – Pfeilbake – Aufstellung rechts|Verkehrseinrichtung
605-12|Leitbake – Warnbake – Aufstellung rechts|Verkehrseinrichtung
605-13|Leitbake – Warnlichtbake – Aufstellung rechts|Verkehrseinrichtung
605-14|Leitbake – Warnlichtbake mit integriertem Zeichen 222 – Aufstellung rechts mit Zeichen 222-10|Verkehrseinrichtung
605-21|Leitbake – Pfeilbake – Aufstellung links|Verkehrseinrichtung
605-22|Leitbake – Warnbake – Aufstellung links|Verkehrseinrichtung
605-23|Leitbake – Warnlichtbake – Aufstellung links|Verkehrseinrichtung
605-24|Leitbake – Warnlichtbake mit integriertem Zeichen 222 – Aufstellung links mit Zeichen 222|Verkehrseinrichtung
605-41|Leitbake – Schraffenbake – doppelseitig (-20/-20)|Verkehrseinrichtung
605-42|Leitbake – Pfeilbake – doppelseitig (-11/-21)|Verkehrseinrichtung
605-43|Leitbake – Pfeilbake – doppelseitig (-21/-21)|Verkehrseinrichtung
605-44|Leitbake – Warnbake – doppelseitig (-12/-22)|Verkehrseinrichtung
605-45|Leitbake – Warnbake – doppelseitig (-22/-22)|Verkehrseinrichtung
610-40|Leitkegel – Höhe = 300 (Ringhöhe 55 mm)|Verkehrseinrichtung
610-41|Leitkegel – Höhe = 500 (Ringhöhe 85 mm)|Verkehrseinrichtung
610-42|Leitkegel – Höhe = 750 (Ringhöhe 130 mm)|Verkehrseinrichtung
610-43|Leitkegel – Höhe = 1 000 (Ringhöhe 180 mm)|Verkehrseinrichtung
616-30|Fahrbare Absperrtafel mit Blinkpfeil – große Ausführung (3 600 x 2 200)|Verkehrseinrichtung
616-31|Fahrbare Absperrtafel mit Blinkpfeil – kleine Ausführung (2 500 x 1 700)|Verkehrseinrichtung
620-40|Leitpfosten – rechts|Verkehrseinrichtung
620-41|Leitpfosten – links|Verkehrseinrichtung
625-11|Richtungstafel in Kurven – linksweisend: 500 x 1 500|Verkehrseinrichtung
625-12|Richtungstafel in Kurven – linksweisend: 500 x 2 000|Verkehrseinrichtung
625-13|Richtungstafel in Kurven – linksweisend: 500 x 2 500|Verkehrseinrichtung
625-14|Richtungstafel in Kurven – linksweisend: 700 x 700|Verkehrseinrichtung
625-15|Richtungstafel in Kurven – linksweisend: 700 x 2 100|Verkehrseinrichtung
625-16|Richtungstafel in Kurven – linksweisend: 700 x 2 800|Verkehrseinrichtung
625-17|Richtungstafel in Kurven – linksweisend: 700 x 3 500|Verkehrseinrichtung
625-21|Richtungstafel in Kurven – rechtsweisend: 500 x 1 500|Verkehrseinrichtung
625-22|Richtungstafel in Kurven – rechtsweisend: 500 x 2 000|Verkehrseinrichtung
625-23|Richtungstafel in Kurven – rechtsweisend: 500 x 2 500|Verkehrseinrichtung
625-24|Richtungstafel in Kurven – rechtsweisend: 700 x 700|Verkehrseinrichtung
625-25|Richtungstafel in Kurven – rechtsweisend: 700 x 2 100|Verkehrseinrichtung
625-26|Richtungstafel in Kurven – rechtsweisend: 700 x 2 800|Verkehrseinrichtung
625-27|Richtungstafel in Kurven – rechtsweisend: 700 x 3 500|Verkehrseinrichtung
626-10|Leitplatte – Aufstellung rechts|Verkehrseinrichtung
626-20|Leitplatte – Aufstellung links|Verkehrseinrichtung
626-30|Leitplatte – 750 x 500|Verkehrseinrichtung
626-31|Leitplatte – 1 200 x 600|Verkehrseinrichtung
626-32|Leitplatte – 2 500 x 500|Verkehrseinrichtung
627-10|Leitmal – Anbringung rechts (senkrecht)|Verkehrseinrichtung
627-20|Leitmal – Anbringung links (senkrecht)|Verkehrseinrichtung
627-30|Leitmal – waagerecht|Verkehrseinrichtung
627-50|Leitmal – gebogen|Verkehrseinrichtung
628-10|Leitschwelle mit Leitbake (Z 605) – Aufstellung rechts (mit 605-10)|Verkehrseinrichtung
628-11|Leitschwelle mit Leitbake (Z 605) – Aufstellung rechts (mit 605-11)|Verkehrseinrichtung
628-20|Leitschwelle mit Leitbake (Z 605) – Aufstellung links (mit 605-20)|Verkehrseinrichtung
628-21|Leitschwelle mit Leitbake (Z 605) – Aufstellung links (mit 605-21)|Verkehrseinrichtung
628-40|Leitschwelle mit Leitbake (Z 605) – doppelseitig (mit 605-40)|Verkehrseinrichtung
628-41|Leitschwelle mit Leitbake (Z 605) – doppelseitig (mit 605-41)|Verkehrseinrichtung
628-42|Leitschwelle mit Leitbake (Z 605) – doppelseitig (mit 605-42)|Verkehrseinrichtung
628-43|Leitschwelle mit Leitbake (Z 605) – doppelseitig (mit 605-43)|Verkehrseinrichtung
629-10|Leitbord mit Leitbake – Aufstellung rechts (mit 605-10)|Verkehrseinrichtung
629-11|Leitbord mit Leitbake – Aufstellung rechts (mit 605-11)|Verkehrseinrichtung
629-20|Leitbord mit Leitbake – Aufstellung links (mit 605-20)|Verkehrseinrichtung
629-21|Leitbord mit Leitbake – Aufstellung links (mit 605-21)|Verkehrseinrichtung
629-40|Leitbord mit Leitbake – doppelseitig (mit 605-40)|Verkehrseinrichtung
629-41|Leitbord mit Leitbake – doppelseitig (mit 605-41)|Verkehrseinrichtung
629-42|Leitbord mit Leitbake – doppelseitig (mit 605-42)|Verkehrseinrichtung
629-43|Leitbord mit Leitbake – doppelseitig (mit 605-43)|Verkehrseinrichtung
630-10|Parkwarntafel – links vorbei|Verkehrseinrichtung
630-20|Parkwarntafel – rechts vorbei|Verkehrseinrichtung
1000|Richtungsangaben durch Pfeile|Zusatzzeichen|1
1000-12|Fußgänger Gehweg gegenüber benutzen, linksweisend|Zusatzzeichen|1
1000-13|Umleitungsbeschilderung Dreiviertelkreis|Zusatzzeichen|1
1000-22|Fußgänger Gehweg gegenüber benutzen, rechtsweisend|Zusatzzeichen|1
1000-23|Umleitungsbeschilderung Viertelkreis|Zusatzzeichen|1
1001|Länge einer Strecke|Zusatzzeichen|1
1002|Verlauf der Vorfahrtstraße|Zusatzzeichen|1
1002-14|Verlauf der Vorfahrtstraße an Einmündungen – von oben nach links, Einmündung von unten|Zusatzzeichen|1
1002-22|Verlauf der Vorfahrtstraße an Einmündungen – von unten nach rechts, Einmündung von oben|Zusatzzeichen|1
1002-23|Verlauf der Vorfahrtstraße an Einmündungen – von unten nach rechts, Einmündung von links|Zusatzzeichen|1
1002-24|Verlauf der Vorfahrtstraße an Einmündungen – von oben nach rechts, Einmündung von unten|Zusatzzeichen|1
1004|Entfernungsangaben|Zusatzzeichen|1
1005|Entfernungsangaben mit verbalem Zusatz|Zusatzzeichen|1
1006|Hinweis auf Gefahren durch Sinnbild|Zusatzzeichen|1
1007|Hinweis auf Gefahren durch verbale Angabe|Zusatzzeichen|1
1007-37|Ausfahrt|Zusatzzeichen|1
1007-38|Baustellenverkehr|Zusatzzeichen|1
1007-39|Fehlende Fahrbahnmarkierung|Zusatzzeichen|1
1007-52|Neuer Fahrbahnbelag|Zusatzzeichen|1
1007-53|Spurrinnen|Zusatzzeichen|1
1007-54|Linksabbieger|Zusatzzeichen|1
1007-55|Skiabfahrt kreuzt|Zusatzzeichen|1
1007-56|Skiwanderweg kreuzt|Zusatzzeichen|1
1007-57|Kuppe|Zusatzzeichen|1
1007-58|Polizeikontrolle|Zusatzzeichen|1
1007-59|Ende Seitenstreifen in … m (zweiter Teil der Unternummer steht jeweils für den Zahlenwert)|Zusatzzeichen|1
1007-60|Seitenstreifen nicht befahrbar|Zusatzzeichen|1
1007-62|Zufahrt|Zusatzzeichen|1
1008|Hinweise auf geänderte Vorfahrt, Verkehrsführung oder besondere Verkehrsregelung|Zusatzzeichen|1
1008-32|Industriegebiet Schienenfahrzeuge haben Vorrang (zu Z 201)|Zusatzzeichen|1
1008-33|Hafengebiet Schienenfahrzeuge haben Vorrang (zu Z 201)|Zusatzzeichen|1
1008-34|Keine Wendemöglichkeit|Zusatzzeichen|1
1010|Hinweise durch Sinnbild|Zusatzzeichen|1
1010-15|Information Leistungsumfang (zu Z 448.1)|Zusatzzeichen|1
1010-51|Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t, einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen Personenkraftwagen und Kraftomnibusse|Zusatzzeichen|1
1010-70|Carsharing|Zusatzzeichen|1
1010-71|Personenkraftwagen oder Krafträder mit Beiwagen, die mit mindestens drei Personen besetzt sind – mehrfachbesetzte Personenkraftwagen|Zusatzzeichen|1
1010-72|Krafträder, auch mit Beiwagen, Kleinkrafträder und Mopeds und Kraftwagen und sonstige mehrspurige Fahrzeuge|Zusatzzeichen|1
1012|Sonstige Hinweise durch verbale Angaben|Zusatzzeichen|1
1012-34|Grüne Welle bei xx km/h|Zusatzzeichen|1
1012-35|Bei Rot hier halten|Zusatzzeichen|1
1012-36|Lärmschutz|Zusatzzeichen|1
1012-37|Zuflussregelung|Zusatzzeichen|1
1012-38|Nebenstrecke|Zusatzzeichen|1
1012-50|Schule|Zusatzzeichen|1
1012-51|Kindergarten|Zusatzzeichen|1
1012-52|Altenheim|Zusatzzeichen|1
1012-53|Krankenhaus|Zusatzzeichen|1
1012-54|Seniorenheim|Zusatzzeichen|1
1012-55|Schulweg|Zusatzzeichen|1
1012-56|Spielplatz|Zusatzzeichen|1
1012-57|Behinderteneinrichtung|Zusatzzeichen|1
1013|Besondere Hinweise zur Seitenstreifenfreigabe|Zusatzzeichen|1
1014|Tunnelkategorie gemäß ADR-Übereinkommen|Zusatzzeichen|1
1020|Personengruppen frei|Zusatzzeichen|1
1020-14|Wintersport frei|Zusatzzeichen|1
1022|Einspurige Fahrzeuge frei|Zusatzzeichen|1
1022-13|E-Bikes frei|Zusatzzeichen|1
1022-14|Radverkehr und Mofas frei|Zusatzzeichen|1
1022-15|E-Bikes und Mofas frei|Zusatzzeichen|1
1022-16|Elektrokleinstfahrzeuge frei|Zusatzzeichen|1
1022-17|Fahrräder zum Transport von Gütern oder Personen – Lastenfahrräder – frei|Zusatzzeichen|1
1024|Mehrspurige Fahrzeuge frei|Zusatzzeichen|1
1024-16|Straßenbahn frei|Zusatzzeichen|1
1024-18|Gespannfuhrwerke frei|Zusatzzeichen|1
1024-19|Wohnmobile mit einer zulässigen Gesamtmasse bis 7,5 t ausgenommen|Zusatzzeichen|1
1024-20|Elektrisch betriebene Fahrzeuge frei|Zusatzzeichen|1
1024-21|Carsharingfahrzeuge frei|Zusatzzeichen|1
1024-22|Personenkraftwagen oder Krafträder mit Beiwagen, die mit mindestens drei Personen besetzt sind – mehrfachbesetzte Personenkraftwagen frei|Zusatzzeichen|1
1026|Besondere Fahrzeuge und Transportgüter frei (verbale Angabe)|Zusatzzeichen|1
1026-32|Linienverkehr frei|Zusatzzeichen|1
1026-33|Einsatzfahrzeuge frei|Zusatzzeichen|1
1026-34|Krankenfahrzeuge frei|Zusatzzeichen|1
1026-35|Lieferverkehr frei|Zusatzzeichen|1
1026-36|Landwirtschaftlicher Verkehr frei|Zusatzzeichen|1
1026-37|Forstwirtschaftlicher Verkehr frei|Zusatzzeichen|1
1026-38|Land- und forstwirtschaftlicher Verkehr frei|Zusatzzeichen|1
1026-39|Betriebs- und Versorgungsdienst frei|Zusatzzeichen|1
1026-60|Elektrofahrzeuge während des Ladevorgangs frei|Zusatzzeichen|1
1026-61|Elektrofahrzeuge frei|Zusatzzeichen|1
1026-62|Gülletransport frei|Zusatzzeichen|1
1026-63|E-Bikes frei|Zusatzzeichen|1
1028|Sonstige Fahrzeug-, Personengruppen frei (verbale Angabe)|Zusatzzeichen|1
1028-32|Anlieger bis Baustelle frei|Zusatzzeichen|1
1028-33|Zufahrt bis … frei|Zusatzzeichen|1
1028-34|Fährbenutzer frei|Zusatzzeichen|1
1031|Freistellung vom Verkehrsverbot nach § 40 Absatz 1 BImSchG|Zusatzzeichen|1
1031-52|Freistellung vom Verkehrsverbot nach § 40 Absatz 1 BImSchG – grüne Plakette|Zusatzzeichen|1
1040|Zeitangaben ohne Beschränkung auf Wochentage|Zusatzzeichen|1
1040-10|Wintersport erlaubt, zeitlich beschränkt (10 – 16 h)|Zusatzzeichen|1
1040-31|Zeitliche Beschränkung (8 – 11 h, 16 – 18 h)|Zusatzzeichen|1
1040-32|Parkscheibe 2 Stunden|Zusatzzeichen|1
1040-33|Parken mit Parkscheibe in gekennzeichneten Flächen 2 Stunden|Zusatzzeichen|1
1040-34|Ab Zeitpunkt|Zusatzzeichen|1
1040-35|Lärmschutz (mit Zeitangabe)|Zusatzzeichen|1
1040-36|Schulweg in Verbindung mit zeitlicher Begrenzung (zu Z 101 oder 274)|Zusatzzeichen|1
1040-37|Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t, einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen Personenkraftwagen und Kraftomnibusse im angegebenen Zeitraum frei|Zusatzzeichen|1
1042|Zeitangaben mit Beschränkung auf Wochentage|Zusatzzeichen|1
1042-31|Zeitliche Beschränkung (werktags 18 – 19 h)|Zusatzzeichen|1
1042-32|Zeitliche Beschränkung (werktags 8.30 – 11.30 h, 16 – 18 h)|Zusatzzeichen|1
1042-33|Zeitliche Beschränkung (Montag – Freitag, 16 – 18 h)|Zusatzzeichen|1
1042-34|Zeitliche Beschränkung (Dienstag, Donnerstag, Freitag, 16 – 18 h)|Zusatzzeichen|1
1042-35|Zeitliche Beschränkung (6 – 22 h an Sonn- und Feiertagen)|Zusatzzeichen|1
1042-36|Schulbus (tageszeitliche Benutzung)|Zusatzzeichen|1
1042-37|Parken Sa und So erlaubt|Zusatzzeichen|1
1042-38|Werktags außer samstags|Zusatzzeichen|1
1042-50|Straßenreinigung (mit Zeit- und Datumsangabe)|Zusatzzeichen|1
1042-51|Sa und So|Zusatzzeichen|1
1042-52|Sa, So und an Feiertagen|Zusatzzeichen|1
1042-53|Schulweg in Verbindung mit zeitlicher Begrenzung an Werktagen (zu Z 101 oder 274)|Zusatzzeichen|1
1044|Personengruppen|Zusatzzeichen|1
1044-12|Nur Schwerbehinderte mit außergewöhnlicher Gehbehinderung und Blinde, mit Anzahl der Parkstände|Zusatzzeichen|1
1044-30|Nur Bewohner mit Parkausweis Nr. ...|Zusatzzeichen|1
1048|Mehrspurige Fahrzeuge|Zusatzzeichen|1
1048-14|Nur Sattelkraftfahrzeuge|Zusatzzeichen|1
1048-15|Nur Sattelkraftfahrzeuge und Lastkraftwagen mit Anhänger|Zusatzzeichen|1
1048-18|Nur Schienenbahnen|Zusatzzeichen|1
1048-20|Nur Personenkraftwagen mit Anhänger und Kraftfahrzeuge mit einer zulässigen Gesamtmasse über 3,5 t, einschließlich ihrer Anhänger, und Zugmaschinen, ausgenommen Personenkraftwagen und Kraftomnibusse|Zusatzzeichen|1
1049|Sonstige oder mehrere mehrspurige Fahrzeuge|Zusatzzeichen|1
1049-13|Nur Lkw (Z 1010-51), Kraftomnibus (Z 1010-57) und Pkw mit Anhänger (Z 1010-59)|Zusatzzeichen|1
1050|Fahrzeuge (verbale Angabe)|Zusatzzeichen|1
1050-30|Taxi|Zusatzzeichen|1
1050-31|... Taxis|Zusatzzeichen|1
1050-32|Elektrofahrzeuge während des Ladevorgangs|Zusatzzeichen|1
1050-33|Elektrofahrzeuge|Zusatzzeichen|1
1052|Fahrzeuge mit besonderer Ladung|Zusatzzeichen|1
1053|Sonstige Beschränkungen|Zusatzzeichen|1
1053-52|Nur innerhalb gekennzeichneter Parkflächen|Zusatzzeichen|1
1053-53|Parken mit Parkschein in gekennzeichneten Flächen|Zusatzzeichen|1
1053-54|während des Ladevorgangs|Zusatzzeichen|1
1053-55|Massenangabe – 3,5 t|Zusatzzeichen|1
1060|Erweiternde Zusatzzeichen|Zusatzzeichen|1
1060-31|Haltverbot auch auf dem Seitenstreifen – rechts|Zusatzzeichen|1
1060-32|Auch Kraftomnibusse und PKW mit Anhängern (im Bereich von LKW-Kontrollen)|Zusatzzeichen|1
1060-33|Massenangabe – 2,8 t|Zusatzzeichen|1
1060-34|Haltverbot auch auf dem Seitenstreifen – links|Zusatzzeichen|1
101|Gefahrstelle|Gefahrzeichen
103|Kurve|Gefahrzeichen
105|Doppelkurve|Gefahrzeichen
108-4|Gefälle 4 %|Gefahrzeichen
108-5|Gefälle 5 %|Gefahrzeichen
108-6|Gefälle 6 %|Gefahrzeichen
108-7|Gefälle 7 %|Gefahrzeichen
108-8|Gefälle 8 %|Gefahrzeichen
108-9|Gefälle 9 %|Gefahrzeichen
108-10|Gefälle 10 %|Gefahrzeichen
108-11|Gefälle 11 %|Gefahrzeichen
108-12|Gefälle 12 %|Gefahrzeichen
108-13|Gefälle 13 %|Gefahrzeichen
108-14|Gefälle 14 %|Gefahrzeichen
108-15|Gefälle 15 %|Gefahrzeichen
108-16|Gefälle 16 %|Gefahrzeichen
108-17|Gefälle 17 %|Gefahrzeichen
108-18|Gefälle 18 %|Gefahrzeichen
108-19|Gefälle 19 %|Gefahrzeichen
108-20|Gefälle 20 %|Gefahrzeichen
108-21|Gefälle 21 %|Gefahrzeichen
108-22|Gefälle 22 %|Gefahrzeichen
108-23|Gefälle 23 %|Gefahrzeichen
108-24|Gefälle 24 %|Gefahrzeichen
108-25|Gefälle 25 %|Gefahrzeichen
110-4|Steigung 4 %|Gefahrzeichen
110-5|Steigung 5 %|Gefahrzeichen
110-6|Steigung 6 %|Gefahrzeichen
110-7|Steigung 7 %|Gefahrzeichen
110-8|Steigung 8 %|Gefahrzeichen
110-9|Steigung 9 %|Gefahrzeichen
110-10|Steigung 10 %|Gefahrzeichen
110-11|Steigung 11 %|Gefahrzeichen
110-12|Steigung 12 %|Gefahrzeichen
110-13|Steigung 13 %|Gefahrzeichen
110-14|Steigung 14 %|Gefahrzeichen
110-15|Steigung 15 %|Gefahrzeichen
110-16|Steigung 16 %|Gefahrzeichen
110-17|Steigung 17 %|Gefahrzeichen
110-18|Steigung 18 %|Gefahrzeichen
110-19|Steigung 19 %|Gefahrzeichen
110-20|Steigung 20 %|Gefahrzeichen
110-21|Steigung 21 %|Gefahrzeichen
110-22|Steigung 22 %|Gefahrzeichen
110-23|Steigung 23 %|Gefahrzeichen
110-24|Steigung 24 %|Gefahrzeichen
110-25|Steigung 25 %|Gefahrzeichen
117|Seitenwind|Gefahrzeichen
121|Einseitig verengte Fahrbahn|Gefahrzeichen
133|Fußgänger|Gefahrzeichen
136|Kinder|Gefahrzeichen
138|Radverkehr|Gefahrzeichen
142|Wildwechsel|Gefahrzeichen
156|Bahnübergang mit dreistreifiger Bake|Gefahrzeichen
162-11|Einstreifige Bake mit Entfernungsangabe – Aufstellung rechts|Gefahrzeichen
162-21|Einstreifige Bake mit Entfernungsangabe – Aufstellung links|Gefahrzeichen
220|Einbahnstraße|Vorschriftzeichen
223.1-50|Seitenstreifen befahren – 2 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.1-51|Seitenstreifen befahren – 3 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.1-52|Seitenstreifen befahren – 4 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.2-50|Seitenstreifen nicht mehr befahren – 2 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.2-51|Seitenstreifen nicht mehr befahren – 3 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.2-52|Seitenstreifen nicht mehr befahren – 4 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.3-50|Seitenstreifen räumen – 2 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.3-51|Seitenstreifen räumen – 3 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
223.3-52|Seitenstreifen räumen – 4 Fahrstreifen + Seitenstreifen|Vorschriftzeichen
224-40|Haltestelle – doppelseitig|Vorschriftzeichen
224-41|Schulbushaltestelle – doppelseitig|Vorschriftzeichen
224-51|Schulbushaltestelle|Vorschriftzeichen
229-10|Taxenstand – Anfang – Aufstellung rechts|Vorschriftzeichen
229-11|Taxenstand – Ende – Aufstellung links|Vorschriftzeichen
229-20|Taxenstand – Ende – Aufstellung rechts|Vorschriftzeichen
229-21|Taxenstand – Anfang – Aufstellung links|Vorschriftzeichen
229-30|Taxenstand – Mitte – Aufstellung rechts|Vorschriftzeichen
229-31|Taxenstand – Mitte – Aufstellung links|Vorschriftzeichen
230-11|Ladebereich – Ende – Aufstellung links|Vorschriftzeichen
230-21|Ladebereich – Anfang – Aufstellung links|Vorschriftzeichen
230-30|Ladebereich – Mitte – Aufstellung rechts|Vorschriftzeichen
230-31|Ladebereich – Mitte – Aufstellung links|Vorschriftzeichen
241-31|Getrennter Rad- und Gehweg – Radweg rechts|Vorschriftzeichen
242.1-40|Beginn einer Fußgängerzone – doppelseitig (Rückseite Z 242.2)|Vorschriftzeichen
244.1-40|Beginn einer Fahrradstraße – doppelseitig (Rückseite Z 244.2)|Vorschriftzeichen
244.3-40|Beginn einer Fahradzone – doppelseitig (Rückseite Z 244.4)|Vorschriftzeichen
270.1-40|Beginn einer Verkehrsverbotszone zur Verminderung schädlicher Luftverunreinigungen in einer Zone – doppelseitig (Rückseite Z 270.2)|Vorschriftzeichen
274-5|Zulässige Höchstgeschwindigkeit 5 km/h|Vorschriftzeichen
274-10|Zulässige Höchstgeschwindigkeit 10 km/h|Vorschriftzeichen
274-20|Zulässige Höchstgeschwindigkeit 20 km/h|Vorschriftzeichen
274-30|Zulässige Höchstgeschwindigkeit 30 km/h|Vorschriftzeichen
274-40|Zulässige Höchstgeschwindigkeit 40 km/h|Vorschriftzeichen
274-50|Zulässige Höchstgeschwindigkeit 50 km/h|Vorschriftzeichen
274-60|Zulässige Höchstgeschwindigkeit 60 km/h|Vorschriftzeichen
274-70|Zulässige Höchstgeschwindigkeit 70 km/h|Vorschriftzeichen
274-80|Zulässige Höchstgeschwindigkeit 80 km/h|Vorschriftzeichen
274-90|Zulässige Höchstgeschwindigkeit 90 km/h|Vorschriftzeichen
274-100|Zulässige Höchstgeschwindigkeit 100 km/h|Vorschriftzeichen
274-110|Zulässige Höchstgeschwindigkeit 110 km/h|Vorschriftzeichen
274-120|Zulässige Höchstgeschwindigkeit 120 km/h|Vorschriftzeichen
274-130|Zulässige Höchstgeschwindigkeit 130 km/h|Vorschriftzeichen
274.1-20|Beginn einer Tempo 20-Zone in verkehrsberuhigten Geschäftsbereichen – einseitig|Vorschriftzeichen
274.1-40|Beginn einer Tempo 30-Zone – doppelseitig (Rückseite Z 274.2)|Vorschriftzeichen
274.1-41|Beginn einer Tempo 20-Zone in verkehrsberuhigten Geschäftsbereichen – doppelseitig (Rückseite Z 274.2-20)|Vorschriftzeichen
274.2-20|Ende einer Tempo 20-Zone in verkehrsberuhigten Geschäftsbereichen|Vorschriftzeichen
278-5|Ende der zulässigen Höchstgeschwindigkeit 5 km/h|Vorschriftzeichen
278-10|Ende der zulässigen Höchstgeschwindigkeit 10 km/h|Vorschriftzeichen
278-20|Ende der zulässigen Höchstgeschwindigkeit 20 km/h|Vorschriftzeichen
278-30|Ende der zulässigen Höchstgeschwindigkeit 30 km/h|Vorschriftzeichen
278-40|Ende der zulässigen Höchstgeschwindigkeit 40 km/h|Vorschriftzeichen
278-50|Ende der zulässigen Höchstgeschwindigkeit 50 km/h|Vorschriftzeichen
278-60|Ende der zulässigen Höchstgeschwindigkeit 60 km/h|Vorschriftzeichen
278-70|Ende der zulässigen Höchstgeschwindigkeit 70 km/h|Vorschriftzeichen
278-80|Ende der zulässigen Höchstgeschwindigkeit 80 km/h|Vorschriftzeichen
278-90|Ende der zulässigen Höchstgeschwindigkeit 90 km/h|Vorschriftzeichen
278-100|Ende der zulässigen Höchstgeschwindigkeit 100 km/h|Vorschriftzeichen
278-110|Ende der zulässigen Höchstgeschwindigkeit 110 km/h|Vorschriftzeichen
278-120|Ende der zulässigen Höchstgeschwindigkeit 120 km/h|Vorschriftzeichen
278-130|Ende der zulässigen Höchstgeschwindigkeit 130 km/h|Vorschriftzeichen
283-10|Absolutes Haltverbot – Anfang – Aufstellung rechts|Vorschriftzeichen
283-11|Absolutes Haltverbot – Ende – Aufstellung links|Vorschriftzeichen
283-20|Absolutes Haltverbot – Ende – Aufstellung rechts|Vorschriftzeichen
283-21|Absolutes Haltverbot – Anfang – Aufstellung links|Vorschriftzeichen
283-30|Absolutes Haltverbot – Mitte – Aufstellung rechts|Vorschriftzeichen
283-31|Absolutes Haltverbot – Mitte – Aufstellung links|Vorschriftzeichen
286-10|Eingeschränktes Haltverbot – Anfang – Aufstellung rechts|Vorschriftzeichen
286-11|Eingeschränktes Haltverbot – Ende – Aufstellung links|Vorschriftzeichen
286-20|Eingeschränktes Haltverbot – Ende – Aufstellung rechts|Vorschriftzeichen
286-21|Eingeschränktes Haltverbot – Anfang – Aufstellung links|Vorschriftzeichen
286-30|Eingeschränktes Haltverbot – Mitte – Aufstellung rechts|Vorschriftzeichen
286-31|Eingeschränktes Haltverbot – Mitte – Aufstellung links|Vorschriftzeichen
290.1-40|Beginn eines eingeschränkten Haltverbotes für eine Zone – doppelseitig (Rückseite Z 290.2)|Vorschriftzeichen
294|Haltlinie|Markierung
296|Einseitige Fahrstreifenbegrenzung|Markierung
297.1|Vorankündigungspfeil|Markierung
297.1-21|Vorankündigungspfeil – zur Anzeige eines Fahrstreifenendes|Markierung
298|Sperrfläche|Markierung
310-40|Ortstafel Vorderseite – doppelseitig (Rückseite Z 311)|Richtzeichen
310-41|Ortstafel Vorderseite – doppelseitig (Rückseite Z 311.1)|Richtzeichen
311.1|Ortstafel Rückseite – ohne Zielangabe|Richtzeichen
314-31|Parken – Mitte (Aufstellung links)|Richtzeichen
314.1-40|Beginn einer Parkraumbewirtschaftungszone – doppelseitig (Rückseite Z 314.2)|Richtzeichen
315-50|Parken auf Gehwegen – halb in Fahrtrichtung links|Richtzeichen
315-51|Parken auf Gehwegen – halb in Fahrtrichtung links Anfang|Richtzeichen
315-52|Parken auf Gehwegen – halb in Fahrtrichtung links Ende|Richtzeichen
315-53|Parken auf Gehwegen – halb in Fahrtrichtung links Mitte|Richtzeichen
315-55|Parken auf Gehwegen – halb in Fahrtrichtung rechts|Richtzeichen
315-56|Parken auf Gehwegen – halb in Fahrtrichtung rechts Anfang|Richtzeichen
315-57|Parken auf Gehwegen – halb in Fahrtrichtung rechts Ende|Richtzeichen
315-58|Parken auf Gehwegen – halb in Fahrtrichtung rechts Mitte|Richtzeichen
315-60|Parken auf Gehwegen – ganz in Fahrtrichtung links|Richtzeichen
315-61|Parken auf Gehwegen – ganz in Fahrtrichtung links Anfang|Richtzeichen
315-62|Parken auf Gehwegen – ganz in Fahrtrichtung links Ende|Richtzeichen
315-63|Parken auf Gehwegen – ganz in Fahrtrichtung links Mitte|Richtzeichen
315-65|Parken auf Gehwegen – ganz in Fahrtrichtung rechts|Richtzeichen
315-66|Parken auf Gehwegen – ganz in Fahrtrichtung rechts Anfang|Richtzeichen
315-67|Parken auf Gehwegen – ganz in Fahrtrichtung rechts Ende|Richtzeichen
315-68|Parken auf Gehwegen – ganz in Fahrtrichtung rechts Mitte|Richtzeichen
315-70|Parken auf Gehwegen – halb quer zur Fahrtrichtung links|Richtzeichen
315-71|Parken auf Gehwegen – halb quer zur Fahrtrichtung links Anfang|Richtzeichen
315-72|Parken auf Gehwegen – halb quer zur Fahrtrichtung links Ende|Richtzeichen
315-73|Parken auf Gehwegen – halb quer zur Fahrtrichtung links Mitte|Richtzeichen
315-75|Parken auf Gehwegen – halb quer zur Fahrtrichtung rechts|Richtzeichen
315-76|Parken auf Gehwegen – halb quer zur Fahrtrichtung rechts Anfang|Richtzeichen
315-77|Parken auf Gehwegen – halb quer zur Fahrtrichtung rechts Ende|Richtzeichen
315-78|Parken auf Gehwegen – halb quer zur Fahrtrichtung rechts Mitte|Richtzeichen
315-80|Parken auf Gehwegen – ganz quer zur Fahrtrichtung links|Richtzeichen
315-81|Parken auf Gehwegen – ganz quer zur Fahrtrichtung links Anfang|Richtzeichen
315-82|Parken auf Gehwegen – ganz quer zur Fahrtrichtung links Ende|Richtzeichen
315-83|Parken auf Gehwegen – ganz quer zur Fahrtrichtung links Mitte|Richtzeichen
315-85|Parken auf Gehwegen – ganz quer zur Fahrtrichtung rechts|Richtzeichen
315-86|Parken auf Gehwegen – ganz quer zur Fahrtrichtung rechts Anfang|Richtzeichen
315-87|Parken auf Gehwegen – ganz quer zur Fahrtrichtung rechts Ende|Richtzeichen
315-88|Parken auf Gehwegen – ganz quer zur Fahrtrichtung rechts Mitte|Richtzeichen
316-50|Parken und Mitfahren|Richtzeichen
325.1-40|Beginn eines verkehrsberuhigten Bereichs – doppelseitig (Rückseite Z 325.2)|Richtzeichen
327-50|Tunnel mit Längenangabe in m|Richtzeichen
327-51|Tunnel mit Längenangabe in km|Richtzeichen
332.1|Ausfahrttafel auf anderen Straßen außerhalb der Autobahn|Richtzeichen
332.1-20|Ausfahrttafel auf anderen Straßen außerhalb der Autobahn – in weiß|Richtzeichen
333.1|Ausfahrt von anderen Straßen außerhalb der Autobahn|Richtzeichen
333.1-20|Ausfahrt von anderen Straßen außerhalb der Autobahn – in weiß|Richtzeichen
350-10|Fußgängerüberweg – Aufstellung rechts|Richtzeichen
350-20|Fußgängerüberweg – Aufstellung links|Richtzeichen`;
const verifiedQuizIds=new Set(`101 101-10 101-11 101-12 110 112 114 117-10 117-20 120 121-10 121-20 123 124 125 131 133-10 133-20 136-10 136-20 138-10 138-20 142-10 142-20 151 156-10 156-20 157-10 157-20 159-10 159-20 201-50 201-51 205 206 208 209 209-10 209-30 211 211-10 214 214-10 214-30 215 220-10 220-20 220-40 222 222-10 224 229 237 238 239 240 241-30 242.1 242.2 244.1 244.2 244.3 244.4 245 250 251 253 254 255 259 260 261 267 268 269 270.1 270.2 272 274 274.1 274.2 275 276 277 278 279 280 281 282 283 286 290.1 290.2 301 306 307 308 310 311 311.1 314 314-10 314-20 314-30 314-31 314-50 314.1 314.2 315 316 317 325.1 325.2 327 330.1 330.2 331.1 331.2 332 333 350 354 356 357 358 363 365-50 365-51 365-52 365-58 365-65 365-66 380 381 385 390 391 392 393 394 401 405 406 410 605-10 605-20 605-40 610 615 616 620 625-10 625-20 626 627 628 629 630 720 721 1010-13 1010-14 1010-15 1010-50 1013-50 1013-51 1013-52 1014-50 1014-51 1014-52 1014-53 1020-11 1020-12 1020-13 1020-30 1020-31 1020-32 1022-10 1022-11 1022-12 1024-10 1024-11 1024-12 1024-13 1024-14 1024-15 1024-17 1024-19 1024-20 1024-21`.split(' '));
// In einem früheren VzKat-Stand geführte Zeichen: Bibliothek ja, Fragenpool nein.
const historicalRaw=`366|Touristischer Hinweis|Historisch
367|Hinweis auf Autohof|Historisch
375|Hinweis auf eine Stadt oder ein Stadtviertel|Historisch
380|Richtgeschwindigkeit|Historisch
381|Übernachtungsmöglichkeit|Historisch
388|Seitenstreifen für mehrspurige Kraftfahrzeuge|Historisch
500|Überleitungstafel|Historisch
502|Überleitungstafel mit Gegenverkehr|Historisch`;
const reportedWithoutStaticSvg=new Set(`108 110 274 278 293 294 295 296 297 297.1 297.1-21 298 299 315 340 341 342 350 366 367 375 380 381 388 394 406 415 418 421 422 430 432 434 450 454 455.1 457 460 500 501 600 605 610 615 616 620 625 626 628 1000-35 1000-36 1018-10 1018-11 1020-10 1032-30 1033-10 1048-10 1048-11 1048-12 1049-10 157 159 162 201 223.1 223.2 223.3 241 318 350.1 350.2 502 627 629 630`.split(' '));
const officialVzKatAssets=new Set(`108 110 201 223.1 223.2 223.3 241 274 278 293 295 297 299 315 318 340 341 342 350 350.1 350.2 394 406 415 418 421 422 430 432 434 450 454 455.1 457 460 501 600 605 610 615 616 620 625 626 627 628 629 630 1049-11 1049-12`.split(' '));
const imageOverrides={
  '103':'103-10','105':'105-10','108':'108-10','110':'110-10','274':'274-50','278':'278-50','315':'315-50',
  '350':'350-10','350.1':'350.1-10','350.2':'350.2-10','605':'605-10','625':'625-10',
  '626':'626-10','628':'628-10','157':'157-10','159':'159-10','162':'162-10',
  '201':'201-50','241':'241-30'
};
const vzkatImageUrls={
  '103':'https://www.vzkat.de/2017/Teil02/103-10.gif','105':'https://www.vzkat.de/2017/Teil02/105-10.gif','117':'https://www.vzkat.de/2017/Teil02/117-10.gif','121':'https://www.vzkat.de/2017/Teil02/121-10.gif','133':'https://www.vzkat.de/2017/Teil02/133-10.gif','136':'https://www.vzkat.de/2017/Teil02/136-10.gif','138':'https://www.vzkat.de/2017/Teil02/138-10.gif','142':'https://www.vzkat.de/2017/Teil02/142-10.gif','156':'https://www.vzkat.de/2017/Teil02/156-10.gif','220':'https://www.vzkat.de/2017/Teil03/220-20.gif',
  '365-72':'https://www.vzkat.de/2017/Teil04/365-50.gif','419':'https://www.vzkat.de/2017/Teil04/419-20.gif','442':'https://www.vzkat.de/2017/Teil04/442-20.gif','467.1':'https://www.vzkat.de/2017/Teil04/467-1.gif','505':'https://www.vzkat.de/2017/Teil04/505-12.gif','511':'https://www.vzkat.de/2017/Teil04/511-11.gif','512':'https://www.vzkat.de/2017/Teil04/512-12.gif','513':'https://www.vzkat.de/2017/Teil04/513-10.gif','514':'https://www.vzkat.de/2017/Teil04/514-10.gif','515':'https://www.vzkat.de/2017/Teil04/515-11.gif','521':'https://www.vzkat.de/2017/Teil04/521-30.gif','522':'https://www.vzkat.de/2017/Teil04/522-31.gif','523':'https://www.vzkat.de/2017/Teil04/523-30.gif','524':'https://www.vzkat.de/2017/Teil04/524-31.gif','525':'https://www.vzkat.de/2017/Teil04/525-31.gif','526':'https://www.vzkat.de/2017/Teil04/526-31.gif','527':'https://www.vzkat.de/2017/Teil04/527-30.gif','528':'https://www.vzkat.de/2017/Teil04/528-30.gif','529':'https://www.vzkat.de/2017/Teil04/529-30.gif','531':'https://www.vzkat.de/2017/Teil04/531-10.gif','532':'https://www.vzkat.de/2017/Teil04/532-10.gif','533':'https://www.vzkat.de/2017/Teil04/533-29.gif','535':'https://www.vzkat.de/2017/Teil04/535-11.gif','536':'https://www.vzkat.de/2017/Teil04/536-20.gif','537':'https://www.vzkat.de/2017/Teil04/537-30.gif','538':'https://www.vzkat.de/2017/Teil04/538-30.gif','541':'https://www.vzkat.de/2017/Teil04/541-11.gif','542':'https://www.vzkat.de/2017/Teil04/542-10.gif','545':'https://www.vzkat.de/2017/Teil04/545-11.gif','546':'https://www.vzkat.de/2017/Teil04/546-10.gif','550':'https://www.vzkat.de/2017/Teil04/550-21.gif','551':'https://www.vzkat.de/2017/Teil04/551-21.gif','590':'https://www.vzkat.de/2017/Teil04/590-10.gif',
  '610-40':'https://www.vzkat.de/2017/Teil05/610.gif','610-41':'https://www.vzkat.de/2017/Teil05/610.gif','610-42':'https://www.vzkat.de/2017/Teil05/610.gif','610-43':'https://www.vzkat.de/2017/Teil05/610.gif','616-30':'https://www.vzkat.de/2017/Teil05/616.gif', '616-31':'https://www.vzkat.de/2017/Teil05/616.gif',
  '1000':'https://www.vzkat.de/2017/Teil07/1000-10.gif','1001':'https://www.vzkat.de/2017/Teil07/1001-33.gif','1002':'https://www.vzkat.de/2017/Teil07/1002-10.gif','1004':'https://www.vzkat.de/2017/Teil07/1004-32.gif','1005':'https://www.vzkat.de/2017/Teil07/1005-30.gif','1006':'https://www.vzkat.de/2017/Teil07/1006-30.gif','1007':'https://www.vzkat.de/2017/Teil07/1007-30.gif','1008':'https://www.vzkat.de/2017/Teil07/1008-30.gif','1010':'https://www.vzkat.de/2017/Teil07/1010-10.gif','1012':'https://www.vzkat.de/2017/Teil07/1012-30.gif','1013':'https://www.vzkat.de/2017/Teil07/1013-50.gif','1014':'https://www.vzkat.de/2017/Teil07/1014-50.gif','1020':'https://www.vzkat.de/2017/Teil07/1020-11.gif','1022':'https://www.vzkat.de/2017/Teil07/1022-10.gif','1024':'https://www.vzkat.de/2017/Teil07/1024-10.gif','1026':'https://www.vzkat.de/2017/Teil07/1026-30.gif','1028':'https://www.vzkat.de/2017/Teil07/1028-30.gif','1031':'https://www.vzkat.de/2017/Teil07/1031-52.gif','1040':'https://www.vzkat.de/2017/Teil07/1040-10.gif','1042':'https://www.vzkat.de/2017/Teil07/1042-30.gif','1044':'https://www.vzkat.de/2017/Teil07/1044-10.gif','1048':'https://www.vzkat.de/2017/Teil07/1048-14.gif','1049':'https://www.vzkat.de/2017/Teil07/1049-11.gif','1050':'https://www.vzkat.de/2017/Teil07/1050-30.gif','1052':'https://www.vzkat.de/2017/Teil07/1052-30.gif','1053':'https://www.vzkat.de/2017/Teil07/1053-30.gif','1060':'https://www.vzkat.de/2017/Teil07/1060-31.gif'
};
const vzOrder=new Intl.Collator('de-DE',{numeric:true,sensitivity:'base'});
const signs=[...new Map(`${raw}\n${historicalRaw}`.split('\n').map(line=>{const [id,name,category,extra]=line.split('|');const historical=category==='Historisch';const imageId=imageOverrides[id]??(reportedWithoutStaticSvg.has(id)?null:id);const svg=historical?null:officialVzKatAssets.has(id)?`assets/vz/${id}.png`:vzkatImageUrls[id]??(imageId?`https://sevas.nrw.de/vz/${imageId}.svg`:null);return[id,{id,name,category,extra:extra==='1',historical,svg,quiz:!historical&&verifiedQuizIds.has(id)&&(!reportedWithoutStaticSvg.has(id)||officialVzKatAssets.has(id)||vzkatImageUrls[id])}]})).values()].sort((a,b)=>vzOrder.compare(a.id,b.id));
const app=document.querySelector('#app');let current='start';let library={query:'',category:'all',extras:true};let session=null;let account=null;let syncTimer=null;
const load=key=>JSON.parse(localStorage.getItem(key)||'{}');const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
const stats=()=>account?account.stats:load('vzt-stats');const progress=()=>account?account.progress:load('vzt-progress');
function syncAccount(){if(!account)return;clearTimeout(syncTimer);syncTimer=setTimeout(async()=>{try{const r=await fetch('/api/progress',{method:'PUT',headers:{'Content-Type':'application/json',Authorization:`Bearer ${account.token}`},body:JSON.stringify({stats:account.stats,progress:account.progress})});if(r.status===401||r.status===400){const b=await r.json().catch(()=>({}));if(/abgelaufen|Nicht angemeldet/i.test(b.error||'')){sessionStorage.removeItem('vzt-session');account=null;render()}}}catch{}},350)}
function storeResults(all,p){if(account){account.stats=all;account.progress=p;syncAccount()}else{save('vzt-stats',all);save('vzt-progress',p)}}
async function accountRequest(action,payload={},token=''){const r=await fetch('/api/auth',{method:'POST',headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{})},body:JSON.stringify({action,...payload})});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||'Die Anfrage ist fehlgeschlagen.');return data}
async function restoreAccount(){const token=sessionStorage.getItem('vzt-session');if(!token)return;try{const data=await accountRequest('profile',{},token);account={token,...data};render()}catch{sessionStorage.removeItem('vzt-session')}}
const img=s=>s.svg?`<img src="${s.svg}" alt="Verkehrszeichen ${s.id}: ${s.name}" loading="lazy">`:'<div class="no-image">Keine statische SEVAS-SVG verfügbar</div>';
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function shell(title,body){app.innerHTML=`<section><h1>${title}</h1>${body}</section>`}
function navigate(view){current=view;session=null;location.hash=view;render()}
function render(){document.querySelectorAll('[data-view]').forEach(a=>a.classList.toggle('active',a.dataset.view===current));const link=document.querySelector('#account-link');if(link)link.textContent=account?account.username:'Konto';if(current==='start')return home();if(current==='bibliothek')return catalogue();if(current==='training')return modeStart('training');if(current==='pruefung')return modeStart('pruefung');if(current==='statistik')return statistics();if(current==='konto')return accountPage()}
function home(){const s=stats(),p=progress(),solved=Object.keys(p).length;shell('Verkehrszeichen sicher erkennen.',`<div class="hero"><p class="badge">StVO · VzKat · SEVAS</p><p class="lead">Lerne Nummern, Bedeutung und Kategorien der Verkehrszeichen – gezielt, mit amtlichen VzKat-Abbildungen und SEVAS-SVGs.</p><div class="actions"><a class="button light" href="#training" data-view="training">Jetzt trainieren</a><a class="button ghost" href="#bibliothek" data-view="bibliothek">Zeichenbibliothek</a></div></div><div class="stats"><div class="stat"><b>${signs.filter(x=>!x.extra).length}</b><span>Hauptzeichen</span></div><div class="stat"><b>${signs.filter(x=>x.extra).length}</b><span>Zusatzzeichen in der Bibliothek</span></div><div class="stat"><b>${solved}</b><span>Zeichen bereits beantwortet</span></div></div><div class="card" style="margin-top:22px"><h2>So funktioniert’s</h2><p class="muted">In Training und Prüfung sind Zusatzzeichen zunächst ausgeblendet. In beiden Modi wählst du freie Antwort oder Multiple Choice mit vier echten Alternativen. Falsch beantwortete Zeichen landen automatisch in der Wiederholung.</p></div>`)}
function catalogue(){const cats=[...new Set(signs.map(s=>s.category))];const list=signs.filter(s=>(library.extras||!s.extra)&&(!library.query||(`${s.id} ${s.name} ${s.category}`).toLowerCase().includes(library.query.toLowerCase()))&&(library.category==='all'||s.category===library.category));shell('Zeichenbibliothek',`<p class="lead">Suche nach VZ-Nummer, Bezeichnung oder Kategorie. Historische Zeichen bleiben als Nachschlagewerk erhalten und sind nicht prüfungsrelevant.</p><div class="toolbar"><input id="query" value="${esc(library.query)}" placeholder="z. B. 274, Parken, Radverkehr"><select id="category"><option value="all">Alle Kategorien</option>${cats.map(c=>`<option ${c===library.category?'selected':''}>${c}</option>`).join('')}</select><label class="row"><input id="extras" type="checkbox" ${library.extras?'checked':''}> Zusatzzeichen einblenden</label></div><p class="muted">${list.length} Zeichen gefunden</p><div class="grid">${list.map(card).join('')}</div>`);document.querySelector('#query').oninput=e=>{library.query=e.target.value;catalogue()};document.querySelector('#category').onchange=e=>{library.category=e.target.value;catalogue()};document.querySelector('#extras').onchange=e=>{library.extras=e.target.checked;catalogue()};document.querySelectorAll('[data-sign]').forEach(b=>b.onclick=()=>detail(b.dataset.sign))}
function card(s){return`<button class="sign-card" data-sign="${s.id}">${img(s)}<b>VZ ${s.id}</b><small>${esc(s.name)}</small>${s.historical?'<p><span class="badge historic">Historisch · nicht gültig</span></p>':s.extra?'<p><span class="badge extra">Zusatzzeichen</span></p>':''}</button>`}
function detail(id){const s=signs.find(x=>x.id===id);const official=s.svg?.startsWith('assets/')||s.svg?.includes('vzkat.de/');shell(`VZ ${s.id}`,`<div class="detail"><div>${img(s)}</div><div><p><span class="badge ${s.historical?'historic':s.extra?'extra':''}">${s.historical?'Historisch · nicht mehr gültig':s.extra?'Zusatzzeichen':'Hauptzeichen'}</span></p><h2>${esc(s.name)}</h2>${s.historical?'<p class="notice">Dieses Zeichen ist historisch und kommt weder im Training noch im Prüfungsmodus vor.</p>':''}<dl><dt>Nummer</dt><dd>VZ ${s.id}</dd><dt>Kategorie</dt><dd>${s.category}</dd><dt>Abbildung</dt><dd>${s.svg?`<a href="${s.svg}" target="_blank" rel="noreferrer">${official?'Amtliche VzKat-Abbildung öffnen':'SEVAS-SVG öffnen'}</a>`:'Für dieses historische Zeichen liegt in der verwendeten Quelle keine statische Bilddatei vor.'}</dd></dl><button class="button ghost" id="back">Zur Bibliothek</button></div></div>`);document.querySelector('#back').onclick=()=>navigate('bibliothek')}
function modeStart(mode){const p=progress();const hard=Object.entries(p).filter(([,x])=>x.wrong>=2&&signs.find(s=>s.id===x[0]&&!s.historical)).map(([id])=>id);shell(mode==='training'?'Training':'Prüfungsmodus',`<p class="lead">${mode==='training'?'Übe ohne Zeitdruck und wiederhole gezielt schwierige Zeichen.':'Die Auswertung mit allen Lösungen erscheint erst am Ende der Prüfung.'}</p><label class="card">Lernpaket<select id="learning-package">${Object.entries(learningPackages).map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label><div class="mode-choice"><button class="card" data-answer="free"><h2>Freie Antwort</h2><p class="muted">Nenne den Grundbegriff; Zusätze wie Richtung, Werte oder Klammerhinweise sind optional.</p></button><button class="card" data-answer="choice"><h2>Multiple Choice</h2><p class="muted">Wähle aus vier vollständigen Antwortmöglichkeiten.</p></button></div><label class="row card"><input id="include-extras" type="checkbox"> Zusatzzeichen einbeziehen</label>${hard.length?`<p><button class="button warn" id="review">Schwierige Zeichen wiederholen</button></p>`:''}`);document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>start(mode,b.dataset.answer,false));const r=document.querySelector('#review');if(r)r.onclick=()=>start('training','choice',true)}
const coreRoots=new Set(`101 103 105 108 110 112 114 120 121 123 124 131 133 136 138 142 151 156 157 159 162 201 205 206 208 209 211 214 215 220 222 224 229 237 238 239 240 241 242.1 242.2 244.1 244.2 244.3 244.4 245 250 251 253 254 255 259 260 261 267 268 269 270.1 270.2 272 274 275 276 277 278 279 280 281 282 283 286 290.1 290.2 301 306 307 308 310 311 314 315 316 317 325.1 325.2 327 330.1 330.2 331.1 331.2 332 333 350 354 356 357 358 363`.split(' '));
const extendedRoots=new Set(`365 380 381 385 390 391 392 393 394 401 405 406 410 605 610 615 616 620 625 626 627 628 629 630 720 721`.split(' '));
const learningPackages={grundwissen:'Fahrschüler – Grundwissen',be:'B/BE – Vertiefung',a:'A – Motorrad',cce:'C/CE – Güterverkehr',dde:'D/DE – Busverkehr',t:'T – Land- und Forstwirtschaft',fahrlehrer:'Fahrlehrer BE – Unterrichtsrelevant',alle:'Alle aktuellen Zeichen'};
const rootOf=s=>s.id.split('-')[0];
function belongsToPackage(s,key){if(!s.quiz||s.historical)return false;const root=rootOf(s),base=coreRoots.has(root)||extendedRoots.has(root);if(key==='grundwissen')return coreRoots.has(root);if(key==='be'||key==='fahrlehrer')return base;if(key==='a')return base||/Kraftrad|Motorrad|Mofa/i.test(s.name);if(key==='cce')return base||/Lastkraftwagen|Kraftfahrzeug|Gewicht|Höhe|Breite|Länge|Anhänger/i.test(s.name);if(key==='dde')return base||/Kraftomnibus|Bus|Haltestelle/i.test(s.name);if(key==='t')return base||/land|forst|Zugmaschine|Arbeitsmaschine/i.test(s.name);return true}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function start(mode,answer,review){const extras=document.querySelector('#include-extras')?.checked;const pack=document.querySelector('#learning-package')?.value||'grundwissen';let pool=signs.filter(s=>belongsToPackage(s,pack)&&(extras||!s.extra));if(review){const p=progress();pool=pool.filter(s=>(p[s.id]?.wrong||0)>=2)}session={mode,answer,review,pack,pool:shuffle(pool),index:0,correct:0,answers:[],total:Math.min(10,pool.length)};question()}
function question(){const q=session.pool[session.index%session.pool.length];const pct=Math.round(session.index/session.total*100);const free=session.answer==='free';const verb=session.mode==='pruefung'?'Antwort speichern':'Antwort prüfen';const controls=free?`<div class="row" style="justify-content:center;margin-top:18px"><input class="answer-input" id="answer" placeholder="Grundbegriff, z. B. Vorfahrt gewähren"><button class="button" id="check">${verb}</button></div>`:`<div class="choice-grid">${shuffle([q,...shuffle(session.pool.filter(x=>x.id!==q.id)).slice(0,3)]).map(s=>`<button class="choice" data-choice="${s.id}"><b>VZ ${s.id}</b><br><small>${esc(s.name)}</small></button>`).join('')}</div>`;shell(session.mode==='training'?'Training':'Prüfung',`<div class="question"><p class="muted">Frage ${session.index+1} von ${session.total}</p><div class="progress"><i style="width:${pct}%"></i></div>${img(q)}<h2>${free?'Wie lautet der Grundbegriff dieses Zeichens?':'Welche Bezeichnung trifft zu?'}</h2>${controls}<div id="feedback"></div></div>`);if(free){document.querySelector('#check').onclick=()=>grade(document.querySelector('#answer').value.trim(),q);document.querySelector('#answer').onkeydown=e=>{if(e.key==='Enter')grade(e.target.value.trim(),q)}}else document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>grade(b.dataset.choice,q))}
const normaliseAnswer=value=>value.toLocaleLowerCase('de-DE').normalize('NFC').replace(/[.,;:!?()[\\]{}–—-]/g,' ').replace(/\s+/g,' ').trim();
function grade(value,q){const ok=session.answer==='free'?normaliseAnswer(value)===normaliseAnswer(q.name):value.replace(/^VZ\s*/i,'')===q.id;const all={...stats()};all.correct=(all.correct||0)+(ok?1:0);all.total=(all.total||0)+1;const p={...progress(),[q.id]:{...(progress()[q.id]||{right:0,wrong:0})}};p[q.id][ok?'right':'wrong']++;storeResults(all,p);session.correct+=ok?1:0;document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;if(b.dataset.choice===q.id)b.classList.add('correct');if(b.dataset.choice===value&&!ok)b.classList.add('wrong')});const f=document.querySelector('#feedback');f.innerHTML=`<div class="feedback"><b>${ok?'Richtig!':'Noch nicht richtig.'}</b> VZ ${q.id} bedeutet: ${esc(q.name)}.</div><button class="button" id="next">${session.index+1===session.total?'Ergebnis anzeigen':'Nächste Frage'}</button>`;document.querySelector('#next').onclick=()=>{session.index++;session.index===session.total?result():question()}}
function result(){const pct=Math.round(session.correct/session.total*100);shell(session.mode==='pruefung'?'Prüfung beendet':'Training beendet',`<div class="card" style="max-width:620px;margin:auto;text-align:center"><p class="badge">Dein Ergebnis</p><h1>${session.correct} / ${session.total}</h1><p class="lead" style="margin:auto">${pct}% richtig beantwortet.</p><div class="actions" style="justify-content:center"><button class="button" id="again">Noch einmal</button><a class="button ghost" href="#statistik" data-view="statistik">Statistik ansehen</a></div></div>`);document.querySelector('#again').onclick=()=>navigate(session.mode)}
function accountPage(){if(account){shell('Dein Konto',`<div class="card" style="max-width:620px"><p class="badge">Angemeldet</p><h2>${esc(account.username)}</h2><p class="lead">Deine Statistik und Wiederholungen werden in deinem Konto gespeichert und auf deinen Geräten geladen.</p><button class="button ghost" id="logout">Abmelden</button></div>`);document.querySelector('#logout').onclick=()=>{sessionStorage.removeItem('vzt-session');account=null;navigate('start')};return}shell('Konto',`<p class="lead">Melde dich an, um deine Lernstatistik auf mehreren Geräten zu behalten. Ohne Konto kannst du die App weiterhin als Gast nutzen; dabei bleiben deine Daten nur in diesem Browser.</p><div class="auth-layout"><form class="card auth-form" id="login-form"><h2>Anmelden</h2><label>Benutzername<input name="username" autocomplete="username" required></label><label>Passwort<input name="password" type="password" autocomplete="current-password" required></label><button class="button">Anmelden</button></form><form class="card auth-form" id="register-form"><h2>Konto erstellen</h2><label>Benutzername<input name="username" autocomplete="username" required minlength="3" maxlength="30" pattern="[a-zA-Z0-9._-]+"></label><small class="muted">3–30 Zeichen: Buchstaben, Ziffern, Punkt, Unterstrich oder Bindestrich.</small><label>Passwort<input name="password" type="password" autocomplete="new-password" required minlength="8"></label><label>Passwort wiederholen<input name="confirm" type="password" autocomplete="new-password" required minlength="8"></label><button class="button">Konto erstellen</button></form></div><p class="auth-status" id="auth-status"></p>`);const status=document.querySelector('#auth-status');const login=async form=>{const fd=new FormData(form);status.textContent='Bitte warten …';try{const data=await accountRequest('login',{username:fd.get('username'),password:fd.get('password')});sessionStorage.setItem('vzt-session',data.token);account=data;navigate('start')}catch(error){status.textContent=error.message}};document.querySelector('#login-form').onsubmit=e=>{e.preventDefault();login(e.currentTarget)};document.querySelector('#register-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,fd=new FormData(form);if(fd.get('password')!==fd.get('confirm')){status.textContent='Die Passwörter stimmen nicht überein.';return}status.textContent='Konto wird erstellt …';try{await accountRequest('register',{username:fd.get('username'),password:fd.get('password')});status.textContent='Konto erstellt. Du kannst dich jetzt anmelden.';form.reset()}catch(error){status.textContent=error.message}}}
function statistics(){const s=stats(),p=progress(),hard=Object.entries(p).filter(([,x])=>x.wrong>x.right).sort((a,b)=>b[1].wrong-a[1].wrong);const rate=s.total?Math.round(s.correct/s.total*100):0;shell('Deine Statistik',`<div class="stats"><div class="stat"><b>${s.total||0}</b><span>Antworten</span></div><div class="stat"><b>${rate}%</b><span>Trefferquote</span></div><div class="stat"><b>${hard.length}</b><span>Wiederholungen empfohlen</span></div></div><p class="muted">${account?'Diese Statistik stammt aus deinem Konto.':'Gastmodus: Diese Statistik ist nur in diesem Browser gespeichert.'}</p><div class="card" style="margin-top:24px"><h2>Schwierige Zeichen</h2>${hard.length?`<div class="grid">${hard.map(([id,x])=>{const z=signs.find(s=>s.id===id);return`<div class="sign-card">${img(z)}<b>VZ ${id}</b><small>${esc(z.name)}</small><p class="muted">${x.wrong}× falsch · ${x.right}× richtig</p></div>`}).join('')}</div>`:'<p class="empty">Noch keine schwierigen Zeichen. Starte ein Training!</p>'}</div><p><button class="button warn" id="reset">Statistik zurücksetzen</button></p>`);document.querySelector('#reset').onclick=()=>{if(confirm('Statistik und Wiederholungen wirklich zurücksetzen?')){if(account)storeResults({},{});else{localStorage.removeItem('vzt-stats');localStorage.removeItem('vzt-progress')}statistics()}}}
document.addEventListener('click',e=>{const a=e.target.closest('[data-view]');if(a){e.preventDefault();navigate(a.dataset.view)}});window.addEventListener('hashchange',()=>{const v=location.hash.slice(1)||'start';if(v!==current){current=v;render()}});current=location.hash.slice(1)||'start';render();restoreAccount();
