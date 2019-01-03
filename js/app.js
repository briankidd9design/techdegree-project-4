/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Programmed By Brian Kidd*/
//const phrase = new Phrase("Life is like a box of chocolates");
// console.log (`Phrase - phrase: ${phrase.phrase}`);
const game = new Game();
//const phrase = new Phrase();
const startButton = document.getElementById(`btn__reset`);
startButton.addEventListener('click', () => game.startGame())


game.phrases.forEach((phrase, index) => {
	console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
/*document.getElementById("btn__reset").addEventListener("click", function() {
	console.log("Start Game Button Clicked");
	this.style.display = "none";
	document.getElementById("overlay").style.display = "none";
});*/
document.body.addEventListener('click', function(event) {
	if (event.target.className === "key") {
		console.log("key pressed");
	}
}, false);

const printPhrase = (phrase) => {
	console.log(`Phrase -phrase: `, phrase.phrase);
	//console.log(`Phrase -addPhrase `, phrase.addPhrase );
	// document.getElementById("phrase").innerHTML = phrase.phrase; 
	//document.getElementById("phrase").innerHTML = phrase.addPhrase; 
	//game.getRandomPhrase().addPhraseToDisplay(); 
};

printPhrase(game.getRandomPhrase());
