const palleteContainer = document.getElementById("pallete-container");
const colorRange = document.getElementById("color-range");
const colorValue = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const PALLETE_SIZE = 5;

// Añadir la cantidad de paletas
const createPallete = () => {
  palleteContainer.innerHTML = "";
  for (let i = 0; i < PALLETE_SIZE; i++) {
    const palleteElement = document.createElement("div");
    palleteElement.classList.add("pallete-item");
    palleteContainer.appendChild(palleteElement);
  }
  updatePallete();
};

// Nombramos y damos color a cada item
const colorize = (element) => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomElement =
      colorValue[Math.floor(Math.random() * colorValue.length)];
    color += randomElement;
  }
  element.style.backgroundColor = color;
  element.innerHTML = `<span class="color-hex">${color}<span>`;
};

// Obtenemos nuevos colores
const updatePallete = () => {
  for (let i = 0; i < palleteContainer.children.length; i++) {
    colorize(palleteContainer.children[i]);
  }
};

createPallete();
