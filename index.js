const title = document.querySelector("#title");
const content = document.querySelector("#ttttt");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

const seasons = {
    SUMMER: 'summer',
    WINTER: 'winter',
    SPRING: 'spring',
    AUTUMN: 'autumn'
};

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function detectWeather() {
    const season = seasons.SPRING;
    if (!season) {
        throw new Error('Season is not defined');
    }

    switch (season) {
        case season.SPRING:
            console.log(`This is warm ${season}.`);
        case seasons.SUMMER:
            console.log(`This is hot ${season}.`);
        case season.WINTER:
            console.log(`This is cold ${season}.`);
        case season.AUTUMN:
            console.log(`This is cool ${season}.`);
        default:
            console.log(`This is ${season}.`);
    }
}


function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
    content.addEventListener("click", detectWeather);

} 

init();
