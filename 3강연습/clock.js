const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = getTwoNumber(date.getMinutes());
    const hours = getTwoNumber(date.getHours());
    const seconds = getTwoNumber(date.getSeconds());

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function getTwoNumber(num) {
    return `${num < 10 ? `0${num}` : num}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}


init ();