// Use css pointerevent to detect IE 10 and older since these don't scale SVGs properly when used as background images.
// For them, insert multiple divs so that each of their backgrounds can be used to display their respective layers of the
// SVG stack.
if (Modernizr.csspointerevents) {
  // supported
  appendElementsToBoard('div');
} else {
  // not-supported
  
}

// Use JPEG 2000 image format to detect Safari and Safar iOS (down to 4.0 and 4.3 respectively) since these are the only ones that don't support
// SVG fragment identifiers but do support this feature.
// Just lilke with IE 10 and older, insert multiple divs inside the board so that each of them use a single background image.
Modernizr.on('jpeg2000', function(result) {
  if (result) {
    // supported
    appendElementsToBoard('div');
  } else {
    // not-supported
    // Move it back to if clause after testing.
    
  }
});

// Use WebP Image Format to target Chrome, Opera and derivatives only and then Passive Event
// Listeners to detect support for SVG Fragment Identifiers. Again, insert multiple div
// elements inside the board so that each of them use a single background.
// image.
if (!Modernizr.webp) {
  if (Modernizr.passiveeventlisteners) {
    // supported
  } else {
    // not-supported
    appendElementsToBoard('div');
  }
}

// IE < 10 don't support CSS Generated content pseudo-elements nor using innerHTML on html elements.
if (Modernizr.generatedcontent) {
  // supported
} else {
  // not-supported
  document.body.appendChild(document.createTextNode("Oops! It seems your browser or device isn't able to display this site properly. Please, update it."));
}

function appendElementsToBoard(elem) {
  // IE 8 raises an error with document.getElementsByClassName().
  try {
    // Insert multiple elements in every board div.
    for (var i = 0; i < document.getElementsByClassName('board').length; i++) {
      for (var k = 1; k < 14; k++) {
       document.getElementsByClassName('board')[i].appendChild(document.createElement(elem));   
      }
    }
  } catch(err) {
    // do nothing.
  }
}