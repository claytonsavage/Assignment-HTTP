var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printLowerCase = function printHTML (html) {
  htmlString = html.toString();
  console.log(htmlString.toLowerCase());
}

console.log(getHTML(requestOptions, printLowerCase));