# Thermonext — Website (statisch)

Dieser Branch (`gh-pages`) enthält die ausgelieferte Website als statisches HTML.
Er wird von GitHub Pages bedient. Der Branch `main` enthält davon unabhängig
einen älteren Next.js-Entwurf.

## Aufbau

    index.html          die gesamte Seite (Markup, Styles und Skript in einer Datei)
    img/                Baustellenfotos
    assets/tailwind.css aus dem Markup erzeugtes Stylesheet
    assets/lucide.min.js Icons
    assets/fonts/       Geist, selbst gehostet

Alle Ressourcen liegen im Repo. Die Seite lädt nichts von fremden Servern,
also auch keine Google Fonts — das ist wegen der DSGVO so gewollt.

## Lokal ansehen

    python3 -m http.server 8000

Dann http://localhost:8000 öffnen. Die Seite direkt per Doppelklick zu öffnen
funktioniert nur eingeschränkt, weil der Browser die Schrift dann blockiert.

## Vor dem Bewerben der Seite

`index.html` steht auf `noindex`, damit sie nicht in Suchmaschinen auftaucht.
Grund: Impressum, Telefonnummer und E-Mail sind noch Platzhalter. Eine
gewerbliche Website in Deutschland braucht ein vollständiges Impressum
(§ 5 DDG). Sobald die Angaben stehen, das `robots`-Meta im Kopf der Datei
auf `index,follow` ändern.
