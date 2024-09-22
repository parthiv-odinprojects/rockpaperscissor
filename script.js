function getComputerChoice() {
    const max = 3;
    const cchoice = Math.floor(Math.random() * max);
    if (cchoice === 0) {
        return "rock";
    }
    if (cchoice === 1) {
        return "paper";
    }
    if (cchoice === 2) {
        return "scissor";
    }
}

function getHumanChoice() {
    const hchoice = prompt("enter one:rock,paper or scissor?");
    return hchoice;
}

let hscore = 0;
let cscore = 0;

function playround(humanchoice, computerchoice) {
    const hc = humanchoice;
    const cc = computerchoice;
    if (hc === cc) {
        console.log("neutral");
    }
    if (hc === "paper" && cc === "rock") {
        hscore = hscore + 1;
        console.log("point foe you");
    }
    if (hc === "rock" && cc === "paper") {
        cscore = cscore + 1;
        console.log("point foe computer");
    }
    if (hc === "scissor" && cc === "paper") {
        hscore = hscore + 1;
        console.log("point foe you");
    }
    if (hc === "paper" && cc === "scissor") {
        cscore = cscore + 1;
        console.log("point foe computer");
    }
    if (hc === "rock" && cc === "scissor") {
        hscore = hscore + 1;
        console.log("point foe u");
    }
    if (hc === "scissor" && cc === "rock") {
        cscore = cscore + 1;
        console.log("point foe computer");
    }
}

function playgame() {
    let round = 5;
    while (round > 0) {
        let humanchoice = getHumanChoice();
        let computerchoice = getComputerChoice();
        playround(humanchoice, computerchoice);
        round = round - 1;
    }
    console.log("your score= "+hscore);
    console.log("computer score= "+cscore);
    if(hscore>cscore){
        console.log("you win");
    }
    else{
        console.log("computer win");
    }
}

playgame();