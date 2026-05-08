const container=document.querySelector(".set");



const main=document.createElement("div");
main.classList.add("main");
// main.textContent="A";
container.appendChild(main);

const buttons_a=document.createElement("button");
buttons_a.classList.add("a_drum");
buttons_a.textContent="A";
main.appendChild(buttons_a);


const buttons_s=document.createElement("button");
buttons_s.classList.add("s_drum");
buttons_s.textContent="S";
main.appendChild(buttons_s);

const buttons_d=document.createElement("button");
buttons_d.classList.add("d_drum");
buttons_d.textContent="D";
main.appendChild(buttons_d);

const buttons_j=document.createElement("button");
buttons_j.classList.add("j_drum");
buttons_j.textContent="J";
main.appendChild(buttons_j);

const buttons_k=document.createElement("button");
buttons_k.classList.add("k_drum");
buttons_k.textContent="K";
main.appendChild(buttons_k);


const buttons_l=document.createElement("button");
buttons_l.classList.add("l_drum");
buttons_l.textContent="L";
main.appendChild(buttons_l);

const gap =document.createElement("br")
container.appendChild(gap);



const spacee=document.createElement("div");
spacee.classList.add("space");
container.appendChild(spacee);

const buttons_space=document.createElement("button");
buttons_space.classList.add("Space_drum");
buttons_space.textContent="Space";
spacee.appendChild(buttons_space);


// document.addEventListener("keydown",function(event){
// document.querySelectorAll(".main").forEach(btn =>{
//     btn.classList.remove("active");
// })
// });










