// let Tag=document.getElementsByTagName("h1")
// let button=document.getElementById("btn")
// let para=document.getElementsByClassName("dev")
// let head=document.querySelector('h1');
// let button=document.querySelector("#btn");
// let para=document.querySelectorAll('.dev');
// head.style.color= "blue" ;
// head.style.backgroundColor="black"
// para[1].innerHTML="ASHOK"
// button.innerHTML="push"
// console.log(head);

// let list=document.getElementsByClassName("para")
// let dev=document.getElementById("hello")
// list[0].innerHTML="items"
// console.log(dev)
// let list=document.querySelectorAll(".para")
// let unaiz=document.querySelector("#hello")
// let every=unaiz.childNodes
// // let every=unaiz.children
// console.log(every)
// // console.log("__________________________________")
// console.log(list) 

// creating dom elements
// const collection=document.getElementById("hello")
const collection=document.querySelector("#hello")
// const listItem=document.getElementsByClassName("para")
const listItem=collection.children
const number=document.querySelector("#number")
const newItem =document.createElement("li")
newItem.classList.add("para")
newItem.innerText="itemss"
collection.appendChild(newItem)
// console.log(collection)
number.innerText=listItem.length
const newItem1 =document.createElement("li")
newItem1.classList.add("para")
newItem1.innerText="itemss"
collection.appendChild(newItem1)
number.innerText=listItem.length
console.log(collection)


