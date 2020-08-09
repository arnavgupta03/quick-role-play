function onLoad(){
    window.location.assign("#header");
    window.history.pushState("","","index.html");
    localStorage.clear();
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

function writePromptQuest(startprompttext, questtext, promptnum){
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
            if (promptnum === "2"){
                checkPrompt2AdvOne(input);
            } else if (promptnum === "3"){
                checkPrompt3AdvOne(input);
            } else if (promptnum === "4"){
                checkPrompt4AdvOne(input);
            } else if (promptnum === "5"){
                checkPrompt5AdvOne(input);
            } else if (promptnum === "6"){
                checkPrompt6AdvOne(input);
            } else if (promptnum === "8"){
                checkPrompt8AdvOne(input);
            }
        }
    });
}

function writePromptFight(startprompttext, questtext, promptnum) {
    var startprompt = document.getElementById("startprompt");
    startprompt.innerHTML = startprompttext;
    startprompt.style.width = "98vw";
    startprompt.style.position = "absolute";
    var quest = document.createElement("p");
    quest.innerHTML = questtext + "<br>";
    quest.style.width = "98vw";
    quest.style.position = "absolute";
    var startpromptinp = document.createElement("p");
    startpromptinp.innerHTML = "<button onclick='rollD20()' id='startresponse'>Roll Dice (D20)</button>";
    startpromptinp.width = "98vw";
    localStorage.setItem("fightprompt", promptnum);
    quest.appendChild(startpromptinp);
    startprompt.appendChild(quest);
    document.getElementById("play").appendChild(startprompt);
}

function rollD20() {
    var diceroll = Math.floor(Math.random()*20)+1;
    var promptnum = localStorage.getItem("fightprompt");
    if (promptnum === "1"){
        localStorage.setItem("diceroll", diceroll);
        checkPrompt5AdvOne("");
    } else if (promptnum === "2"){
        localStorage.setItem("diceroll", diceroll);
        checkPrompt7AdvOne("");
    }
}

function checkPrompt1AdvOne(choice) {
    if (choice.toLowerCase().includes("washroom")){
        prompt2WashroomAdvOne();
    } else if (choice.toLowerCase().includes("hall")){
        if (choice.toLowerCase().includes("manage")){
            advOneHideRobots("fromhall");
        } else if (choice.toLowerCase().includes("outside")){
            advOneGoOut();
        }
    }
}

function prompt2WashroomAdvOne() {
    writePromptQuest("Great! You go to the washroom.","You enter the washroom hoping that inspiration for a plan to get the code strikes you at any moment. But you stand there for a solid minute, nothing coming to you. Then you hear something at the door. Knocking. They can't see you. You're supposed to be gone. So you basically only have two options: hide in a stall or climb out of the window.", "2");
}

function checkPrompt2AdvOne(choice) {
    if (choice.toLowerCase().includes("hide") || choice.toLowerCase().includes("stall")){
        advOneHideRobots("fromwash");
    } else if (choice.toLowerCase().includes("climb") || choice.toLowerCase().includes("window")){
        advOneGoOut();
    }
}

function advOneHideRobots(from) {
    if (from==="fromhall"){
        writePromptQuest("Great! You go to the hallway, but there are some robots, so you hide along the wall, being sure not to move.","While you hide, you overhear the robots talking. You ignore it at first, but the word 'code' piques your interest. And you hear them say something about the code being on the computer in the owner's office. So should you go to the office? Or maybe you should go back to your desk and think before doing anything? Or maybe running away is the best idea?", "3");
    } else if (from==="fromwash"){
        writePromptQuest("Great! You choose to hide from the robots in the stall.", "While you hide, you overhear the robots talking. You ignore it at first, but the word 'code' piques your interest. And you hear them say something about the code being on the computer in the owner's office. So should you go to the office? Or maybe you should go back to your desk and think before doing anything? Or maybe running away is the best idea?", "3");
    }
}

function advOneGoOut() {
    writePromptQuest("Great! Now you're outside.", "While outside, you see robots travelling into the building, but not from the entrance or exit that you usually go from. It's some sort of back entrance, probably the one the upper management uses. Now should you go to that entrance and see what the robots are up to? Or should you just go back inside from the main entrance and go back to your desk? Or maybe running away is the best idea?", "3");
}

function checkPrompt3AdvOne(choice) {
    if (choice.toLowerCase().includes("office") || choice.toLowerCase().includes("owner") || choice.toLowerCase().includes("entrance")){
        advOneOffice();
    } else if (choice.toLowerCase().includes("run") || choice.toLowerCase().includes("away")){
        advOneRunAway();
    } else if (choice.toLowerCase().includes("desk")){
        advOneDesk();
    }
}

function advOneOffice() {
    localStorage.setItem("prompt4", "office");
    writePromptQuest("You're there. Upper management, right outside the owner's office.", "But right outside the room, you see it. A large, huge group of robots. Guarding the door to the office. So you can't get in. What are you going to do? Maybe fight it out? Or you could always try talking to them?", "4");
}

function advOneRunAway(){
    localStorage.setItem("prompt4", "run");
    writePromptQuest("You decide to run away.", "You run out of the parking lot, trying to reach home, thinking about what else you can do. But you barely make it out of the parking lot when you encounter a group of robots. And they don't look happy. They look at little like they might want to fight you. So you could do that. Or you could talk to them, right?", "4");
}

function advOneDesk(){
    localStorage.setItem("prompt4", "desk");
    writePromptQuest("You decide to go back to your desk.", "As you go back to your desk, expecting to see your stuff as you left it, you instead are shocked when you realize it's empty. You look around for your stuff, but instead you see a robot carrying one of your things. How dare it! Now you want your stuff back. So you call out to robot. But do you talk to it or fight with it?", "4");
}

function checkPrompt4AdvOne(choice) {
    if (choice.toLowerCase().includes("fight") || choice.toLowerCase().includes("hit")){
        advOneFightOne();
    } else if (choice.toLowerCase().includes("talk") || choice.toLowerCase().includes("say")){
        advOneTalkOne();
    }
}

function advOneTalkOne() {
    from = localStorage.getItem("prompt4");
    if (from === "office"){
        writePromptQuest("As you walk up to the robots in front of the door, they all look at you.","In particular, you notice one of them really seeming to want your attention. So you talk to that one, casually saying, 'What's up? Why y'all guarding this door?' Quickly, the one you were talking to replies, 'None of your business. Continue your work.' So you're a little confused as to what you should do now. But you realize you have two real options. You could charm the robots or be rude to them. Now which one will give you the better results?","5");
    } else if (from === "run"){
        writePromptQuest("You approach the robots as they do the same towards you.", "One of them seems ready to attack you and starts moving frantically. So you say something in a panic. But you say it casually. 'What's up? Why y'all coming at me?' Quickly, the one that was about to attack replies, 'None of your business. Go back to your work.' So you're a little confused as to what you should do now. But you realize you have two real options. You could charm the robots or be rude to them. Now which one will give you the better results?", "5");
    } else if (from === "desk"){
        writePromptQuest("You walk up to the robot, ready to talk.","At first, you're confused as to what you should say. But then you realize, maybe you should be casual about it. Just say, 'What's up? Why you got my stuff?' The robot simply replied, 'None of your business. Get back to your clean-up tasks.' So you're a little confused as to what you should do now. But you realize you have two real options. You could charm the robots or be rude to them. Now which one will give you the better results?","5")
    }
}

function advOneFightOne(){
    writePromptFight("You decide to attack.","In your attack, you realize this might be harder than you initially thought. That means you'll need to roll a 12 or higher to be successful and not be defeated.","1");
}

function checkPrompt5AdvOne(choice) {
    var diceroll = localStorage.getItem("diceroll");
    if (choice.toLowerCase().includes("charm")){
        localStorage.setItem("honour", "honourable");
    } else if (choice.toLowerCase().includes("rude")){
        localStorage.setItem("honour", "dishonourable");
    } else if (diceroll < 12){
        localStorage.setItem("fight1", "unsuccessful");
        localStorage.setItem("honour", "dishonourable");
    } else if (diceroll >= 12){
        localStorage.setItem("fight1","successful");
        localStorage.setItem("honour", "honourable");
    }
    if (localStorage.getItem("honour") === "honourable"){
        if (localStorage.getItem("fight1") == null){
            if (localStorage.getItem("prompt4") === "run"){
                writePromptQuest("You were able to charm the robots into leaving you alone.","Nice job! As the robots start to walk away, you see one of the robots reach for something. Then, it talks into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go back. Go to the office. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            } else if (localStorage.getItem("prompt4") === "office"){
                writePromptQuest("You were able to charm the robots into leaving you alone.","Awesome! You enter to the office. As you enter, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.", "6");
            } else if (localStorage.getItem("prompt4") === "desk"){
                writePromptQuest("You were able to charm the robot into leaving you alone.","Great! As the robot puts your stuff down and begins to walk away, you see it reach for something. Then, it talks into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go to the office. Like right now. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            }
        } else if (localStorage.getItem("fight1") != null){
            if (localStorage.getItem("prompt4") === "run"){
                writePromptQuest("You successfully defeat the robots by rolling a " + diceroll.toString() + ".","Nice job! You got them. But as you were about to go back home, you see one of the robots moving a bit. You're about to attack it to finish it off, when you hear the robot talk into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go back. Go to the office. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            } else if (localStorage.getItem("prompt4") === "office"){
                writePromptQuest("You successfully defeat the robots by rolling a " + diceroll.toString() + ".","Awesome! You got them. You go to the office. As you enter, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.", "6");
            } else if (localStorage.getItem("prompt4") === "desk"){
                writePromptQuest("You successfully defeat the robot by rolling a " + diceroll.toString() + ".","Great! You defeated it. But as it drops to the ground, you see it moving a bit. You're about to attack it to finish it off, when you hear the robot talk into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go to the office. Like right now. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            }
        }
    } else if (localStorage.getItem("honour") === "dishonourable"){
        if (localStorage.getItem("fight1") == null){
            if (localStorage.getItem("prompt4") === "run"){
                writePromptQuest("You were able to heckle the robots into leaving you alone. But they definitely didn't like it. Their feelings were hurt.","Nice job! As the robots start to walk away, you see one of the robots reach for something. Then, it talks into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go back. Go to the office. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            } else if (localStorage.getItem("prompt4") === "office"){
                writePromptQuest("You were able to heckle the robots into leaving you alone. But they definitely didn't like it. Their feelings were hurt.","Awesome! You enter to the office. As you enter, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.", "6");
            } else if (localStorage.getItem("prompt4") === "desk"){
                writePromptQuest("You were able to heckle the robot into leaving you alone. But it definitely didn't like it. It's feelings were hurt.","Great! As the robot puts your stuff down and begins to walk away, you see it reach for something. Then, it talks into some kind of phone-like device. It says, 'Protect the office. At all costs.' You realize, you need to go to the office. Like right now. You reach the owner's office and you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            }
        } else if (localStorage.getItem("fight1") != null){
            if (localStorage.getItem("prompt4") === "run"){
                writePromptQuest("You fail to defeat the robots by rolling a " + diceroll.toString() + ".","Too bad. Your failure to defeat the robots allows them to pick you up and drag you back to the building, where they take you to the office. There, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. The robots put you down, letting you do what you want against it. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            } else if (localStorage.getItem("prompt4") === "office"){
                writePromptQuest("You fail to defeat the robots by rolling a " + diceroll.toString() + ".","That's unfortunate. Your failure to defeat the robots allows them to pick you up and drag you inside the office. There, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. The robots put you down, letting you do what you want against it. Again, there's really only two things you can think of doing: talking to it or fighting it.", "6");
            } else if (localStorage.getItem("prompt4") === "desk"){
                writePromptQuest("You fail to defeat the robots by rolling a " + diceroll.toString() + ".","Oh no! You couldn't do it. Your failure to defeat the robot allows it to drag you down the management hall, down to the office. There, you see a sight you could never imagine in your life. A huge robot. At least 20 feet tall. And it looks just like the recently deceased owner of Greedy Ltd. The robots put you down, letting you do what you want against it. Again, there's really only two things you can think of doing: talking to it or fighting it.","6");
            }
        }
    }
}

function checkPrompt6AdvOne(choice) {
    if (choice.toLowerCase().includes("fight") || choice.toLowerCase().includes("hit")){
        advOneFightHuge();
    } else if (choice.toLowerCase().includes("talk") || choice.toLowerCase().includes("say")){
        advOneTalkHuge();
    }
}

function advOneFightHuge() {
    localStorage.setItem("prompt6", "fight");
    writePromptFight("You decide to attack.","To successfully attack, you'll need to tie the huge robot's legs together with a rope in the corner. Don't worry, it sounds harder than it actually is. But it means you'll need to roll a 8 or higher to be successful and not be defeated.","2");
}

function advOneTalkHuge() {
    localStorage.setItem("prompt6", "talk");
    writePromptFight("You decide to talk.","To successfully talk and get out of the situation, you'll need to be really convincing. Don't worry, it sounds harder than it actually is. But it means you'll need to roll a 8 or higher to be successful.","2");
}

function checkPrompt7AdvOne(choice) {
    var diceroll = localStorage.getItem("diceroll");
    if (diceroll < 8){
        localStorage.setItem("fight2", "unsuccessful");
        advOneFightTwoUnsuccessful();
    } else if (diceroll >= 8){
        localStorage.setItem("fight2","successful");
        advOneFightTwoSuccessful();
    }
}

function advOneFightTwoUnsuccessful(){
    var diceroll = localStorage.getItem("diceroll");
    writePromptQuest("You were unsuccessful against the huge robot since you rolled a " + diceroll.toString() + ".", "The huge robot knocks you down and kicks down the wall behind you. In a panic, you run outside. And weirdly, again, it really only seems like you can either talk or fight with this robot.", "8");
}

function advOneFightTwoSuccessful(){
    var diceroll = localStorage.getItem("diceroll");
    writePromptQuest("You were successful against the huge robot since you rolled a " + diceroll.toString() + ".", "As the huge robot shuts down, a smaller robot comes out. You aren't sure if it'll attack you or leave you be, but to be safe, do you want to talk or fight it?", "8");
}

function checkPrompt8AdvOne(choice) {
    if (choice.toLowerCase().includes("fight") || choice.toLowerCase().includes("hit")){
        if (localStorage.getItem("fight2") === "successful"){
            advOneFightSmall();
        } else if (localStorage.getItem("fight2") === "unsuccessful"){
            advOneFightHuge2();
        }
    } else if (choice.toLowerCase().includes("talk") || choice.toLowerCase().includes("say")){
        if (localStorage.getItem("fight2") === "successful"){
            advOneTalkSmall();
        } else if (localStorage.getItem("fight2") === "unsuccessful"){
            advOneTalkHuge2();
        }
    }
}

function advOneFightSmall() {
    
}

function advOneFightHuge2() {
    
}

function advOneTalkSmall() {
    
}

function advOneTalkHuge2() {
    
}

function startAdvTwo(numplay, play1name) {
    
}

function startAdvThree(numplay, play1name) {
    
}