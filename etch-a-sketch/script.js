const container = document.getElementById('container');
const btn = document.querySelector("button");
    let size = 14; // 16x16 grid
    const containerSize = 500; // width and height of each box

makeGrid(size);


btn.addEventListener("click", () => {
    let input = prompt("Enter the number (less than 100) of boxes on each side: ");
    size = Number(input);
    if (size > 100) {
        input = prompt("Enter value less than 100");
    } else if (size > 0  && size < 100) {
        makeGrid(size);
    }
});

function makeGrid(size) {
    container.innerHTML = "";
    let boxSize = containerSize / size;
     for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      container.appendChild(div);
    }
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
    box.addEventListener("mouseenter", function(e) {
        e.target.style.background = "black";
    });
});
}

    
