var notWall = [1]

function findAdjacentCell(grid, pos, notWall) {
    var finalList = []
    if (pos[1] + 1 < grid.lenght && notWall.includes(grid[pos[1] + 1][pos[0]])) { //y + 1
        finalList.push([pos[1] + 1, pos[0]])
    }
    if (pos[1] - 1 >= 0 && notWall.includes(grid[pos[1] - 1][pos[0]])) { //y - 1
        finalList.push([pos[1] - 1, pos[0]])
    }
    if (pos[0] + 1 < grid[pos[1]].lenght && notWall.includes(grid[pos[1]][pos[0] + 1])) { //x + 1
        finalList.push([pos[1], pos[0] + 1])
    }
    if (pos[0] - 1 >= 0 && notWall.includes(grid[pos[1]][pos[0] - 1])) { //x - 1
        finalList.push([pos[1], pos[0] - 1])
    }
    return finalList
}

function pathFind(grid, startPos, finalPos, notWall) {
    var queue = [
        [finalPos, 0]
    ]
    for (let pos of queue) {
        var adjacentCell = findAdjacentCell(grid, pos[0], notWall)
        console.log(adjacentCell)
    }
}

pathFind([
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 0],
], [1, 0], [2, 3], notWall)