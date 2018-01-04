'use strict';

var listen = (function(){
  function Event(type){
    this.type = type;
    /*if(this.element == null){
      throw new Error('Error thrown and not caught, stopping executation \nElement is not defined for event \'' + this.event + '\'');
    }*/
  };
  Object.defineProperties(Event.prototype, {
    'element': {
      value: function(element){
        if(element == null){
          throw new Error('Error thrown and not caught, stopping executation \nElement is not found for event \'' + this.type + '\'');
        }
        this.element = element;
        return this;
      },
      writable: true
    },
    'default': {
      value: function(useDefault){
        this.useDefault = useDefault;
        return this;
      }
    },
    'execute': {
      value: function(call){
        let useDefault = this.useDefault;
        this.element.addEventListener(this.type, (event) => {
          if(!useDefault){
            event.preventDefault();
          }
          call(event);
        });
      }
    }
  });

  var click = function click(element){
    return new Event('click').element(element);
  };

  var input = function input(element){
    return new Event('input').element(element);
  }

  return {
    click: click,
    input: input
  }
})();




/*function Event(eventType, event){
  this.event = event;
  eventType.prototype = Object.create(Event.prototype);
  eventType.prototype.constructor = eventType;
}

function ClickEvent(element){
  Event.call(this, ClickEvent, 'click');
  this.element = element;
}

function TextEvent(element, type){
  Event.call(this, TextEvent, type);
  this.element = element;
}

function textChange(element){
  return new TextEvent(element, 'change');
}

function click(element){
  return new ClickEvent(element);
}

ClickEvent.prototype.execute = function(call){
  this.element.addEventListener(this.event, call);
  /*console.log(ClickEvent.prototype);
  console.log(ClickEvent.prototype.constructor);
}

TextEvent.prototype
*/


/*
class Event {
  constructor(event){
    this.event = event;
  }
}

class ClickEvent extends Event{
  constructor(element){
    super('click');
    this.element = element;
  }
  static element(element){
    let clickEvent = new ClickEvent(element);
    return clickEvent;
  }
  execute(call){
    this.element.addEventListener(this.event, call);
  }
}

ClickEvent.element(para_button).execute(function() {
  console.log("hello world");
});*/


/*
function Event(event){
  this.event = event;
}

Event.prototype.element = function(element){
  this.element = element;
  return this;
}
Event.prototype.execute = function(call){
  this.element.addEventListener(this.event, call);
}


Object.defineProperty(Event.prototype, 'on', {
  value: function(element) {
    this.element = element;
    return this;
  }
});

Object.defineProperty(Event.prototype, 'execute', {
  value: function(call){
    this.element.addEventListener(this.event, call);
  }
});


console.log(Event.prototype);

var clickHandler = new Event('click');
clickHandler.on(para_button).execute(function (){
  let p = document.createElement('p');
  p.innerHTML = 'I am a new paragraph';
  para_container.appendChild(p);
});
*/
