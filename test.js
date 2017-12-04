var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printHTML = function printHTML (html) {
  console.log(html);
}

console.log(getHTML(requestOptions, printHTML));