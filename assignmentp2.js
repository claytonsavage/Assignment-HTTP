function getAndPrintHTML () {
  var https = require('https');
  var chunksArray = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      chunksArray.push(chunk);
    });

    response.on('end', function() {
      console.log(chunksArray.toString());
    });

  });

}

getAndPrintHTML();