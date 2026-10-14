let usersc=0;
let compsc=0;

const game=document.querySelectorAll(".game");
const msg=document.querySelector("#msg");

const user=document.querySelector("#user");
const comp=document.querySelector("#comp");


const genComp = ()=>{
    const opt=["paper","rock","scissors"];
    const randidx =Math.floor(Math.random()*3);
    return opt[randidx];
};

const draw=()=>{
    msg.innerText="Game was Draw. Play again..";
    msg.style.backgroundcolor ="#081b31";
}
const showWinner = (userWin, usercho, compcho) => {
  if (userWin) {
    usersc++;
    user.innerText = usersc;
    msg.innerText = `You win! Your ${usercho} beats ${compcho}`;
    msg.style.backgroundColor = "green";
  } else {
    compsc++;
    comp.innerText = compsc;
    msg.innerText = `You lost. ${compcho} beats your ${usercho}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame =(usercho) =>{
    const compcho=genComp();
    if(compcho===usercho){
        draw();
    }else{
        let userWin=true;
        if(usercho==="rock"){
            userWin = compcho !== "paper" ? true : false;
        }else if(usercho==="paper"){
            userWin = compcho !== "scissors" ? true : false;
        }else{
            userWin = compcho !== "rock" ? true : false;
        }
        showWinner(userWin, usercho, compcho);
    }
};

game.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const usercho = choice.getAttribute("id");
        playGame(usercho);
    });
});