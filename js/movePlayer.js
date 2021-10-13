var pathToGo = []

function movePlayerTo(x, y, next = false) {
    if (player.room[y][x] == 0 || pathToGo.length > 0) return
    if (typeof(player.room[y][x]) != "number") {
        
    }
    var delay = 80;
    var i = 0;
    pathToGo = pathFind(player.room, player.posOnRoom, [x, y], [1]);
    if (next && pathToGo.length == 0) {
        movePlayer(next[0], next[1])
    } else if (next) {
        pathToGo.push([pathToGo[pathToGo.length - 1][0] + next[0], pathToGo[pathToGo.length - 1][1] + next[1]])
    }
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
    return
}

function changeRoom(cas) {
    switch (cas) {
        case 'L':
            movePlayerTo(0, player.posOnRoom[1], [-1, 0]);
            break;
        case 'U':
            movePlayerTo(player.posOnRoom[0], 0, [0, -1]);
            break;
        case 'D':
            movePlayerTo(player.posOnRoom[0], player.room.length - 1, [0, 1]);
            break;
        case 'R':
            movePlayerTo(player.room.length - 1, player.posOnRoom[1], [1, 0]);
            break;

        default:
            break;
    }
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