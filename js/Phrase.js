/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Programmed By Brian Kidd*/
  class Phrase{
	 
	
	 constructor(phrase){
		 
		 this.phrase = phrase.toLowerCase();
		 //this.addPhrase = this.addPhraseToDisplay();
	 }
	 
	 
		   addPhraseToDisplay() {
			 //getElementById("phrase").innerHTML = game.getRandomPhrase();
				let newPhrase = document.getElementById("phrase").getElementsByTagName('ul')[0];
				
				let myNewListItem = document.createElement('li');
				myNewListItem.style.listStyleType = "none";
				myNewListItem.style.display = "inline";
				myNewListItem.textContent = this.phrase;

				newPhrase.appendChild(myNewListItem);
				
				for (let i = 0; i < this.phrase.length; i+=1){
					let phraseLetter = this.phrase.charAt(i);
					console.log(phraseLetter);
					
				}
				
		 };  
		 
		/** 
		* Display phrase on game board 
		*/ 
		//this.addPhraseToDisplay();
	 
 }