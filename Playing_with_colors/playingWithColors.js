const cards = document.querySelectorAll(".card");
for(let i=0; i<cards.length; i++){
    const currColor = cards[i];
    currColor.addEventListener("dblclick", () => {
        const color = currColor.getAttribute("data-color");

        if(color != "used"){
            currColor.classList.add(color);
            currColor.setAttribute("data-color", "used");
        }
    });
}