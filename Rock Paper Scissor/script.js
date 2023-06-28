let moveList = ["Rock", "Paper","Scissor"];
function startGame(){
    let statusDisplay = document.querySelector("#status-head");
    let buttons = document.querySelectorAll("button");
    let moveDisplays = document.querySelectorAll(".move-display h2");
    statusDisplay.textContent = 'Choose!!';
    for(i = 0; i < buttons.length; i++){
        buttons[i].textContent = moveList[i];
    }
    
    let r = document.querySelector("#rock-button");
    r.addEventListener("click",rok);

    function rok(){
        player = moveList[0];
        computer = moveList[randomMove()];
        moveDisplays[0].textContent = "You Played "+player;
        moveDisplays[1].textContent = "Computer played "+computer;
        statusDisplay.textContent = calcResult(player,computer);
    }
    let p = document.querySelector("#paper-button");
    p.addEventListener("click",pap);

    function pap(){
        player = moveList[1];
        computer = moveList[randomMove()];
        moveDisplays[0].textContent = "You Played "+player;
        moveDisplays[1].textContent = "Computer played "+computer;
        statusDisplay.textContent = calcResult(player,computer);
    }
    let s = document.querySelector("#scissors-button");
    s.addEventListener("click",sci);

    function sci(){
        player = moveList[2];
        computer = moveList[randomMove()];
        moveDisplays[0].textContent = "You Played "+player;
        moveDisplays[1].textContent = "Computer played "+computer;
        statusDisplay.textContent = calcResult(player,computer);
    }
}
startGame();

function calcResult(move1, move2){
    if (move1==move2){
        return "Tie"
    }
    if (move1==moveList[0] && move2 ==moveList[2]){
        return " You Win"
    }
    if (move1==moveList[1] && move2 ==moveList[0]){
        return " You Win"
    }
    if (move1==moveList[2] && move2 ==moveList[1]){
        return "You Win"
    }
    else{
        return "You Loose"
    }
}
function randomMove(){
    let random = Math.floor(Math.random() * 3);
    return random;
}
