let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".win");

const userscorepara=document.querySelector("#you");
const compscorepara=document.querySelector("#computer");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randint=Math.floor(Math.random() * 3);
    return options[randint];
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

const drawgame=()=>{
    msg.innerText="GAME WAS DRAW, PLAY AGAIN.";
    msg.style.backgroundColor="#0f093a";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        msg.innerText=`HURRAH!. YOU WON!. your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compscore++;
        compscorepara.innerText= compscore;
        msg.innerText=`YOU LOSE!, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        
    }
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();

    if(userchoice===compchoice){
        drawgame();
    }else {
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false : true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors" ? false : true;
        }else{
            userwin=compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}