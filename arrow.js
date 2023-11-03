
// function funct(val){
//     console.log("hello world",val);
// }
// const values= [1,2,3,4,5,6,7];

// values.forEach(function (val){
//     console.log("hello world ",val);
// });

// function myFunct(val){
//     console.log("hello",val)
// }
// const fn=function(val){
//     console.log("world",val)
// }
// myFunct(10)
// fn(20)

// arrow

// const funct=(a,b)=>{
//     return a+b
// }
// const val=funct(2,3)
// console.log(val)

// const funct=()=>[1,2]
// const funct=()=>({a:1,b:2})

// const val=funct()
// console.log(val)

// this keyword

// const obj={
//     a:100,
//     b:200,
//     funct:function(){
//         return this.a+this.b
//     }
// }
// console.log(obj.funct())

// const objName={
//     a:100,
//     b:200,
//     funct:()=>{
//         return this.a+this.b
//     }
// }
// console.log(objName.funct())

// const obj={
//     a:23,
//     b:34,
//     funct:function(){
//         console.log(this)
//     }
// }
// const a=obj.funct
// a.call(obj)
const obj={
    a:23,
    b:34,
    funct:()=>{
        console.log(this)
    }
}
const a=obj.funct
a()


