const container = document.querySelector(".container");

    function handleClick(e) {
        const color = e.target.getAttribute("class");
        container.style.background = color;
    }

container.addEventListener("click", handleClick);