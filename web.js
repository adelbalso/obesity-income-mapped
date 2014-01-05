var gzippo = require('gzippo');
var express = require('express');
var app = express();
var dataStandardizations = require('./lib/dataStandardizations.js');

app.get('/api/obesity.json', function(req, res) {
  data = dataStandardizations.processAndReturnData();
  response = JSON.stringify(data);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(response);
  res.end();
});

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);