const container = document.querySelector("#Container");

const createDiv = (numbDiv) => {
  for (let i = 1; i <= numbDiv; i++) {
    const div = document.createElement("div");
    div.classList.add("sqr");
    container.append(div);
  }
};

createDiv(16);

const sqr = document.querySelectorAll(".sqr");

//por cada cuadro, cuando pasa el mouse, cambia el color
sqr.forEach((sqr) => {
  sqr.addEventListener("mouseover", () => {
    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    sqr.style.backgroundColor = getRandomColor();
  });
});
