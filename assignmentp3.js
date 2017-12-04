function getAndPrintHTML (request) {
  var https = require('https');
  var chunksArray = [];

  https.get(request, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      chunksArray.push(chunk);
    });

    response.on('end', function() {
      console.log(chunksArray.toString());
    });

  });

}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


getAndPrintHTML(requestOptions);