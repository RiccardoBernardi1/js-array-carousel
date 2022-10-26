"use strict"
// 1. Creare un array contenente le immagini
// 2. Creare un ciclo che inserisca le immagini nell'html
// 3. Nascondere tutte le immagini tranne la prima
// 4. Aggiungere funzionamento frecce per cambiare immagine
const imgArray = [`img/01.jpg`,`img/02.jpg`,`img/03.jpg`,`img/04.jpg`,`img/05.jpg`,];
console.log(imgArray);
const container=document.createElement("div");
container.classList.add("container");
document.body.append(container);
const btnUp= document.createElement("button");
btnUp.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
const btnDown= document.createElement("button");
let active =0;
btnDown.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
let items= 0;
for (let i = 0; i < imgArray.length; i++) {
    const item=document.createElement("div");
    item.classList.add("item");
    container.append(item);
    items = document.querySelectorAll(".item");
    const image=document.createElement("img");
    image.classList.add("image");
    item.append(image);
    image.src=imgArray[i];
    items[active].classList.add("show");
    btnUp.classList.add("btn","btn-up");
    btnDown.classList.add("btn","btn-down");
}
items[active].append(btnUp);
items[active].append(btnDown);
console.log(items)
btnUp.addEventListener("click",function() {
    document.querySelector(".item.show").classList.remove("show");
    if (active==0){
        active=items.length-1
    }else{
        active= active-1;
    }
    items[active].classList.add("show");
    items[active].append(btnUp);
    items[active].append(btnDown);
})
btnDown.addEventListener("click",function() {
    items[active].classList.remove("show");
    if (active==items.length-1){
        active=0;
    }else{
        active= active+1;
    }
    items[active].classList.add("show");
    items[active].append(btnUp);
    items[active].append(btnDown);
})