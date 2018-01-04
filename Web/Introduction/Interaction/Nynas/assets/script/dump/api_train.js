'use strict';

//slå ihop med http call
var trainAPI = (function () {



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

  function Response(from, data, status){
    this.from = from;
    this.data = data;
    this.status = status;
  }





  const mock_train_schedule = [
    new Train(42).departs("10:25").arrives("11:23"),
    new Train(43).departs("11:25").arrives("12:23"),
    new Train("42X").departs("12:25").arrives("13:23")
  ]

  const mock_status = "Inga problem i trafiken";

  var fetchData = function fetchData(from){
    let response = new Response(from, mock_train_schedule, mock_status);
    return response;
  }

  return {
    fetchData: fetchData
  }
})();

