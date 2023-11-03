// function main(){
//     console.log("hello")
// }

// const hai=document.querySelector("#hai")
// const btn=document.querySelector("#btn")
// // btn.addEventListener("click",function(){
// //     hai.innerText="helloo"
// // })
// // btn.addEventListener("click",main())
// btn.addEventListener("click",main)

// function main(){
//     // hai.innerText="helloo"
//     console.log("helloooo")
// }

// event listener in button for creating list

const listItem=document.querySelector("#list")
const cls=listItem.children
const btn=document.querySelector("#btn")
btn.addEventListener("click",function(){
    const newItem = document.createElement("li")
    newItem.classList.add("cls")
    newItem.innerText="item2"
    listItem.appendChild(newItem)

})