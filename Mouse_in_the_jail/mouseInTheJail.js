const jail = document.querySelector(".cell");
jail.addEventListener("mouseover", () => {
    jail.classList.remove("out-box");
    jail.classList.add("in-box");
});
cell.addEventListener("mouseleave", () => {
    jail.classList.remove("in-box");
    jail.classList.add("out-box");
  });