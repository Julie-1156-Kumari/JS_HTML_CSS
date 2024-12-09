const selectEle = document.querySelector("select");

selectEle.addEventListener("change", () => {
    const optValue = selectEle.value;
    const allMovies = document.querySelectorAll(".price");

    if(optValue === "none"){
        for(let i=0; i<allMovies.length; i++){
            allMovies[i].parentElement.style.display = "block";
        }
    }else{
        for(let i=0; i<allMovies.length; i++){
            if(allMovies[i].getAttribute("data-category") === optValue){
                allMovies[i].parentElement.style.display = "block";
            }else{
                allMovies[i].parentElement.style.display = "none";
            }
        }
    }
});