const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

const rows = 20;
const cols = 20;
const cellSize = 20; // Размер клетки
canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

// Создаём сетку
let grid = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

setInterval(() => {
    grid[Math.round(Math.random() * 20)][Math.round(Math.random() * 20)] = 1;
    drawGrid();
}, 500)
// Рисуем сетку
function drawGrid() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            ctx.fillStyle = grid[y][x] === 1 ? "black" : "white";
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            ctx.strokeStyle = "gray";
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

drawGrid();
