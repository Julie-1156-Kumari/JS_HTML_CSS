const counter = document.getElementById("number");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");

const addSubByValue = document.getElementById("increment");

addBtn.addEventListener("click", function () {
    const currentValue = Number(counter.textContent);
    let newValue = currentValue + Number(addSubByValue.value);
    counter.textContent = newValue;
});

subtractBtn.addEventListener("click", function() {
    const currentValue = Number(counter.textContent);
    let newValue = currentValue - Number(addSubByValue.value);
    if(newValue < 0){
        counter.textContent = 0;
    }else{
        counter.textContent = newValue;
    }
});

resetBtn.addEventListener("click", function(){
    counter.textContent = 0;
    addSubByValue.value = 1;
});