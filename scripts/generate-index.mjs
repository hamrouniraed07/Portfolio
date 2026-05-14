import { writeFileSync } from "fs";

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raed Hamrouni | AI Engineer</title>
    <link rel="stylesheet" href="/assets/styles-CBg8YmXu.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/index-CHUD9piy.js"></script>
    <script type="module" src="/assets/index-DejSOn_0.js"></script>
  </body>
</html>`;

writeFileSync("dist/client/index.html", html);
console.log("✅ index.html generated");
