function openFunction() {
    document.getElementById("menuOpen").style.transform = "rotateY(90deg) translateX(7vw)";
    document.getElementById("menuClose").style.transform = "rotateY(0deg) translateX(0vw)";
    document.getElementById("menuClose").style.backgroundColor = "rgb(3, 58, 35)";

}

function closeFunction() {
    document.getElementById("menuOpen").style.transform = "rotateY(0deg)";
    document.getElementById("menuClose").style.transform = "rotateY(90deg) translateX(-7vw)";
    document.getElementById("menuOpen").style.backgroundColor = "rgb(5, 71, 44)";

}
