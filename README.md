# Medieval Board
The *responsive* Medieval Board for the modern web that *fits* all your videogame needs.

## Description:
This is a responsive medieval style board made out of a single SVG file that can be set to any size. It has two different versions so that it can be used for displaying text as well as a menu button. Check out the [project] live over at Codepen or play around with the [pen] version and be sure to visit my [blog] for an in-depth explanation.

## Key Features:
1. It resizes in height, width or both simultaneously.
2. It does not require any extra html element, just add the proper  class to any element and you are done.
3. It only uses a single file for the graphics thus avoiding unnecessary http requests.
4. It can be cached by the browser.
5. It falls back gracefully for browsers that do not support the features used.

## Browser Support:
- Firefox 17+.
- Chrome 19+.
- Safari and Safari Mobile 6.1+.
- Opera.

## Dependencies
- node
- npm (should come already installed with node)

## Installation:
`npm i medieval-board` (remember to use the `--save` option if npm < 5). Files can be found at:
- Compiled:
  - css: `node_modules/medieval-board/dist/css/medieval-board.css`
  - js: `node_modules/medieval-board/dist/js/medieval-board.js`
  - svg: `node_modules/medieval-board/dist/svg/`
- Source:
  - css: `node-modules/medieval-board/src/css/`
  - js: `node-modules/medieval-board/src/js/`
  - svg: `node_modules/medieval-board/src/svg/`

## Usage:
1. Copy or link to the files.
2. Create a `<div>` or use any other element that can act as a container.
3. Add the `board` class to the target container and `board--type-bulletin` if you want to display text in it or `board--type-sign` if you want to use it as a menu button.
4. Add your own custom class and set the size of the container. Use the live [project] to guide you.

Medieval Board uses the [BEM] methodology under which:

- `board` is the **block** or base class where most of the magic happens.
- `board--type-bulletin` is the **modifier** that turns the board into a bulletin board.
- `board--type-sign` is the **modifier** that turns the board into a sign board.
- Your custom class will be the **element** that defines the size and position of the container.

The `height` of the boards themsleves can be set throught the variables `$bulletin-board-height` and `$sign-board-height` in the `_variables.scss` partial file.

Please nota that, normally, you wouldn't need to mess around with any of the other variables unless you have modified the SVG file.

## Development
The following are the most important commands available during development.
- `gulp build` will delete the `dist` folder and create a new one with all the files compiled and ready for production.
- `gulp serve` will build the `dist` folder and watch for changes.

If you want more granular control you can also use:
- `gulp copyHtml` to copy tha sample HTML file from `src/` to `dist/`.
- `gulp copySvgs` to copy all the SVGs from `src/svg/` to `dist/svg/`.
- `gulp compileScss` to compile all Sass files and save the output to `dist/css/`.
- `gulp compileJs` to compile all JavaScript files and save the output to `dist/js/`.
- `gulp clean` to remove the `dist/` folder.

## Development dependencies:
- node
- npm (should come already installed with node)
- del
- gulp
- gulp-sass
- gulp-sourcemaps
- gulp-modernizr
- gulp-autoprefixer
- gulp-rename
- gulp-concat
- gulp-uglify
- browser-sync

## Legal
[![License: MICopyright (c) 2019 Andrés AngeliniT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

- All the code in this project is licensed under the terms of the [MIT] license.
- Art assets, on the other hand, are licensed under the terms of the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)][CC BY-SA 4.0] license.

Copyright (c) 2019 Andrés Angelini


[project]: https://codepen.io/andresangelini/project/editor/Aarxxz
[pen]: https://codepen.io/andresangelini/pen/EXjqRv
[blog]: https://medium.com/@angelini.andres/https-medium-com-angelini-andres-making-a-responsive-medieval-board-with-svg-stacks-chapter-i-f18490364e44
[BEM]: http://getbem.com/
[MIT]: https://opensource.org/licenses/MIT
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/
