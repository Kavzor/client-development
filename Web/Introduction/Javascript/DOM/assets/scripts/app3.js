event.click({
    element: document.querySelector('button'),
    blur: false,
    useDefault: true,
    callback: function(){
        console.log("clicked");
    }
});

event.input({
    element: document.querySelector('.text_input'),
    blur: false,
    callback: function(){
        console.log("input");
    }
});

event.keyEnter({
    element: document.querySelector('.text_input'),
    blur: true,
    callback: function(){
        console.log("enter");
    }
});