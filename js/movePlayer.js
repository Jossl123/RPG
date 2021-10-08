async function movePlayerTo(x, y) {
    pathToGo = pathFind(player.room, player.posOnRoom, [x, y], [1])
    var tmp = player.posOnRoom
    var moveX = pos[0] - tmp[0]
    var moveY = pos[1] - tmp[1]
        // for (let i = 0; i < pathToGo.length; i++) {
        //     var pos = pathToGo[i]
        //     var moveX = pos[0] - tmp[0]
        //     var moveY = pos[1] - tmp[1]
        //     movePlayer(moveX, moveY)
        //     tmp = pos
        // }
}

function movePlayer(x, y, path) {
    if (x == 1) {
        player.right()
    } else if (x == -1) {
        player.left()
    } else if (y == 1) {
        player.down()
    } else if (y == -1) {
        player.up()
    }
    var pos = [x, y]
    var x = path[0][0] - pos[0]
    var y = path[0][1] - pos[1]
    drawPlayer(player)
    path.shift()
    movePlayer(x, y, path)
}

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
}