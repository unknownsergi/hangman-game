const container = document.getElementById("app");
const wordDisplay = document.getElementById("word-display");
const letters = document.querySelectorAll(".letters");
const lifes = document.querySelector("#lifes span");

const underscores = [];
let secretWord = "JIJIJIJA";
let secretWordArr = secretWord.split("");
let loop = true;
lifeCounter = 7;
lifes.innerHTML = lifeCounter;

generateUnderscores(secretWordArr);
// Agarro el texto de la letra que he pulsado i uso la funcion writeLetter para escribir en la pantalla de muestra

function generateUnderscores(word) {
	for (let i = 0; i < word.length; i++) {
		underscores[i] = "_";
	}
	console.log(underscores);
	wordDisplay.innerHTML = underscores.join(" ");
}

function replaceUnderscores(letter) {
	for (let i = 0; i < secretWordArr.length; i++) {
		if (letter == secretWordArr[i]) {
			underscores[i] = letter;
			wordDisplay.innerHTML = underscores.join(" ");
		}
	}
}

// CHECK
function checkLetter(e) {
	let letter = e.target.innerHTML;
	if (secretWord.includes(letter)) {
		replaceUnderscores(letter);
		e.target.style.background = "green";
		// writeLetter(letter);
	} else {
		deleteLife();
		e.target.style.background = "red";
	}
}

function deleteLife() {
	if (lifeCounter == 0) {
		loop = false;
	} else {
		lifeCounter--;
		lifes.innerHTML = lifeCounter;
	}
}

container.addEventListener("click", (e) => {
	if (e.target.classList.contains("letter")) {
		checkLetter(e);
	}
});
