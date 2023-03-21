const ball = document.getElementById("ball");
let ballState = "1";

ball.addEventListener("click", ()=>{
    ball.className = "themeSelector--ball";
    console.log(ballState)
    ballState==="1"?(ball.classList.add("middle"), ballState = "2"):(ballState==="2")?(ball.classList.add("rightward"), ballState = "3"):(ball.classList.add("leftward"), ballState = "1");
})

let face = document.getElementById("face");
let value = "";
let current = "";

console.log(Array.from(document.getElementsByClassName("key")))

Array.from(document.getElementsByClassName("key")).forEach((i)=>{
    i.addEventListener("click",(e)=>{
        handleInput(e.target.innerText);
    })
})

function handleInput(a){
    switch(a){
        case "DEL":
            value = [...value].splice(0,value.length-1).join("");
            break;

        default:
            value+=a;
            break;

    }
    
    render();
}

function render(){
    face.innerText = value;
}
