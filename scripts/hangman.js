const container = document.getElementById("app");
const wordDisplay = document.getElementById("word-display");
const letters = document.querySelectorAll(".letters");

const word = [];
let secretWord = "HOLA";

function writeLetter(letter) {
	word.push(letter);
	const newWord = word.join("");
	wordDisplay.innerHTML = newWord;
}

function checkLetter(e) {
	let letter = e.target.innerHTML;
	if (secretWord.includes(letter)) {
		e.target.style.background = "green";
		writeLetter(letter);
	} else {
		e.target.style.background = "red";
	}
}

// Agarro el texto de la letra que he pulsado i uso la funcion writeLetter para escribir en la pantalla de muestra
container.addEventListener("click", (e) => {
	if (e.target.classList.contains("letter")) {
		checkLetter(e);
	}
});
