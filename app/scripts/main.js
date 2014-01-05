$(function() {
    'use strict';
    var dataset = '{"AL":{"obesityPercentage":33,"fullName":"Alabama","medianIncome":43350},"AK":{"obesityPercentage":25.7,"fullName":"Alaska","medianIncome":61066},"AZ":{"obesityPercentage":26,"fullName":"Arizona","medianIncome":48689},"AR":{"obesityPercentage":34.5,"fullName":"Arkansas","medianIncome":40606},"CA":{"obesityPercentage":25,"fullName":"California","medianIncome":56222},"CO":{"obesityPercentage":20.5,"fullName":"Colorado","medianIncome":60180},"CT":{"obesityPercentage":25.6,"fullName":"Connecticut","medianIncome":66844},"DE":{"obesityPercentage":26.9,"fullName":"Delaware","medianIncome":54307},"DC":{"obesityPercentage":21.9,"fullName":"District Of Columbia","medianIncome":60534},"FL":{"obesityPercentage":25.2,"fullName":"Florida","medianIncome":46175},"GA":{"obesityPercentage":29.1,"fullName":"Georgia","medianIncome":47171},"HI":{"obesityPercentage":23.6,"fullName":"Hawaii","medianIncome":59748},"ID":{"obesityPercentage":26.8,"fullName":"Idaho","medianIncome":48640},"IL":{"obesityPercentage":28.1,"fullName":"Illinois","medianIncome":52284},"IN":{"obesityPercentage":31.4,"fullName":"Indiana","medianIncome":46707},"IA":{"obesityPercentage":30.4,"fullName":"Iowa","medianIncome":52110},"KS":{"obesityPercentage":29.9,"fullName":"Kansas","medianIncome":48538},"KY":{"obesityPercentage":31.3,"fullName":"Kentucky","medianIncome":41687},"LA":{"obesityPercentage":34.7,"fullName":"Louisiana","medianIncome":40660},"ME":{"obesityPercentage":28.4,"fullName":"Maine","medianIncome":50121},"MD":{"obesityPercentage":27.6,"fullName":"Maryland","medianIncome":69920},"MA":{"obesityPercentage":22.9,"fullName":"Massachusetts","medianIncome":64153},"MI":{"obesityPercentage":31.1,"fullName":"Michigan","medianIncome":49549},"MN":{"obesityPercentage":25.7,"fullName":"Minnesota","medianIncome":58641},"MS":{"obesityPercentage":34.6,"fullName":"Mississippi","medianIncome":39592},"MO":{"obesityPercentage":29.6,"fullName":"Missouri","medianIncome":48248},"MT":{"obesityPercentage":24.3,"fullName":"Montana","medianIncome":43226},"NE":{"obesityPercentage":28.6,"fullName":"Nebraska","medianIncome":54755},"NV":{"obesityPercentage":26.2,"fullName":"Nevada","medianIncome":49759},"NH":{"obesityPercentage":27.3,"fullName":"New Hampshire","medianIncome":68415},"NJ":{"obesityPercentage":24.6,"fullName":"New Jersey","medianIncome":65548},"NM":{"obesityPercentage":27.1,"fullName":"New Mexico","medianIncome":44605},"NY":{"obesityPercentage":23.6,"fullName":"New York","medianIncome":50600},"NC":{"obesityPercentage":29.6,"fullName":"North Carolina","medianIncome":44620},"ND":{"obesityPercentage":29.7,"fullName":"North Dakota","medianIncome":55673},"OH":{"obesityPercentage":30.1,"fullName":"Ohio","medianIncome":46093},"OK":{"obesityPercentage":32.2,"fullName":"Oklahoma","medianIncome":47755},"OR":{"obesityPercentage":27.3,"fullName":"Oregon","medianIncome":52555},"PA":{"obesityPercentage":29.1,"fullName":"Pennsylvania","medianIncome":51245},"RI":{"obesityPercentage":25.7,"fullName":"Rhode Island","medianIncome":53495},"SC":{"obesityPercentage":31.6,"fullName":"South Carolina","medianIncome":43078},"SD":{"obesityPercentage":28.1,"fullName":"South Dakota","medianIncome":48461},"TN":{"obesityPercentage":31.1,"fullName":"Tennessee","medianIncome":42266},"TX":{"obesityPercentage":29.2,"fullName":"Texas","medianIncome":50591},"UT":{"obesityPercentage":24.3,"fullName":"Utah","medianIncome":58235},"VT":{"obesityPercentage":23.7,"fullName":"Vermont","medianIncome":55808},"VA":{"obesityPercentage":27.4,"fullName":"Virginia","medianIncome":64043},"WA":{"obesityPercentage":26.8,"fullName":"Washington","medianIncome":59790},"WV":{"obesityPercentage":33.8,"fullName":"West Virginia","medianIncome":43765},"WI":{"obesityPercentage":29.7,"fullName":"Wisconsin","medianIncome":53083},"WY":{"obesityPercentage":24.6,"fullName":"Wyoming","medianIncome":56044}}';
    dataset = JSON.parse(dataset);

    var containerHeight = 300;
    var containerWidth = 400;
    var svg = d3.select('#usStates.state').append('svg');
    var multiplier = 12;


    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'circle')
      .attr('x', function(d, i) {
        return i * 35;
    })
      .attr('y', function(d, i) {
        return containerHeight - d * multiplier;
    })
      .attr('width', 30)
      .attr('height', function(d) {
        return d * multiplier;
    });

  _.each(dataset,function(val,key){
    $('#' + key).css('fill','#ff0000');
  })

});