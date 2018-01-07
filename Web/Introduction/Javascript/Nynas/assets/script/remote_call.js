var entity = (function(){

  function Train(number){
    this.number = number;
  };

  Object.defineProperties(Train.prototype, {
    'departs': {
      value: function(departs){
        this.departs = departs;
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: false
    },
    'arrives': {
      value: function(arrives){
        this.arrives = arrives;
        return this;
      },
      writable: true,
      enumerable: true,
      configurable: false
    },
    enumerationOrder: {
      get: function(){
        return ['number', 'departs', 'arrives'];
      }
    }
  });

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
    },
    'enumerationOrder': {
      get: function(){
        return ['clock', 'weather', 'heat', 'wind'];
      }
    }
  })

  var train = function(number){
    return new Train(number);
  }

  var weather = function(weather){
    return new Weather(weather);
  }

  return {
    train: train,
    weather: weather
  }
})();

var response = (function() {
  function Response(){
    this.data = [];
  }

  Object.defineProperty(Response.prototype, 'push', {
    value: function(data){
      this.data.push(data);
    }
  })

  function TrainResponse(from, status){
    Response.call(this);
    this.from = from;
    this.status = status;
  }
  TrainResponse.prototype = Object.create(Response.prototype);
  TrainResponse.prototype.constructor = TrainResponse;

  function WeatherResponse(){
    Response.call(this);
  }
  WeatherResponse.prototype = Object.create(Response.prototype);
  WeatherResponse.prototype.constructor = WeatherResponse;

  var buildTrainResponse = function(from, status, train = entity.train){
    var response = new TrainResponse(from, status);

    response.push(train(42).departs("10:25").arrives("11:23"));
    response.push(train(43).departs("11:25").arrives("12:23"));
    response.push(train("42X").departs("12:25").arrives("13:23"));

    return response;
  }
  var buildWeatherResponse = function(responseData, weather = entity.weather){
    responseData = JSON.parse(responseData);
    return parseWeatherData(responseData);
      /*
    var response = new WeatherResponse();
    response.push(weather("Moln").clock("09:00").heat(16).wind(3));
    response.push(weather("Sol").clock("12:00").heat(18).wind(4));
    response.push(weather("Sol").clock("15:00").heat(20).wind(2));
    response.push(weather("Regn").clock("18:00").heat(19).wind(3));
    response.push(weather("Moln").clock("21:00").heat(17).wind(1));
*/
  }

  function parseWeatherData(weatherData, weather = entity.weather){
    var response = new WeatherResponse();


    for(let index = 0; index < 7; index++){
      var time = weatherData.list[index].dt_txt;
      time = new Date(time).getHours() + ":00";

      var wind = weatherData.list[index].wind.speed.toFixed(1);
      var temp = weatherData.list[index].main.temp;
      temp = Number(temp - 273.15).toFixed(1);

      var cloud = weatherData.list[index].clouds.all;

      var weatherDesc = weatherData.list[index].weather[0].description;
      weatherDesc = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);

      response.push(weather(weatherDesc).clock(time).heat(temp).wind(wind));

    }
    return response;
  }

  function parseTrainData(trainData, train = entity.train){

  }

  return {
    buildWeatherResponse: buildWeatherResponse,
    buildTrainResponse: buildTrainResponse
  }
})();


/****** remote calls *******/
var remote = (function() {
  function WeatherCall(){
    RemoteCall.call(this);
  }
  WeatherCall.prototype = Object.create(RemoteCall.prototype);
  WeatherCall.prototype.constructor = WeatherCall;

  function TrainCall(){
    RemoteCall.call(this);

  }
  TrainCall.prototype = Object.create(RemoteCall.prototype);
  TrainCall.prototype.constructor = TrainCall;


  var train = function train(from, callback, trainResponse = response.buildTrainResponse){
    ajax.call("").then((response) => {
      callback(trainResponse(from, "Inga problem i trafiken"));
    });
  }

  var weather = function weather(callback, weatherResponse = response.buildWeatherResponse){
    ajax.call("http://api.openweathermap.org/data/2.5/forecast?q=Nynashamn&APPID=5b755d33b1f3737e41eab07a7de9424e&lang=se").then((reply) => {
      callback(weatherResponse(reply.response));
    });
  }

  return {
    train: train,
    weather: weather
  }
})();

