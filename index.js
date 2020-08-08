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
    document.getElementById("startgame").disabled = true;
    var startprompt = document.createElement("p");
    startprompt.innerHTML = "You are a worker for Greedy Ltd, the world's largest, and now only, manufacturer of intelligent robots. These robots seem to have taken over the world, making sure people don't have to do anything. Only problem with that is that now people don't have any jobs. You're actually one of the lucky few who got a job with Greedy Ltd. So yeah, things aren't going great. That is until one day, when you hear that the owner of Greedy Ltd has died, without an heir. The company will be passed onto another important person in the company. Unless you can get the code to control and shut down all the robots and save the world. Only problem is that you'll need to do it before the robots, controlled by Greedy Ltd's CTO, get the code. Good luck!";
    startprompt.style.width = "98vw";
    startprompt.style.position = "absolute";
    startprompt.id = "startprompt";
    var quest = document.createElement("p");
    quest.innerHTML = "You're packing your stuff at your desk when the idea to get the code just comes to you. But there's not really much you can do. At least right now. The only places you can go are the hallway to management, the hallway outside, and the washroom. Where do you want to go?<br><br>";
    quest.style.width = "98vw";
    quest.style.position = "absolute";
    quest.id = "quest";
    var startpromptlabel = document.createElement("label");
    startpromptlabel.htmlFor = "startresponse";
    startpromptlabel.innerHTML = "What do you want to do?";
    var startpromptinp = document.createElement("input");
    startpromptinp.type = "text";
    startpromptinp.width = "98vw";
    startpromptinp.id = "startresponse";
    startpromptinp.placeholder = "Say Something...";
    startpromptlabel.appendChild(startpromptinp);
    quest.appendChild(startpromptlabel);
    startprompt.appendChild(quest);
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
        prompt2WashroomAdvOne();
    } else if (choice.toLowerCase().includes("hall")){
        if (choice.toLowerCase().includes("manage")){
            advOneHideRobots("fromhall");
        } else if (choice.toLowerCase().includes("outside")){
            advOneClimbWindow();
        }
    }
}
function prompt2WashroomAdvOne() {
    writePromptQuest("Great! You go to the washroom.","You enter the washroom hoping that inspiration for a plan to get the code strikes you at any moment. But you stand there for a solid minute, nothing coming to you. Then you hear something at the door. Knocking. They can't see you. You're supposed to be gone. So you basically only have two options: hide in a stall or climb out of the window.");
}
function checkPrompt2AdvOne(choice) {
    if (choice.toLowerCase().includes("hide") || choice.toLowerCase().includes("stall")){
        advOneHideRobots("fromwash");
    } else if (choice.toLowerCase().includes("climb") || choice.toLowerCase().includes("window")){
        advOneClimbWindow();
    }
}
function advOneHideRobots(from) {
    if (from==="fromhall"){
        writePromptQuest("Great! You go to the hallway, but there are some robots, so you hide along the wall, being sure not to move.","While you hide, you overhear the robots talking. You ignore it at first, but the word 'code' piques your interest. And you hear them say something about the code being on the computer in the owner's office. So should you go to the office? Or maybe you should go back to your desk and think before doing anything? Or maybe running away is the best idea?");
    } else if (from==="fromwash"){
        writePromptQuest("Great! You choose to hide from the robots in the stall.", "While you hide, you overhear the robots talking. You ignore it at first, but the word 'code' piques your interest. And you hear them say something about the code being on the computer in the owner's office. So should you go to the office? Or maybe you should go back to your desk and think before doing anything? Or maybe running away is the best idea?");
    }
}
function writePromptQuest(startprompttext, questtext){
    var startprompt = document.getElementById("startprompt");
    startprompt.innerHTML = startprompttext;
    startprompt.style.width = "98vw";
    startprompt.style.position = "absolute";
    var quest = document.createElement("p");
    quest.innerHTML = questtext + "<br><br>";
    quest.style.width = "98vw";
    quest.style.position = "absolute";
    var startpromptlabel = document.createElement("label");
    startpromptlabel.htmlFor = "startresponse";
    startpromptlabel.innerHTML = "What do you want to do?";
    var startpromptinp = document.createElement("input");
    startpromptinp.type = "text";
    startpromptinp.width = "98vw";
    startpromptinp.id = "startresponse";
    startpromptinp.placeholder = "Say Something...";
    startpromptlabel.appendChild(startpromptinp);
    quest.appendChild(startpromptlabel);
    startprompt.appendChild(quest);
    document.getElementById("play").appendChild(startprompt);
    const inputField = document.getElementById("startresponse");
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter"){
            var input = inputField.value;
            inputField.value = "";
            checkPrompt2AdvOne(input);
        }
    });
}
function checkPrompt3AdvOne(choice) {
    if (choice.toLowerCase().includes("office") || choice.toLowerCase().includes("owner")){
        alert("go to office away!");
    } else if (choice.toLowerCase().includes("run") || choice.toLowerCase().includes("away")){
        alert("run away!");
    } else if (choice.toLowerCase().includes("desk")){
        alert("back to desk away!");
    }
}
function advOneClimbWindow() {
    alert("climb windows away!")
}
function startAdvTwo(numplay, play1name) {
    
}
function startAdvThree(numplay, play1name) {
    
}