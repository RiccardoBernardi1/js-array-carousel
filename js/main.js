"use strict"
// 1. Creare un array contenente le immagini
// 2. Creare un ciclo che inserisca le immagini nell'html
// 3. Nascondere tutte le immagini tranne la prima
// 4. Aggiungere funzionamento frecce per cambiare immagine
const imgArray = [`img/01.jpg`,`img/02.jpg`,`img/03.jpg`,`img/04.jpg`,`img/05.jpg`,];
console.log(imgArray);
const btnUp= document.createElement("button");
btnUp.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
const btnDown= document.createElement("button");
btnDown.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
for (let i = 0; i < imgArray.length; i++) {
    document.querySelector(".container").innerHTML='<div class="item"></div>';
    document.querySelector(".item").innerHTML='<img src="img/01.jpg" alt=""></img>';
    document.querySelector("img").src=imgArray[i];
    document.querySelector(".item").classList.toggle("show");
    document.querySelector(".item.show").appendChild(btnUp);
    document.querySelector(".item.show").appendChild(btnDown);
    btnUp.classList.add("btn","btn-up");
    btnDown.classList.add("btn","btn-down");
}