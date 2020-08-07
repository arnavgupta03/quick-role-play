function onLoad(){
    window.location.assign("#header");
    window.history.pushState("","","index.html");
}
function chooseAdv(){
    window.location.assign("#choose-adv");
    window.history.pushState("","","index.html");
}
function choseAdvOne(){
    localStorage.setItem("adventure", "1");
    window.location.assign("#num-players");
    window.history.pushState("","","index.html");
}
function choseAdvTwo() {
    localStorage.setItem("adventure", "2");
    window.location.assign("#num-players");
    window.history.pushState("","","index.html");
}
function choseAdvThree() {
    localStorage.setItem("adventure", "3");
    window.location.assign("#num-players");
    window.history.pushState("","","index.html");
}
function playersOne() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "1");
    findAdventure();
    window.location.assign("#play");
    window.history.pushState("","","index.html");
}
function playersTwo() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "2");
    findAdventure();
    window.location.assign("#play");
    window.history.pushState("","","index.html");
}
function findAdventure() {
    var advChose = localStorage.getItem("adventure");
    var players = localStorage.getItem("players");
    var player1name = document.getElementById("player-one").value;
    if (advChose === "1"){
        startAdvOne(players, player1name);
    } else if (advChose === "2"){
        startAdvTwo(players, player1name);
    } else if (advChose === "3"){
        startAdvThree(players, player1name);
    }
}
function startAdvOne(numplay, player1name) {
    if (numplay === "1"){
        if(player1name === ""){
            document.getElementById("playerprompt").innerHTML = "Welcome Adventurer! Let's begin.<br><button id='startgame' onclick='prompt1AdvOne()'>Start Game</button>";
        } else if(player1name !== ""){
            document.getElementById("playerprompt").innerHTML = "Welcome " + player1name + "! Let's begin.<br><button id='startgame' onclick='prompt1AdvOne()'>Start Game</button>";
        } else {
            document.getElementById("playerprompt").innerHTML = "Oh no, some Dark Elf must've caused an error! Please reload page."
        }
    }
}
function prompt1AdvOne() {
    var startprompt = document.createElement("p");
    startprompt.innerHTML = "You are a worker for Greedy Ltd, the world's largest, and now only, manufacturer of intelligent robots. These robots seem to have taken over the world, making sure people don't have to do anything. Only problem with that is that now people don't have any jobs. You're actually one of the lucky few who got a job with Greedy Ltd. So yeah, things aren't going great. That is until one day, when you hear that the owner of Greedy Ltd has died, without an heir. The company will be passed onto another important person in the company. Unless you can get the code to control and shut down all the robots and save the world. Only problem is that you'll need to do it before the robots, controlled by Greedy Ltd's CTO, get the code. Good luck!";
    startprompt.style.width = "98vw";
    startprompt.style.position = "absolute";
    var firstquest = document.createElement("p");
    firstquest.innerHTML = "You're packing your stuff at your desk when the idea to get the code just comes to you. But there's not really much you can do. At least right now. The only places you can go are the hallway to management, the hallway outside, and the washroom. Where do you want to go?<br><br>";
    firstquest.style.width = "98vw";
    firstquest.style.position = "absolute";
    var startpromptlabel = document.createElement("label");
    startpromptlabel.htmlFor = "startresponse";
    startpromptlabel.innerHTML = "What do you want to do?";
    var startpromptinp = document.createElement("input");
    startpromptinp.type = "text";
    startpromptinp.width = "98vw";
    startpromptinp.id = "startresponse";
    startpromptinp.placeholder = "Say Something...";
    /*var startpromptbut = document.createElement("button");
    startpromptbut.onclick = "checkPrompt1AdvOne()";
    startpromptbut.innerHTML = "";
    startpromptinp.appendChild(startpromptbut);*/
    startpromptlabel.appendChild(startpromptinp);
    firstquest.appendChild(startpromptlabel);
    startprompt.appendChild(firstquest);
    document.getElementById("play").appendChild(startprompt);
    const inputField = document.getElementById("startresponse");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter"){
            var input = inputField.value;
            inputField.value = "";
            checkPrompt1AdvOne(input);
        }
    });
}
function checkPrompt1AdvOne(choice) {
    if (choice.toLowerCase().includes("washroom")){
        alert("included washroom");
        prompt2WashroomAdvOne();
    }
}
function prompt2WashroomAdvOne() {
    var response = document.createElement("p");
    response.innerHTML = "Great! You go to the washroom.";
    document.getElementById("play").appendChild(response);
}
function startAdvTwo(numplay, play1name) {
    
}
function startAdvThree(numplay, play1name) {
    
}