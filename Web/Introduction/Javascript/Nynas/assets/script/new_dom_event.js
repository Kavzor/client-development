'use strict';


var listen = (function(){

  function Event(eventBuilder, callback){
    this.type = eventBuilder.type;
    this.element = eventBuilder.element;
    this.useDefault = eventBuilder.useDefault;

    this.element.addEventListener(this.type, (event) => {
      if(event.type == 'click'){
        event.target.focus();
      }
      if(!this.useDefault){
        event.preventDefault();
      }
      callback(event);
    });
  }

  function EventBuilder(type, element){
    this.type = type;
    if(element == null){
      throw new Error('Error thrown and not caught, stopping executation \nElement is not found for event \'' + this.type + '\'');
    }
    this.element = element;
    this.useBlur = false;
    this.useDefault = true;
  }

  Object.defineProperties(EventBuilder.prototype, {
    'default': {
      value: function(useDefault){
        this.useDefault = useDefault;
        return this;
      }
    },
    'execute': {
        value: function(call){
          var event = new Event(this, call);
      }
    }
  });


  var click = function(element){
    return new EventBuilder('click', element);
  };

  var input = function(element){
    return new EventBuilder('input', element);
  }



  return {
    click: click,
    input: input
  }


})();
