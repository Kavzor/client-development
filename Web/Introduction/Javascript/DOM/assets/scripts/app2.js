'use strict';


var button = document.querySelector('button');
var input = document.querySelector('.text_input');

event.click({
    query: "button",
    default: false,
    blur: false,
    callback: () => {
        console.log("helloooo");
    }
});

event.input({
    query: ".text_input",
    default: false,
    blur: false,
    callback: () => {
        console.log("in input");
    }
})

event.keyEnter({
    query: ".text_input",
    default: true,
    blur: true,
    callback: () => {
        console.log("in enter");
    }
})

event.arrow({
    query: ".text_input",
    default: true,
    callback: () => {
        console.log("arrow pressed");
    }
})
