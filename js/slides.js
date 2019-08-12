var images=["images/game.jpg","images/game2.png","images/game3.jpg", "images/game4.jpg", "images/game5.jpg"];
var i=0;
function slideshow(){
    document.getElementById("slides").src=images[i];
    if(i<(images.length-1)){
        i++;
    }
    else{
        i=0;
    }
}
setInterval(slideshow, 3000)
window.onload=slideshow;