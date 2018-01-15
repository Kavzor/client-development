'use strict';

var event = (function() {

    function Event(event){
        if(event.element == undefined){
            throw new Error("Element with type " + event.type + " not found" + "\nPleases verify element selectors");
        }
        this.element = event.element;
        this.type = event.type;
        this.callback = event.callback;
        this.useDefault = event.useDefault | true;
        this.blur = event.blur | false;
        this.keycode = event.keycode | 0;
    }

    function EventHandler(){
        this.events = [];
    }

    var eventHandler = new EventHandler();

    EventHandler.prototype.setupEvent = function(event){
        var hasTypeListener = false;
        this.events.forEach((item) => {
            if(item.element == event.element){
                if(item.type == event.type){
                    hasTypeListener = true;
                }
            }
        });
        this.events.push(event);
        if(!hasTypeListener){
            addEvent(event);
        }
    }

    EventHandler.prototype.getEvent = function(element, type, keycode){
        var event = undefined
        var index = 0;

        while(event == undefined){
            if(this.events[index] == undefined){
                throw new Error("Could find element with type: " + type + "\nKeycode: " + keycode);
            }

            while(this.events[index].element != element){
                index++;
            }
            if(this.events[index].type == type){
                if(keycode < 8){
                    event = this.events[index];
                }
                else {
                    if(isSpecialKeycode(keycode)){
                        if(this.events[index].keycode == keycode){
                            event = this.events[index];
                        }
                    }
                    else {
                        event = this.events[index];
                    }
                }
            }
            index++;
        }
        return event;
    }

    function addEvent(event){
        event.element.addEventListener(event.type, (domEvent) => {
            event = eventHandler.getEvent(domEvent.target, domEvent.type, domEvent.which);
            event.callback(domEvent);
            if(event != undefined){
                if(!event.useDefault){
                    domEvent.preventDefault();
                }
                if(event.blur){
                    event.element.blur();
                }
            }
        });
    }

    var specialKeyCodes = [];
    function addSpecialKeyCode(code){
        specialKeyCodes.push(code);
    }

    function isSpecialKeycode(code){
        var exist = false;
        specialKeyCodes.forEach((keycode) => {
            if(code == keycode){
                exist = true;
            }
        })
        return exist;
    }

    var click = function(event){
        event.type = 'click';
        eventHandler.setupEvent(new Event(event));
    }

    var input = function(event){
        event.type = 'keydown';
        eventHandler.setupEvent(new Event(event));
    }

    var keyEnter = function(event){
        event.type = 'keydown';
        event.keycode = 13;
        addSpecialKeyCode(event.keycode);
        eventHandler.setupEvent(new Event(event));
    }

    return {
        click: click,
        input: input,
        keyEnter: keyEnter
    }

})();