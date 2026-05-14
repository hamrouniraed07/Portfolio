import { writeFileSync, readdirSync } from "fs";

const assets = readdirSync("dist/client/assets");
const css = assets.find((f) => f.endsWith(".css"));
const jsFiles = assets.filter((f) => f.startsWith("index-") && f.endsWith(".js"));

// DejSOn = vendor (React), CHUD9piy = entry — vendor must load first
const vendor = jsFiles.find((f) => f.includes("DejS") || f.includes("ej"));
const entry = jsFiles.find((f) => f !== vendor);

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raed Hamrouni | AI Engineer</title>
    <link rel="stylesheet" href="/assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${vendor}"></script>
    <script type="module" src="/assets/${entry}"></script>
  </body>
</html>`;

writeFileSync("dist/client/index.html", html);
console.log("✅ index.html generated:", { vendor, entry, css });
