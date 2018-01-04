'use strict';


var para_button = document.querySelector('.content > button');
var para_container = document.querySelector('.paragraph_container');

var text_input = document.querySelector('.content > input[type=text]');
var text_container = document.querySelector('.text_container > .text_output');

input(text_input).execute((event) => updateText());
/*
para_button.addEventListener('click', function(){
  let p = document.createElement('p');
  p.innerHTML = 'I am a new paragraph';
  para_container.appendChild(p);
});
*/

click(para_button).execute((event /*optional*/) => addParagraph());

function addParagraph(event){
  let p = document.createElement('p');
  p.innerHTML = 'I am a new paragraph';
  para_container.appendChild(p);
}

function updateText(){
  var input = text_input.value;
  text_container.innerHTML = input;
}
