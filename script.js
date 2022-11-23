var options = {
  strings: ["Владислав Захаров - лучший Лид по фронту"],
  typeSpeed: 50,
  startDelay: 1000,
  loop: false,
};

var typed = new Typed("h1", options);

var lineDrawing = anime({
  targets: "#path-1",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeOutQuad",
  duration: 5000,
});

document.getElementById("restart").onclick = lineDrawing.restart;
