const ball = document.getElementById("ball");
let ballState = "1";

ball.addEventListener("click", ()=>{
    ball.className = "themeSelector--ball";
    console.log(ballState)
    ballState==="1"?(ball.classList.add("middle"), ballState = "2"):(ballState==="2")?(ball.classList.add("rightward"), ballState = "3"):(ball.classList.add("leftward"), ballState = "1");
})

let face = document.getElementById("face");
let value = "";
let display = "";
let current = "";
let sign = null;
let numLock = false;
let intial = true;

Array.from(document.getElementsByClassName("key")).forEach((i)=>{
    i.addEventListener("click",(e)=>{
        handleInput(e.target.innerText);
    })
})

function handleInput(a){
    switch(a){
        case "+":
            value = +value + +current;
            intial?current = "":current = value;
            sign = "+";
            break;

        case "=":
            sign==="+"?value = +value + +current:value = value;
            current = value;
            render();
            break;

        case "DEL":
            current = [...current].splice(0,current.length-1).join("");
            render();
            break;

        default:
            current+=a;
            render();
            break;

    }
}

function render(){
    display = current;
    face.innerText = display;
}
