const canvas = document.getElementById('maze');
const ctx = canvas.getContext('2d');


const rows = 20;
const cols = 20;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

let maze = Array(rows).fill().map(()=>Array(cols).fill(1));


let start = {x:0, y: 0};
let end = {x:cols - 1, y:rows - 1};


function generateMaze(){
    maze[start.y][start.x] = 0;

    let walls = [];
    if(start.y > 0)walls.push({x: start.x, y : start.y - 1});
    if(start.x > 0)walls.push({x : start.x - 1, y :start.y});
    if(start.y < rows - 1)walls.push({x:start.x, y: start.y + 1});
    if(start.x < cols - 1)walls.push({x : start.x + 1, y : start.y});

    while(walls.length > 0){
        let randomIndex = Math.floor(Math.random() * walls.length);
        let wall = walls.splice(randomIndex, 1)[0];

        let passageCount = 0;
        if(wall.y > 0 && maze[wall.y - 1][wall.x] ===0)passageCount++;
        if(wall.y < rows - 1 && maze[wall.y + 1][wall.x] === 0) passageCount++;
        if(wall.x > 0 && maze[wall.y][wall.x - 1] === 0)passageCount++;
        if(wall.x < cols - 1 && maze[wall.y][wall.x + 1] === 0)passageCount++;

        if (passageCount === 1){
            maze[wall.y][wall.x] = 0;
            if(wall.y > 0 && maze[wall.y - 1][wall.x] === 1) walls.push({x : wall.x, y:wall.y - 1});
            if(wall.y < rows - 1  && maze[wall.y + 1][wall.x] === 1)walls.push({x :wall.x, y : wall.y + 1});
            if(wall.x > 0 && maze[wall.y][wall.x - 1] === 1) walls.push({x:wall.x - 1,y:wall.y});
            if(wall.x < cols - 1  && maze[wall.y][wall.x + 1] === 1)walls.push({x: wall.x + 1, y:wall.y});

        }


    }


}

const borderColor = '#100c0c';
const fillColor = '#f0f0f0';
function drawGrid() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * cellWidth;
            const y = row * cellHeight;

            if (row === start.y && col === start.x) {
                ctx.fillStyle = "green";
            } else if (row === end.y && col === end.x) {
                ctx.fillStyle = "red";
            } else {
                ctx.fillStyle = maze[row][col] === 0 ? "white" : "black";
            }
            ctx.fillRect(x, y, cellWidth, cellHeight);

            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellWidth, cellHeight);


        }
    }

}

function regenerateMaze(){
    maze = Array(rows).fill().map(()=>Array(cols).fill(1));
    generateMaze();
    randomizeStartEnd();
    drawGrid();
}

regenerateMaze();

function getRandomCell() {
    let cell;
    do {
        cell = {
            x: Math.floor(Math.random() * cols),
            y: Math.floor(Math.random() * rows)
        };
    } while (maze[cell.y][cell.x] === 1);
    return cell;
}

function randomizeStartEnd() {
    start = getRandomCell();
    end = getRandomCell();

    while (start.x === end.x && start.y === end.y) {
        end = getRandomCell();
    }
}
document.getElementById('generateLabirint').addEventListener('click', regenerateMaze);
document.getElementById('randomizePoints').addEventListener('click', function() {
    randomizeStartEnd();
    drawGrid();
});