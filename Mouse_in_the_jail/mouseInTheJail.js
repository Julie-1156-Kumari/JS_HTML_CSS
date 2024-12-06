// Select the "real mouse" element
const jail = document.querySelector(".cell");
const mousePointer = document.querySelector('#mouse-pointer');



jail.addEventListener("mouseover", () => {
    jail.classList.remove("out-box");
    jail.classList.add("in-box");
});
jail.addEventListener("mouseleave", () => {
    jail.classList.remove("in-box");
    jail.classList.add("out-box");
});
// Update its position on mouse move
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event; // Get cursor coordinates
    mousePointer.style.left = `${clientX}px`;
    mousePointer.style.top = `${clientY}px`;
});
