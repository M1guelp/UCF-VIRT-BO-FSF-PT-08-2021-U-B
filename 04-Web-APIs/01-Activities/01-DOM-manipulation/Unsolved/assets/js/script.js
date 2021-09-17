// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
var h1Element = document.createElement('h1');
h1Element.textContent = 'This is my home page';
h1Element.setAttribute('style', 'margin: auto ;width:50%; text-align: center;');
body.appendChild(h1Element);
// TODO: Add a centered h2
var h2Element = document.createElement('h2');
h2Element.textContent = `There is very little html, wow its magic!`;
h2Element.setAttribute('style', 'margin: auto ;width:50%; text-align: center;');
body.appendChild(h2Element);
// TODO: Add a centered image with a centered caption under it

// TODO: Add a list of your favorite foods (or other favorites)
