const body = document.querySelector("body");
const IMG_NUMBER = 10;
const image = new Image();
var imgNumber = 1; 

function handleImgLoad(){
    console.log("finished load image");
}

function plus(){
    if(imgNumber >= 10)
        imgNumber = 0;

    imgNumber+=1;
}

function paintImage(){
    plus();
    image.src = `img/MoonImg/${imgNumber}.png`;
}

// function genRandom(){
//     const number = Math.floor(Math.random()*3);
//     return number;
// }

function init(){
    // const randomNumber = genRandom();
    // paintImage(0);
    image.src = `img/MoonImg/${imgNumber}.png`;
    image.classList.add("bgImage");
    body.prepend(image);
    setInterval(paintImage, 2000);
}

init();