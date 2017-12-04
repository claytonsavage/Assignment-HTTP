function getHTML (options, callback) {
  var https = require('https');
  var chunksArray = [];
  var html = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      chunksArray.push(chunk);
    });

    response.on('end', function() {
      html = (chunksArray.toString());
      return callback(html);
    });

  });
}

var printHTML = function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};


getHTML(requestOptions, printHTML);