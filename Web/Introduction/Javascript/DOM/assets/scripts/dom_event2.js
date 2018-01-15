'use strict';

var event = (function(){
    function find(query){
        return document.querySelector(query);
    }

    function Event(event){
        this.type = event.eventType;
        this.element = find(event.query);
        this.element.addEventListener(this.type, (callEvent) => {
            event.callback(callEvent);
        })
    }

    
    
    var elements = [];
    function addKeyEvent(element){
        elements.push(element);
    }
    function exist(element){
        var exist = false;
        elements.forEach((item) => {
            if(item == element){
                exist = true;
            }
        });
        return exist;
    }

    var keycodes = []
    function addSpecialKey(event){
        keycodes.push(event);
    }
    function getEvent(keycode){
        var event = undefined;
        keycodes.forEach((item) => {
            if(item.keycode == keycode){
                event = item;
            }
        });
        return event;
    }

    function SpecialEvent(event){
        this.type = 'keydown';
    }

    function KeyEvent(event){
        this.type = "keydown";
        this.event = event;
        this.callback = event.callback;
        if(!exist(event.query)){
            addKeyEvent(event.query);
            this.element = find(event.query);
            this.element.addEventListener(this.type, (domEvent) => {
                var event = getEvent(domEvent.which);
                if(event != undefined){
                   if(event.blur){
                       domEvent.target.blur();
                   }
                   if(!event.useDefault){
                       domEvent.preventDefault();
                   }
                   event.callback();
                }
                else {
                    this.event.callback();
                }
            });
        }
    }

    var click = function(event){
        event.eventType = 'click';
        new Event(event);
    }

    var input = function(event){
        new KeyEvent(event);
    }

    var keyEnter = function(event){
        event.keycode = '13';
        addSpecialKey(event);
        new KeyEvent(event);
    }

    var arrow = function(event){
        event.keycode = '38';
        addSpecialKey(event);
        new KeyEvent(event);
    }

    return {
        click: click,
        input: input,
        keyEnter: keyEnter,
        arrow: arrow
    }
})();