let pathToGo = []

function movePlayerTo(x, y) {
    if (player.room[y][x] == 0 || pathToGo.length > 0) return
    var delay = 80;
    var i = 0;
    pathToGo = pathFind(player.room, player.posOnRoom, [x, y], [1]);
    if (pathToGo.length == 0) return
    var tmpPos = player.posOnRoom;

    function timeoutLoop() {
        var moveX = pathToGo[i][0] - tmpPos[0]
        var moveY = pathToGo[i][1] - tmpPos[1]
        tmpPos = pathToGo[i]
        movePlayer(moveX, moveY)
        if (++i < pathToGo.length) setTimeout(timeoutLoop, delay);
        if (i == pathToGo.length) {
            pathToGo = []
        }
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