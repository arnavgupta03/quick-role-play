function chooseAdv() {
    window.location.assign("#choose-adv");
}
function choseAdvOne(){
    localStorage.setItem("adventure", "1");
    window.location.assign("#num-players");
}
function choseAdvTwo() {
    localStorage.setItem("adventure", "2");
    window.location.assign("#num-players");
}
function choseAdvThree() {
    localStorage.setItem("adventure", "3");
    window.location.assign("#num-players");
}
function findAdventure() {
    advChose = localStorage.getItem("adventure");
    players = localStorage.getItem("players");
    player1name = document.getElementById("player-one").value;
    if (advChose === "1"){
        startAdvOne(players, player1name);
    } else if (advChose === "2"){
        startAdvTwo(players, player1name);
    } else if (advChose === "3"){
        startAdvThree(players, player1name);
    }
}
function playersOne() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "1");
    findAdventure();
    window.location.assign("#play");
}
function playersTwo() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "2");
    findAdventure();
    window.location.assign("#play");
}
function startAdvOne(numplay, player1name) {
    if(player1name === ""){
        document.getElementById("playerprompt").innerHTML = "Welcome Adventurer! Let's begin.";
    } else if(player1name !== ""){
        document.getElementById("playerprompt").innerHTML = "Welcome " + player1name + "! Let's begin.";
    }
}
function startAdvTwo(numplay, play1name) {
    
}
function startAdvThree(numplay, play1name) {
    
}