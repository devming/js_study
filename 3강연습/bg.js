const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//     console.log("finished image load")
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/background0${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener('loadend', handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

function init() {
    const randomNumber = genRandom();

    paintImage(randomNumber);

}


init();