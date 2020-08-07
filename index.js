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
function playersOne() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "1");
    window.location.assign("#play");
}
function playersTwo() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "2");
    window.location.assign("#play");
}