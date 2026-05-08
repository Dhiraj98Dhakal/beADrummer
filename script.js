// const container=document.querySelector(".set");



// const main=document.createElement("div");
// main.classList.add("main");
// // main.textContent="A";
// container.appendChild(main);

// const buttons_a=document.createElement("button");
// buttons_a.classList.add("a_drum");
// buttons_a.textContent="A";
// main.appendChild(buttons_a);


// const buttons_s=document.createElement("button");
// buttons_s.classList.add("s_drum");
// buttons_s.textContent="S";
// main.appendChild(buttons_s);

// const buttons_d=document.createElement("button");
// buttons_d.classList.add("d_drum");
// buttons_d.textContent="D";
// main.appendChild(buttons_d);

// const buttons_j=document.createElement("button");
// buttons_j.classList.add("j_drum");
// buttons_j.textContent="J";
// main.appendChild(buttons_j);

// const buttons_k=document.createElement("button");
// buttons_k.classList.add("k_drum");
// buttons_k.textContent="K";
// main.appendChild(buttons_k);


// const buttons_l=document.createElement("button");
// buttons_l.classList.add("l_drum");
// buttons_l.textContent="L";
// main.appendChild(buttons_l);

// const gap =document.createElement("br")
// container.appendChild(gap);



// const spacee=document.createElement("div");
// spacee.classList.add("space");
// container.appendChild(spacee);




// document.addEventListener("keydown",function(event){
// document.querySelectorAll(".main").forEach(btn =>{
//     btn.classList.remove("active");
// })
// });



const container = document.querySelector(".set");

const main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);

const letters = ["a", "s", "d", "j", "k", "l"];

for (let i = 0; i < letters.length; i++) {
    const button = document.createElement("button");
    button.classList.add(letters[i], "drum");
    button.textContent = letters[i].toUpperCase();
    main.appendChild(button);

}


const buttons_space=document.createElement("button");
buttons_space.classList.add("Space_drum");
buttons_space.textContent="Space";
container.appendChild(buttons_space);

var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++)
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    hitIt(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

document.addEventListener("keypress", function (event) {
  hitIt(event.key);
  buttonAnimation(event.key);
});

function hitIt(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case " ":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton;

  if (currentKey === " ")
    activeButton = document.querySelector('.space');
  else 
    activeButton = document.querySelector("." + currentKey); 
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}





