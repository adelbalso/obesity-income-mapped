module.exports = {
  processAndReturnData: function(){

    var obesityData = require('../data/obesityByState.js'),
        incomeData = require('../data/incomeData.js'),
        _ = require('underscore');

    var resultSet = {};

    _.each(obesityData,function(datum){
      resultSet[datum[0]] = {};
      resultSet[datum[0]].obesityPercentage = Number(datum[1]);
    });

    _.each(incomeData,function(datum){
      resultSet[datum[0]].medianIncome = Number(datum[1].replace(',',''));
    });

    return resultSet
  }
};

