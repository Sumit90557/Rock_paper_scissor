let userscore = 0 ;
let compscore = 0 ;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    //rock , paper  , scissors
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
     
}

const drawgame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "grey";
};

const showwinner =(userwin , userchoice, compchoice)=>{
  if(userwin){
    userscore++ ;
    userscorepara.innerText = userscore;
    msg.innerText = `You win!your ${userchoice} beats ${compchoice}`;
     msg.style.backgroundColor = "green";
  }
  else{
    compscore++ ;
    compscorepara.innerText = compscore;
    msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playgame = (userchoice) =>{
   console.log("userchoice = " , userchoice);
   const compchoice = gencompchoice();
   console.log("comp choice = " , compchoice);
   if(userchoice=== compchoice){
    drawgame();
   }
   else{
    let userwin = true ;
       if(userchoice === "rock"){
        if(compchoice==="paper"){
            userwin = false ;
        }
        else{
            userwin = true ;
        }
       }
       else if(userchoice === "paper"){
        if(compchoice==="scissor"){
            userwin = false ;
            }
            else{
                userwin = true ;
                }
       }
       else{
        if(compchoice==="rock"){
            userwin = false ;
            }
            else{
                userwin = true ;
                }
       }
       showwinner(userwin , userchoice , compchoice);
   }
};


choices.forEach((choice)=>{
  
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    });
});