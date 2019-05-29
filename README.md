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

## Dependencies:
- Modernizr.
- Autoprefixer.

## Usage:
1. Download and copy the files into your project.
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

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

- All the code in this project is licensed under the terms of the [GNU GPL v3].
- Art assets, on the other hand, are licensed under the terms of the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)][CC BY-SA 4.0] license.




[project]: https://codepen.io/andresangelini/project/editor/Aarxxz
[pen]: https://codepen.io/andresangelini/pen/EXjqRv
[blog]: https://thealchemistjournal.com/
[BEM]: http://getbem.com/
[GNU GPL v3]: https://www.gnu.org/licenses/gpl-3.0
[CC BY-SA 4.0]: https://creativecommons.org/licenses/by-sa/4.0/
