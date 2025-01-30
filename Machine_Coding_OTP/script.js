let inputNum = document.querySelectorAll(".input");

for (let i = 0; i < inputNum.length; i++) {
  inputNum[i].addEventListener(("keyup"), (e) => {
    try{
        if(e.key > 0 && e.key < 9){
            inputNum[i].nextElementSibling.focus()
        }else if(e.key == "Delete" || e.key == "Backspace"){
            inputNum[i].value = "";
            inputNum[i].previousElementSibling.focus();
        }else{
            inputNum[i].value = "";
        }
    }catch(e){
        console.log(err);
    }
  });
}
