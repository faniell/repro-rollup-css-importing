# Repro for "Imported CSS stylesheet stays in CSS output after the importing file is tree shaken"
[Link to issue](#)

## Reproduce

- npm install in app, styles, components
- cd app/
- npx rollup -c
- Check  app/build/ for the bundled files.

## Description of repro
This is a monorepo with packages styles, components, and app. App is dependent on components and styles. Components is dependent on styles. Components contains Button.js and Paragraph.js. Button.js imports styling, Paragraph.js does not. App imports Paragraph.js to its file main.js. Main.js is bundled with Rollup.

In app is also a simple express server to run the bundled code.

## Problem

Rolling up main.js and the only imported component Paragraph works as expected. When extracting the css (using rollup-plugin-css-only or any css-plugin) the imported stylesheet ends up joining the bundled css, even though the js-file that is importing the css does not end up in the bundled js.

## Expected Behaviour

The tree shaken code does not end up in the bundled files. As code is being cut from the bundle, also cut the css that comes from the import statements.
