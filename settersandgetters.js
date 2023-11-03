class main{
    constructor(name){
        this.main=document.createElement("button")
        this.main.innerHTML=name
        document.body.appendChild(this.main)
    }
    
    // setWidth(width){
    //     this.main.style.width=width + 'px'
    // }
    // setHeight(height){
    //     this.main.style.height=height+'px'
    // }

    set width(width){
        this.main.style.width=width + 'px'

    }
    set height(height){
        this.main.style.height=height+'px'
    }
    get width (){
        return this.main.style.width
    }
    get height(){
        return  this.main.style.height
    }

}
var button=new main('click me')
// button.setWidth(100)
// button.setHeight(100)
button.width=100
button.height=100
console.log(button.width,button.height)