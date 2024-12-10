const pTag = document.querySelectorAll("p");

pTag.forEach((p) => {
    p.addEventListener("click", (event) => {
      if(event.detail === 1){
        event.target.style.backgroundColor = "red";            
      }else if(event.detail === 2){
        event.target.style.backgroundColor = "green";                        
      }else if(event.detail === 3){
        event.target.style.backgroundColor = "initial";                                      
      }
    })
});