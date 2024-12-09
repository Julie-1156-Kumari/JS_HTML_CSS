const selectAll = document.querySelector("#all");
const deleteLi = document.querySelectorAll("li button");
const ulDel = document.querySelector("ul");

for(let i=0; i<deleteLi.length; i++){
    deleteLi[i].addEventListener("click", (event) => {
        event.target.parentElement.remove();
        
    });
}

selectAll.addEventListener("click", (event) => {
    event.stopPropagation();
    if(event.target.id === "all"){
        ulDel.remove();
        
    }

    
});