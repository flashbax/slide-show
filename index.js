window.onload = function () { 
"use strict";

var div = document.createElement('div');
div.style.width = '500px';
div.style.height = '400px';
div.style.border = '1px solid black';
div.style.overflow = 'hidden';   

var img = document.createElement('img');

var imgs = [1, 2, 3, 4, 5];


function getImg() { 
var i; 
for (i=1; i<=imgs.length; i++) { 
       
     //console.log('<img src="img/' + i + '.jpg"/>'); 
  }
  //return '<img src="img/' + i + '.jpg"/>'
}


document.getElementById("container").appendChild(div).innerHTML = imgs;

};