var dataStandardizations = require('./lib/dataStandardizations.js');

data = dataStandardizations.processAndReturnData();
console.log(JSON.stringify(data));
