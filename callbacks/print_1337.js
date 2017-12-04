var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printReverse = function printHTML (html) {
  console.log(html.replace(/[a-z]/g, function f(a){ return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36) - 10] || a.replace(/[a-t]/gi, f); }));
};

console.log(getHTML(requestOptions, printReverse));