var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printUppercase = function printHTML (html) {
  htmlString = html.toString();
  console.log(htmlString.toUpperCase());
}

getHTML(requestOptions, printUppercase);