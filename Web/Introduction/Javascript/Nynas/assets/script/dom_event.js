'use strict';

var listen = (function(){
  function Event(type){
    this.type = type;
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
    'blur': {
      value: function(blur){
        this.useBlur = blur;
        return this;
      },
      writable: true
    },
    'execute': {
        value: function(call){
          var event = new Event(this.type).element(this.element);
          event.blur = this.useBlur;
          event.useDefault = this.useDefault;
          setCallBack(call);
          //console.log(this);
          //this.element.addEventListener(this.type, callBack);
      }
    }
    /*'execute': {
      value: function(callBack){
        let useDefault = this.useDefault;
        if(useDefault == undefined){
          useDefault = true;
        }
        let keycode = this.keycode;
        let blur = this.useBlur;
        if(blur == undefined){
          blur = false;
        }

        console.log("KEY: " + keycode);
        console.log("BLUR: " + blur);
        console.log("TYPE: " + this.type);

        this.element.addEventListener(this.type, (event) => {
          if(blur){ //breaks because of prototype, consider same for default
            console.log("blurring");
            event.target.blur();
          }
          if(!useDefault && (key.which == keycode || keycode == undefined)){
            console.log("preventing");
            event.preventDefault();
          }
          if(keycode != undefined){
            if(keycode == event.which){
              console.log("key pressed");
              call(event);
            }
          }
          else {
            console.log("normal action");
            call(event);
          }
        });
      }
    }*/
  });

  function setCallBack(event, callback){
    console.log(event);
      event.element.addEventListener(event.type, (e) => {
        console.log(event.useBlur);
        callback(e);
      });
    }

  var click = function(element){
    return new Event('click').element(element);
  };

  var input = function(element){
    return new Event('input').element(element);
  }

  var focusOut = function(element){
    return new Event('focusout').element(element);
  }

  var key = (function(){
    var enter = function(element){
      var event = new Event('keydown').element(element);
      event.keycode = '13';
      console.log("EVENT: " + event);
      return event;
    };

    var arrowDown = function(element){
      var event = new Event('keydown').element(element);
      event.keycode = '40';
      return event;
    };

    var arrowUp = function(element){
      var event = new Event('keydown').element(element);
      event.keycode = '38';
      return event;
    }

    return {
      enter: enter,
      arrowDown: arrowDown,
      arrowUp: arrowUp
    }
  })();

  return {
    click: click,
    input: input,
    focusOut: focusOut,
    key: key
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
