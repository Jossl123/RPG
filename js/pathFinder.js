var notWall = [1]

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}

function findAdjacentCell(grid, pos, notWall) {
    var finalList = []
    if (pos[1] + 1 < grid.length && notWall.includes(grid[pos[1] + 1][pos[0]])) { //y + 1
        finalList.push([pos[0], pos[1] + 1])
    }
    if (pos[1] - 1 >= 0 && notWall.includes(grid[pos[1] - 1][pos[0]])) { //y - 1
        finalList.push([pos[0], pos[1] - 1])
    }
    if (pos[0] + 1 < grid[pos[1]].length && notWall.includes(grid[pos[1]][pos[0] + 1])) { //x + 1
        finalList.push([pos[0] + 1, pos[1]])
    }
    if (pos[0] - 1 >= 0 && notWall.includes(grid[pos[1]][pos[0] - 1])) { //x - 1
        finalList.push([pos[0] - 1, pos[1]])
    }
    return finalList
}

function pathFind(grid, startPos, finalPos, notWall) {
    var queue = [
        [finalPos, 0]
    ]
    var posInQueue = [finalPos]
    console.table(grid)
    for (let i = 0; i < queue.length; i++) {
        var pos = queue[i]
        var adjacentCell = findAdjacentCell(grid, pos[0], notWall)
        adjacentCell.forEach(cell => {
            var newPos = [cell, pos[1] + 1]
            if (!posInQueue.some(a => cell.every((v, i) => v === a[i]))) {
                queue.push(newPos)
                posInQueue.push(cell)
            }
        });
    }
    var finalPath = [startPos]
    for (let i = 0; i < finalPath.length; i++) {
        var pos = finalPath[i];
        var adjacentCell = findAdjacentCell(grid, pos, notWall)
        var min = queue.length
        var minPos = []
        adjacentCell.forEach(finalCell => {
            queue.forEach(queueCell => {
                if (arraysEqual(queueCell[0], finalCell)) {
                    if (queueCell[1] < min) {
                        min = queueCell[1]
                        minPos = queueCell[0]
                    }
                }
            });
        });
        if (arraysEqual(minPos, finalPos)) i = finalPath.length
        finalPath.push(minPos)
    }
    console.log(finalPath)
}

pathFind([
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 0],
], [1, 0], [2, 3], notWall)