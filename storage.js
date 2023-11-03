// localStorage.setItem("name","unaiz")
// localStorage.setItem("age",22)
// localStorage.clear()
// localStorage.setItem("name","unaiz")
// const names=localStorage.getItem("name")
// console.log(names)
// localStorage.clear()

// sessionStorage.setItem("name","unaiz")


const alpha=["van","devan","ashfaq","arun"]
localStorage.setItem("names",JSON.stringify(alpha))
// const beta=localStorage.getItem("names")
// console.log(beta)
const beta=JSON.parse(localStorage.getItem("names"))
console.log(beta)

