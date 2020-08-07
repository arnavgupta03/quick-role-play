function chooseAdv() {
    window.location.assign("#choose-adv");
}
function startAdvOne(){
    localStorage.clear();
    localStorage.setItem("adv", "1");
    window.location.assign("#num-players");
}
function startAdvTwo() {
    localStorage.clear();
    localStorage.setItem("adv", "2");
    window.location.assign("#num-players");
}
function startAdvThree() {
    localStorage.clear();
    localStorage.setItem("adv", "3");
    window.location.assign("#num-players");
}
function findAdventure() {
    advChose = localStorage.getItem("adv");
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
function startAdvOne(numplay, play1name) {
    
}
function startAdvTwo(numplay, play1name) {
    
}
function startAdvThree(numplay, play1name) {
    
}