async function movePlayerTo(x, y) {
    // pathToGo = pathFind(player.room, player.posOnRoom, [x, y], [1])
    // var tmpPos = player.posOnRoom
    // for (let i = 0; i < pathToGo.length; i++) {
    //     var moveX = pathToGo[i][0] - tmpPos[0]
    //     var moveY = pathToGo[i][1] - tmpPos[1]
    //     tmpPos = pathToGo[i]
    //     movePlayer(moveX, moveY)
    // }

    var delay = 80,
        i = 0;
    pathToGo = pathFind(player.room, player.posOnRoom, [x, y], [1])
    var tmpPos = player.posOnRoom

    function timeoutLoop() {
        var moveX = pathToGo[i][0] - tmpPos[0]
        var moveY = pathToGo[i][1] - tmpPos[1]
        tmpPos = pathToGo[i]
        movePlayer(moveX, moveY)
        if (++i < pathToGo.length)
            setTimeout(timeoutLoop, delay);
    }

    setTimeout(timeoutLoop, delay);
}

function movePlayer(x, y) {
    if (x == 1) {
        player.right()
    } else if (x == -1) {
        player.left()
    } else if (y == 1) {
        player.down()
    } else if (y == -1) {
        player.up()
    }
}

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
}