function cb(event){
    const parent = event.target.parentElement;
    const btn1 = document.createElement("button");
    btn1.setAttribute("class", "double");
    btn1.innerText = "double";
    btn1.addEventListener("click", cb);


    const btn2 = document.createElement("button");
    btn2.setAttribute("class", "double");
    btn2.innerText = "double";
    btn2.addEventListener("click", cb);

    parent.appendChild(btn1);
    parent.appendChild(btn2);

    parent.removeChild(event.target);
}

document.querySelector(".double").addEventListener("click", cb);