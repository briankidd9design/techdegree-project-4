/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Programmed By Brian Kidd*/
 
 //const phrase = new Phrase("Life is like a box of chocolates");
// console.log (`Phrase - phrase: ${phrase.phrase}`);
const game = new Game();
//const phrase = new Phrase();
 
 game.phrases.forEach((phrase, index) => {
	 
	 console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
	 
 });
 
 document.getElementById("btn__reset").addEventListener("click", function(){
	console.log("Start Game Button Clicked"); 
	this.style.display = "none";
	document.getElementById("overlay").style.display = "none";
 });
 
 document.body.addEventListener('click', function (event){
	 if(event.target.className === "key"){
		 console.log("key pressed");
	 }
	 
 }, false);
 
 
//phrase.addPhraseToDisplay();
let randPhr = game.getRandomPhrase();
console.log(randPhr);
const phrase = new Phrase(randPhr);
phrase.addPhraseToDisplay();
// const phrase = new Phrase(randPhr);
  /* const printPhrase = (phrase) => {
	 
	  console.log(`Phrase -phrase: `, phrase.phrase );
	 document.getElementById("phrase").innerHTML = phrase.phrase; 
	 //game.getRandomPhrase().addPhraseToDisplay(); 
 };   */
 
//game.getRandomPhrase();
//document.getElementById("phrase").innerHTML = game.getRandomPhrase();
 
//printPhrase(game.getRandomPhrase() );
/* logPhrase(game.getRandomPhrase() );
logPhrase(game.getRandomPhrase() );
logPhrase(game.getRandomPhrase() );
logPhrase(game.getRandomPhrase() ); */
 
/*need to get phrase from getRandomPhrase. Then place that phrase into an unordered list*/
/*You must append the prase id with an orderelist */
/*create a class called hide letter and a class called show letter */

/*create an array of the quotes. Then split the array or split each quotes. Then make an ul of each letter and space of the quote*/
/*hide the letter unless it is chosen by the user*/
/* var phraseArray = "Nothing ventured nothing gained"];
let result = ' ';
phraseArray.split('').forEach(letter => {
	result+=letter;
});
console.log(result); */
 
/*  const key = document.getElementById('btn_reset');
 
 key.addEventListener('click', function(){
	console.log("key pressed"); 
 }); */
 
 /*key.addEventListener('click', event => {
	console.log(event.target);
	console.log("key is pressed");
	
	 
 });*/
 
 