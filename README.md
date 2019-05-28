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
2. Create a `<div>` or use any other element that can work as a container.
3. Add the `board` class to the target container and `board--type-bulletin` if you want to display text or `board--type-sign` if you want to use it as a menu button.
4. Add your own class to set the size of the container. **Remember**: the `height` you  set here will define the total `height` between the board and its chains. Use the live [project] to guide you.

Normally, you wouldn't need to mess around with any of the base classes, namely, `board`, `board--type-bulletin` and `board-type-sign`, but if you want more control over them or just want to modify them, here is a rundown of what each of them are and do (as you can see, they follow the [BEM] naming convention):

- `board` - This is the **main class** or **block** where most of the magic happens. It contains everything both types of board share in common.
- `board-type-bulletin` - This class is a **modifier** and adds all the modifications needed to make the bulletin.
- `board-type-sign` - This other one is also a **modifier** and adds all what is needed to turn the board into a sign board.



[project]: https://codepen.io/andresangelini/project/editor/Aarxxz
[pen]: https://codepen.io/andresangelini/pen/EXjqRv
[blog]: https://thealchemistjournal.com/
[BEM]: http://getbem.com/
