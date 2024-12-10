const divWinContView = document.querySelector("div");

function setBackCol(){
    if (window.innerWidth > 1024) {
        divWinContView.style.background = "red";
    } else if (window.innerWidth > 600 &&   window.innerWidth <= 1024) {
        divWinContView.style.background = "blue";
    } else if (window.innerWidth <= 600) {
        divWinContView.style.background = "green";
    }
}
    
window.addEventListener("resize", setBackCol);
setBackCol();