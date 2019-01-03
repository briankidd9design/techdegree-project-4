/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 * Programmed By Brian Kidd*/
class Game {
	constructor() {
		this.missed = 0;
		//this.phrases = [];
		this.phrases = this.createPhrases();
		this.activePhrase = null;
		this.randomPhrase = this.getRandomPhrase();
	}
	/** * Creates phrases for use in game 
	 * @return {array} An array of phrases that could be used in the game
	 */
	createPhrases() {
		let phrases = [{
			phrase: "a bird in the hand is worth two in the bush",
		}, {
			phrase: "six of one half a dozen of the other",
		}, {
			phrase: "no good deed goes unpunished",
		}, {
			phrase: "all publicity is good publicity",
		}, {
			phrase: "failing to plan is planning to fail",
		}];
		return phrases;
	}
	/** 
	* Selects random phrase from phrases property 
	* @return {Object} Phrase object chosen to be used 
	*/
	getRandomPhrase() {
		// document.getElementById('phrase').innerHTML = "testing getRandomPhrase()";
		let randomPhrase = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomPhrase];
	}
	startGame() {
		let displayedPhrase = this.getRandomPhrase();
		this.activePhrase = new Phrase(displayedPhrase);
		this.activePhrase.addPhraseToDisplay();
		//this.style.display = "none";
		document.getElementById("btn__reset").style.display = "none";
		document.getElementById("overlay").style.display = "none";
		console.log("Start Game Button Clicked");
	
	}
}