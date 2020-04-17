

//For loop for event handler on clicking drum buttons
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //return audio
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); //changes function makesound(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {//as above changes to (buttonInnerHTML) when button pressed
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    default: console.log(buttoninnerHTML);

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey)// 1, Active button found by key that got presses

  activeButton.classList.add("pressed");//2, added the pressed class to give style and transparency (in styles.css)

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);//3, after wait of 1 second removed class to return to original.
}
