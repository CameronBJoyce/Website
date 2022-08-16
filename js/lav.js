const gradient = document.querySelector(".gradient");

function onMouseMove(event) {
  gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(140,140,232,.9) 0, #E6E6FA 70%)';
}
document.addEventListener("mousemove", onMouseMove);