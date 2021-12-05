var img = document.createElement("img");
img.src = "worldMap.svg";

var div = document.getElementById("worldMap");
div.appendChild(img);
//block.setAttribute("style", "text-align:center");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}