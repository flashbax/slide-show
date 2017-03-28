window.onload = function () { 
"use strict";

//create div element with ID container
var div = document.createElement('div');
div.style.width = '500px';
div.style.height = '313px';
div.style.border = '1px solid black';
//div.style.overflow = 'hidden';  
div.id = 'imgBox'; 

//make imgBox div a child of container
document.getElementById("container").appendChild(div);

//create array with number of images
var imgs = [1, 2, 3, 4, 5];

//create div element with ID imgContainer to go around images
var imgContainer = document.createElement('div');
imgContainer.id = 'imgContainer';
//make imgContainer a child element of imgBox
document.getElementById("imgBox").appendChild(imgContainer);

var i;
for (i=1; i<=imgs.length; i++) { 
  //create image element and store in imgPath variable
  var imgPath = "<img src=" + "img/" + i + ".jpg />";
  //call div ID imgContainer and store in picBox variable
  var picBox = document.getElementById("imgContainer");
  //add image element stored in imgPath as child element of div with ID imgBox
  picBox.innerHTML += imgPath;
  
}




}; //window.onload end