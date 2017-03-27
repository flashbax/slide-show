window.onload = function () { 
"use strict";

//create div element to go around images
var div = document.createElement('div');
div.style.width = '500px';
div.style.height = '313px';
div.style.border = '1px solid black';
div.style.overflow = 'hidden';  
div.id = 'imgBox'; 

//make imgBox div a child of container
document.getElementById("container").appendChild(div);

//create array with number of images
var imgs = [1, 2, 3, 4, 5];

var i;
for (i=1; i<=imgs.length; i++) { 
  var path = "<img src=" + "img/" + i + ".jpg>";
  document.getElementById("imgBox").innerHTML = path;
  console.log(path);
}

}; //window.onload end