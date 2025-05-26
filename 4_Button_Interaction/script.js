console.log("Hello world");
const btn = document.getElementById("button");
let randRgbVal = ()=>{ //This is a arrow funtion named randRgbVal
    return Math.floor(Math.random() * 256);  //Math.random generates a random num between 0 and 1 which gives a value bwtween 0 and 255, that generates a color
};

let changeColor = () => {
    let randColor =`rgb(${randRgbVal()}, ${randRgbVal()}, ${randRgbVal()})`;
    document.body.style.backgroundColor = randColor;
    console.log("Function is called...");
};

btn.addEventListener("click", changeColor);

