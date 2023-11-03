// function movieTicket(){
   
   
//     let inputData={
//        total:
//         ticketCount:
//     }
//     if(age<12){
//         discount=(inputData['total']-inputData['total']*10/100)
    
//        }
// }
const inputData=[
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:13,
    seatLocation:"MIDDLE"
},
{
    age:11,
    seatLocation:"MIDDLE"
},
{
    age:11,
    seatLocation:"MIDDLE"
},
{
    age:11,
    seatLocation:"MIDDLE"
}




]

// ticket price without discount
function initialPrice(seatLocation){
switch(seatLocation){
    case "FRONT":
            return 100
    case "MIDDLE":
            return 200
    case "BACK":
            return 150
}
}
console.log(initialPrice("BACK"))


function priceBeforeDiscount(initialPrice){
let price=0
for(let i=0;i<inputData.length;i++){
    const seatLocation_=inputData[i].seatLocation
    const basePrice_= initialPrice(seatLocation_)
    price+=basePrice_

}
return price

}

function priceWithFreeTicketCalc(initialPrice){
    let totalTicketRateOfFreeTicket=0
    for(let i=3;i<inputData.length;i+=4){
    if(inputData[i]){
     const price_=  initialPrice(inputData[i].seatLocation)
     inputData[i].isFree=true
     totalTicketRateOfFreeTicket+=price_
    }
    }
    for(let i=0;i<inputData.length;i++){
        if(!inputData[i].isFree){
            inputData[i].isFree=false
        }
    }
    return totalTicketRateOfFreeTicket
    }
    
function discountOfChildCalc(initialPrice){
 let  totalDiscountOfChild=0
for(let i=0;i<inputData.length;i++){
    if(inputData[i].age<12 && inputData[i].isFree===false){
        // console.log(inputData[i])
        const discountOfSingleChild=(initialPrice(inputData[i].seatLocation)*10/100)   
        totalDiscountOfChild+=discountOfSingleChild
    }
}
return totalDiscountOfChild

}
// return discountOfChild









function countOfTicket(){
let ticketCount =0
for(let i=0;i<inputData.length;i++){
    if(inputData[i]){
        ticketCount+=1
    }
}
return ticketCount
}

// console.log(ticketCount)
function tickFree(){
let freeTickets=0
for(let i=3;i<inputData.length;i+=4){
if (inputData[i]){
   freeTickets+=1
}

}
return freeTickets
}
function payableAmount(){
const totAmount=((priceBeforeDiscount(initialPrice))-(priceWithFreeTicketCalc(initialPrice))-(discountOfChildCalc(initialPrice)))
return totAmount
}
console.log(payableAmount())



    














