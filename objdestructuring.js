// const obj={
//     name:"unaiz",age:22,place:"kollam"
// }
// // function funct(){
// //     const name=obj.name
// //     const age=obj.age
// //     const place=obj.place
// //     console.log(name,age,place)
// // }
// function funct(){
//     const{
//         name,age,place
//     } = obj
//     console.log(name,age,place)
// }
// funct()

// rest 

// const arr=[1,2,3,4,5,6]
// function funct(){
//     const[a,b,c,d,e,f,g=false]=arr
//     // const [a,,b,...otherss]=arr
//     console.log(a,b,c,d,e,f,g)
//     // console.log(a,b,...otherss)
// }
// funct()

// const obj={
//     name:"unaiz",place:"kollam"
// }
// const obj2={
//     name:"devan",place:"alappuzha"
// }
// function funct(){
//     var {name,place}=obj
//     var {name:name1,place:place1}=obj2
//     console.log(name,place,name1,place1)
// }
// funct()

// nested destructuring

const obj={
    name:"mohan",place:"kollam",subject:{teacher:"bob"}
}
function funct(){
    var {subject:{teacher}}=obj
    console.log(teacher)
    
}
funct()
