/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Programmed By Brian Kidd*/
class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
		//this.addPhrase = phrase.addPhraseToDisplay();
	}
	/** 
	 * Display phrase on game board 
	 */
	 addPhraseToDisplay() {
		let newPhrase = document.getElementById("phrase").getElementsByTagName('ul')[0];
		for(let i = 0; i < this.phrase.length; i +=1){
			let myNewListItem = document.createElement('li');
			let letter = this.phrase[i];
			console.log("letter" + letter);
			if (letter === ' '){
				myNewListItem.className = `space`;
			}else{
				myNewListItem.className = `hide letter ${letter}`;
			}
			myNewListItem.textContent = letter;
					
			newPhrase.appendChild(myNewListItem);
			console.log(" Test: This is the phrase " + this.phrase);
		}
			
	}

}

