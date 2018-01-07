'use strict';

//För att förhindra att namnen krockar
var weatherAPI = (function(){
//samma namn som i api_train

  function Weather(weather){
    this.weather = weather;
  };

  Object.defineProperties(Weather.prototype, {
    'clock': {
      value: function(clock){
        this.clock = clock;
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: false
    },
    'heat': {
      value: function(heat){
        this.heat = heat;
        return this
      },
      writable: true,
      enumerable: true,
      configurable: false
    },
    'wind': {
      value: function(wind){
        this.wind = wind;
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: false
    }
  });

  const mock_weather = [
    new Weather("Moln").clock("09:00").heat(16).wind(3),
    new Weather("Sol").clock("12:00").heat(18).wind(4),
    new Weather("Sol").clock("15:00").heat(20).wind(2),
    new Weather("Regn").clock("18:00").heat(19).wind(3),
    new Weather("Moln").clock("21:00").heat(17).wind(1)
  ]

  var fetchData = function fetchData(){
    return mock_weather;
  }

  return {
    fetchData: fetchData
  }
})();
