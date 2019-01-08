/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Programmed By Brian Kidd*/
/*creating a new instance of the Game Object*/
const game = new Game();
/*this variable stores all the buttons on the page*/
const buttons = document.querySelectorAll('button');
/*this variable stores the id of the start button to be used to start the agame*/
const startButton = document.getElementById(`btn__reset`);
//starts the game once the start button is pressed
startButton.addEventListener('click', () => game.startGame())
/*Loops through all of the buttons on the page and add a click event listener to only the buttons then passes
the event target, the button pressed, as an argument to the handleInteraction method */
for (let i = 0; i < buttons.length; i += 1) {
	let buttonPressed = buttons[i];
	buttonPressed.addEventListener('click', function(event) {
		game.handleInteraction(event.target);
	});
}
/*jquery animation for a fade in of the title class*/
$(document).ready(function() {
	$(".title").hide().fadeIn(5000);
});
/*key listender so user can enter text using the keyboard as well as the screen display*/
var chosen = [];
let keyListener = (e) => {
	//let chosen = [];
	let key;
	if (!chosen.includes(e.key)) {
		buttons.forEach(button => {
			if (button.textContent === e.key) {
				key = button;
				chosen.push(e.key);
				console.log(chosen);
			}
		});
	}
	game.handleInteraction(key);
}
document.addEventListener('keydown', keyListener);

