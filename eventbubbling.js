const mother=document.querySelector("#mother")
const child=document.querySelector(".child")
// mother.addEventListener("click",function(){
//     console.log("mother clicked")
// })
// child.addEventListener("click",function(){
//     console.log("child clicked")
// })

child.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("child clicked")
})