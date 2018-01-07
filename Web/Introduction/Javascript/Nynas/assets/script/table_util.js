'use strict';

function Table(tbody){
  this.tbody = tbody;
}

Object.defineProperties(Table.prototype, {
  'update': {
      set: function(map){
      this.clear();
      map.forEach((object) => {
        let tr = document.createElement('tr');
        this.tbody.appendChild(tr);

        object.enumerationOrder.forEach((property) => {
            let td = document.createElement('td');
            td.innerHTML = object[property];
            tr.appendChild(td);
        })
      });
    }
  },
  'clear': {
    value: function(){
      while(this.tbody.firstChild){
        this.tbody.removeChild(this.tbody.firstChild);
      }
    }
  },
  'load': {
    value: function(map){
      this.update = map;
      return this;
    }
  },
  'construct': {
    value: function(){
      return this;
    }
  }
});


function TrainTable(trainTable){
  Table.call(this, trainTable);
}
  TrainTable.prototype = Object.create(Table.prototype);
  TrainTable.prototype.constructor = TrainTable;

Object.defineProperties(TrainTable.prototype, {
 'statusElement': { //skriver över värdet dynamiskt till ett element
    value: function(statusElement) { //från denna funktion
      this.statusElement = statusElement;
      return this;
    },
   writable: true,
   enumerable: false,
   configurable: false
  },
  'fromElement': {
    value: function(fromElement) {
      this.fromElement = fromElement;
      return this;
    },
    writable: true,
    enumerable: false,
    configurable: false
  },
  'searchElement': {
    value: function(searchElement){
      this.searchElement = searchElement;
      return this;
    },
    writable: true,
    enumerable: false,
    configurable: false
  },
  'from': {
    set: function(from){
      localStorage.from = from;
      this.fromElement.innerHTML = from;
    },
    get: function(){
      return this.searchElement.value;
    }
  },
  'status': {
    set: function(status){
      this.statusElement.innerHTML = status;
    }
  },
  'construct': {
    value: function(){
      let lastSearch = localStorage.from;
      if(lastSearch != undefined){
        this.searchElement.value = localStorage.from;
      }
      return this;
    }
  }
});

function WeatherTable(weatherTable, data){
  Table.call(this, weatherTable);
  this.data = data;
}

//definera funktionen först, funktionen kommer inte att hittas eftersom konstruktorn pekar fel
WeatherTable.prototype = Object.create(Table.prototype);
WeatherTable.prototype.constructor = WeatherTable;

