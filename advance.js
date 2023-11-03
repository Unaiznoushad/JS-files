// const objname={
//     id:0,
//     name:"varun",
//     phone:54545
// }
// let player1=objname
// spread operators
// let player1={...objname}

// console.log(player1)
// player1.name="unaiz"
// console.log(player1)
// console.log(objname)

// spread operators in array

// const array1=['ramu','devan']
// const array2=['roshan','sooraj']
// // let player=array1.concat(array2)
// let player=[...array1,...array2]
// player=[...array1,array2]
// player=[...array1,...array2,'test']
// console.log(player)

// rest 

// const array=['sooraj','santhosh','mukil']
// // const [first,second,third]=array
// const [first,...rest]=array
// console.log(first)
// console.log(rest)

// const obj={id:2,name:'rahul',age:20}
// // const {id,name,age}=obj
// const{id,...rest}=obj
// console.log(id)
// console.log(rest)

//  arrow

// function myfun(){
//     console.log('running')
// }
// myfun()
// const myfun=(value)=> console.log(value+5)
// myfun(5)

// for each

// const obj=[{id:1,name:"arun"},
// {id:2,name:"kumar"},
// {id:3,name:"steve"}]
// // for(let i=0;i<obj.length;i++){
// //     console.log(obj[i])
// // }
// obj.forEach(function(value,index,array){
//     console.log(index)
// })

// map

// const array =[
//     {id:1,age:30},{id:2,age:20},{id:3,age:13}
// ]
// let myArray=[]
// for(let i=0;i<array.length;i++){
//    myArray.push(array[i])
// }
// const myArray=array.map((value)=>value.id)
// console.log(myArray)

// filter

// const array =[
//     {id:1,age:30},{id:2,age:20},{id:3,age:13}
// ]
// const myArray=array.filter((value)=>value.age===13)
// console.log(myArray)

// reduce

// const array=[20,45,34,12,10]
// // let total=0
// // for(let i=0;i<array.length;i++){
// //     total+=array[i]
// // }
// // console.log(total)
// const myArray=array.reduce((total,value)=>total+value,0)
// console.log(myArray)

// find

// const array =[
//     {id:1,age:30},{id:2,age:20},{id:3,age:13}
// ]
// const myArray=array.find((value)=>value.age===13)
// console.log(myArray)

// sort

// const array=[34,5,67,23,12,98]
// // array.sort()
// // console.log(array)
// const myArray=array.sort((a,b)=>b-a)
// console.log(myArray)

// flat for nested arrays

// const array=[3,45,3,2,[3,67],[47,[34,[87,46],75]]]
// console.log(array.flat(Infinity))

// chaining

// const obj={id:1,name:"arun",company:{comp_name:"google"}}
// // if(obj.company&&obj.company.comp_name){
//     // console.log(obj.company.comp_name)
// // }
    
//     if(obj.company?.comp_name){
//         console.log(obj.company.comp_name)
//     }

// chaining all together

const array=[34,5,67,23,12,98]
const myArray=array.map((value)=>value)
.filter((value)=>value>12)
.sort((a,b)=>a-b)
.reduce((total,value)=>total+value,0)
console.log(myArray)