// Översätter bildnamn till bilnamn
const carImages = {
  "img-1.png": "Volvo",
  "img-2.png": "Tesla",
  "img-3.png": "Volkswagen",
  "img-4.png": "Nissan",
};

// Taggarna output-text och output-container återfinns i HTML-filen
let outputContainer = document.getElementById("text-output-container");
let outputText = document.getElementById("output-text");
let carImage = document.getElementById("image-output-container");
let title = (document.title = "JavaScript FTW!");
let btn1 = document.getElementById("button-1");
let btn2 = document.getElementById("button-2");
let btn3 = document.getElementById("button-3");
let btn4 = document.getElementById("button-4");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let TextContainer = document.getElementById("text-output-container");

// Man kan t ex ställa färgen på ett område
outputContainer.style.backgroundColor = "None";

// Informationstext i den vänstra rutan
let infoText = "Possible cars:<br><br>";
let brandArray = ["Volvo", "Tesla", "Volkswagen", "Nissan"];

for (let i = 0; i < brandArray.length; i++) {
  infoText += `Car #${i + 1}: ${brandArray[i]}` + "<br>";
}

infoText += "<br>Click in the box to draw a random car!";

// Här sker själva textutmatningen
outputContainer.innerHTML = infoText;

// Knappraden
btn1.textContent = "Car #1";
btn2.textContent = "Car #2";
btn3.textContent = "Car #3";
btn4.textContent = "Car #4";

// Funktion som slumpar fram en ny bild
function newCar() {
  // Slumpar fram en bil (ett tal mellan 1 och 3)
  let randomNumber = Math.floor(Math.random() * brandArray.length);
  // Skapar bildnamnet
  let currentImage = `img-${randomNumber + 1}.png`;
  console.log(currentImage);

  // Visar bild och text
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}

// Lägger till en EventListener till outputContainer
outputContainer.addEventListener("click", newCar);

document.getElementById("header-text").innerHTML = "JavaScript Rocks!";

document.getElementById("header-text").style.color = 'red';

let volvoBild = 'img-1.png'
let teslaBild = 'img-2.png'
let volkBil = 'img-3.png'
let nisBil = 'img-4.png'

let volvoText = "<br>Swedish Car"
let teslatext = "<br>USA Car"
let volkText = "<br>German Car"
let nisText = "<br>Japan Car"

button1.addEventListener("click", () => {
  console.log("Hi")
  carImage.innerHTML = `<img src="./images/${volvoBild}" />`;
  carImage.innerHTML += `<p>${carImages[volvoBild]}</p>`;
  TextContainer.innerHTML += volvoText;
})

button2.addEventListener("click", () => {
  carImage.innerHTML = `<img src="./images/${teslaBild}" />`;
  carImage.innerHTML += `<p>${carImages[teslaBild]}</p>`;
  outputContainer.innerHTML = teslatext;
})

button3.addEventListener("click", () => {
  carImage.innerHTML = `<img src="./images/${volkBil}" />`;
  carImage.innerHTML += `<p>${carImages[volkBil]}</p>`;
  outputContainer.innerHTML = volkText;
})

button4.addEventListener("click", () => {
  carImage.innerHTML = `<img src="./images/${nisBil}" />`;
  carImage.innerHTML += `<p>${carImages[nisBil]}</p>`;
  outputContainer.innerHTML = nisText;
})