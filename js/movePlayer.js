var pathToGo = []
var finishMove = true

async function movePlayerTo(x, y) {
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
    finishMove = true
    return
}

async function changeRoom(cas) {
    switch (cas) {
        case 'L':
            finishMove = false
            await movePlayerTo(0, player.posOnRoom[1]);
            while (!finishMove);
            movePlayer(-1, 0, "test")
            break;
        case 'U':
            await movePlayerTo(player.posOnRoom[0], 0)
            movePlayer(0, -1, "test")
            break;
        case 'D':
            await movePlayerTo(player.posOnRoom[0], player.room.length - 1)
            movePlayer(0, 1, "test")
            break;
        case 'R':
            await movePlayerTo(player.room.length - 1, player.posOnRoom[1])
            movePlayer(1, 0, "test")
            break;

        default:
            break;
    }
}


function movePlayer(x, y, t = "r") {
    console.log(t)
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