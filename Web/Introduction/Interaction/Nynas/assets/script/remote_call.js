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
  var buildWeatherResponse = function(weather = entity.weather){
    var response = new WeatherResponse();

    response.push(weather("Moln").clock("09:00").heat(16).wind(3));
    response.push(weather("Sol").clock("12:00").heat(18).wind(4));
    response.push(weather("Sol").clock("15:00").heat(20).wind(2));
    response.push(weather("Regn").clock("18:00").heat(19).wind(3));
    response.push(weather("Moln").clock("21:00").heat(17).wind(1));

    return response;
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
    ajax.call("").then((response) => {
      callback(weatherResponse());
    });
  }

  return {
    train: train,
    weather: weather
  }
})();

