var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printReverse = function printHTML (html) {
  var htmlArray = [];
  var arrayString = '';
  htmlArray = html.split("");
  arrayString = htmlArray.reverse().join('');
  console.log(arrayString);
};

console.log(getHTML(requestOptions, printReverse));