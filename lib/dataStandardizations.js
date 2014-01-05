module.exports = {
  processAndReturnData: function(){

    var obesityData = require('../data/obesityByState.js'),
        incomeData = require('../data/incomeData.js'),
        stateAbbrevMappings = require('../data/stateAbbrevMappings.js'),
        _ = require('underscore');

    var resultSet = {};

    _.each(obesityData,function(datum){
      var key = stateAbbrevMappings.fullToAbbrev[datum[0]];
      resultSet[key] = {};
      resultSet[key].obesityPercentage = Number(datum[1]);
      resultSet[key].fullName = datum[0];
    });

    _.each(incomeData,function(datum){
      var key = stateAbbrevMappings.fullToAbbrev[datum[0]];

      resultSet[key].medianIncome = Number(datum[1].replace(',',''));
    });

    return resultSet
  }
};

