function startAdvOne(){
    localStorage.clear();
    localStorage.setItem("adv", "1");
}
function startAdvTwo() {
    localStorage.clear();
    localStorage.setItem("adv", "2");
}
function startAdvThree() {
    localStorage.clear();
    localStorage.setItem("adv", "3");
}
function playersOne() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "1");
}
function playersTwo() {
    localStorage.removeItem("players");
    localStorage.setItem("players", "2");
}