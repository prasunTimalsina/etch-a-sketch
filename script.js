//DOM Object
const container = document.querySelector(".container");
const inputGridSize = document.querySelector(".grid-size");
console.log(inputGridSize);
const clearButton = document.querySelector(".clear-button");
let hovered;
//variables

//Function
function getRandomInt() {
  return Math.round(Math.random() * 255);
}

//Creating Grid
function createGrid(gridSize = 16) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.style.width = `calc(100% / ${gridSize})`;
    gridElement.style.height = `calc(100% / ${gridSize})`;
    container.appendChild(gridElement);

    //creating interaction attribute of the grid elements
    gridElement.dataset.interaction = 0;
  }
}
createGrid();

//upaate Grid
function updateGrid(gridSize) {
  container.innerHTML = ""; //clear existing
  createGrid(gridSize);
}

//Grid size button
inputGridSize.addEventListener("click", () => {
  let gridSize = prompt("Enter grid size less than or equal to 100");
  if (gridSize <= 100) {
    updateGrid(gridSize);
    addMouseHoverEffect();
  } else {
    alert("You entered the value greater than 100");
  }
});

//add event listener for mouseover event
function addMouseHoverEffect() {
  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", () => {
      gridElement.classList.add("hovered");
      hovered = document.querySelectorAll(".hovered");
      let Rand1 = getRandomInt();
      let Rand2 = getRandomInt();
      let Rand3 = getRandomInt();

      ///for opacity of the grid elements
      let interactions = parseInt(gridElement.dataset.interaction) + 1;
      gridElement.dataset.interaction = interactions;
      let opacity = Math.min(1, interactions * 0.1);
      // gridElement.style.backgroundColor = `rgb(1,1,1,${opacity})`;
      // console.log(opacity);
      gridElement.style.backgroundColor = `rgb(${Rand1}, ${Rand2}, ${Rand3},${opacity})`;
    });
  });
}
console.log(hovered);
addMouseHoverEffect();
//Clearing the sketch
clearButton.addEventListener("click", () => {
  const gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((gridElement) => {
    gridElement.classList.remove("hovered");
    gridElement.style.backgroundColor = "white";

    //clearing interaction attribute from all element
    gridElement.dataset.interaction = 0;
  });
});
