let catPic = document.getElementById("cat-pic");


let onCatClick = function(event) {
    var stashePic = document.getElementById("mustache-pic");
    let x = event.clientX;
    let y = event.clientY;
    stashePic.style.top = y + "px";
    stashePic.style.left = x + "px";

};

catPic.addEventListener("click", onCatClick);








