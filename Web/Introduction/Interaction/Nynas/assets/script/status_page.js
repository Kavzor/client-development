'use strict';

function find(selector){
  return document.querySelector(selector);
}
function findAll(selector){
  return document.querySelectorAll(selector);
}

/*ajax.call("https://patrik.localtunnel.me/login").method("POST").param(user).then((response) => {
 //do things
});*/

var status_page = (function(selector) {
  remote.weather((response) => {
    table.refreshWeather(response);
  });

  listen.click(selector.search_btn).default(false).execute((event) => {
    remote.train("Stockholm", (response) => {
      table.refreshTrain(response);
    });
  });

  var table = (function(){
    var trainTable =
      new TrainTable(selector.train_table).
        statusElement(selector.status_field).
        fromElement(selector.train_from).
        searchElement(selector.search_field).
        construct();

    var weatherTable =
        new WeatherTable(selector.weather_table).
        construct();


    var refresh = (function(){
      var train = function(response){
        trainTable.update = response.data;
        trainTable.status = response.status;
        trainTable.from = response.from;
      }
      var weather = function(response){
        weatherTable.update = response.data;
      }
      return {
        train: train,
        weather: weather
      }

    })();

    var refreshTrain = function(response){
      refresh.train(response);
    }
    var refreshWeather = function(response){
      refresh.weather(response);
    }

    return {
      refreshTrain: refreshTrain,
      refreshWeather: refreshWeather
    }
  })();

})
({
  search_field: find('.train-content input[type=text]'),
  search_btn: find('.train-content input[type=submit]'),
  status_field: find('.train-content td[colspan]'),
  train_from: find('.train-content caption'),
  train_table: find('.train-content tbody'),
  weather_table: find('.weather-content tbody')
});

