# Meritly på Vercel

Projektet bygger på den publicerade Meritly-versionen i Konrad654/Min-hemsida (a83dd36). Design, kursdata, loggor, sökning, jämförelse och de lokala studieverktygen finns med. Webappen byggs till statiska filer i public.

## Publicera

1. Packa upp ZIP-filen. Skapa ett nytt repository på GitHub.
2. Ladda upp innehållet från den uppackade mappen så att vercel.json, courses.js och mapparna scripts, src, assets och public ligger i repots rot. GitHub packar inte upp en uppladdad ZIP automatiskt.
3. Välj Add New → Project i Vercel och importera repot från GitHub. Behåll rotkatalogen som projektrot. Om ett ramverk efterfrågas, välj Other.
4. Välj Deploy. Projektet innehåller redan byggkommandot och inställningen för utdatamappen.

En Vercel-adress har en egen webbläsarlagring. Favoriter, studieplan och andra personliga uppgifter kan flyttas genom att exportera en säkerhetskopia i Inställningar på den gamla adressen och importera den på den nya.

Katalogverktygets länkar för felrapportering och uppdateringar pekar på ursprungsprojektet på GitHub. Kurserna öppnas hos respektive utbildningsanordnare.

## Lokal körning och ändringar

Ändra kursdata i courses.js, gränssnittet i src/app.js och utseendet i src/style.css. Bygg med Node.js 22 eller senare.

```sh
node scripts/build.mjs
node --test tests/app.test.cjs
python3 -m http.server 8000 --directory public
```

Öppna http://localhost:8000 i webbläsaren. Installationsalternativet beror på webbläsarens stöd. Offlinekatalogen kan hämtas via Inställningar.

Bygget använder Vercels produktionsadress för SEO-metadata när den finns tillgänglig. Om du vill ange en annan slutlig webbplatsadress kan du sätta miljövariabeln SITE_URL till din domän och bygga om.
