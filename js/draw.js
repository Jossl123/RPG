function drawRoom(room, player) {
    for (let y = 0; y < room.length; y++) {
        for (let x = 0; x < room[y].length; x++) {
            if (room[y][x] != 0) {
                document.getElementById(`tileIso_${y}_${x}`).innerHTML = `<img class="grassIso" src="img/isometricGrassExample.png" alt="">`
            } else {
                document.getElementById(`tileIso_${y}_${x}`).innerHTML = `<img class="grassIso" src="img/isometricFloorExample.png" alt="">`
            }
        }
    }

    drawMiniMap(player)
    drawPlayer(player)
}

function drawPhTiles(room) {
    for (let i = 1; i <= room.length; i++) { //first half
        document.getElementById("gameIsoView").innerHTML += `<div style="--rowNbx: ${i}; --rowNby: ${i};" id="isoRow${i}" class="row">`
        document.getElementById("gameIsoClickable").innerHTML += `<div class="row" style="--rowNbx: ${i}; --rowNby: ${i};" id="clickableRow${i}">`
        for (let j = 1; j <= i; j++) {
            document.getElementById(`isoRow${i}`).innerHTML += `<div class="grassIso" id="tileIso_${i-j}_${j-1}"></div>`
            if (room[i - j][j - 1] != 0) {
                document.getElementById(`clickableRow${i}`).innerHTML += `<div onclick="movePlayerTo(${j-1}, ${i-j})" class="grassIso clickableCell" id="clickableCell_${i-j}_${j-1}">
                <div class="triUp"></div>
                <div class="triDown"></div></div>`
            } else {
                document.getElementById(`clickableRow${i}`).innerHTML += `<div class="grassIso" id="clickableCell_${i-j}_${j-1}"></div>`
            }
        }
    }
    for (let i = room.length - 1; i > 0; i--) { //second half
        var y = room.length - 1
        var divIndex = 2 * room.length - i
        document.getElementById("gameIsoView").innerHTML += `<div style="--rowNbx: ${i}; --rowNby: ${divIndex};" id="isoRow${divIndex}" class="row">`
        document.getElementById("gameIsoClickable").innerHTML += `<div class="row" style="--rowNbx: ${i}; --rowNby: ${divIndex};" id="clickableRow${divIndex}">`
        for (let j = room.length - i; j < room.length; j++) {
            document.getElementById(`isoRow${divIndex}`).innerHTML += `<div class="grassIso" id="tileIso_${y}_${j}"></div>`
            if (room[y][j] != 0) {
                document.getElementById(`clickableRow${divIndex}`).innerHTML += `<div onclick="movePlayerTo(${j}, ${y})" class="grassIso clickableCell" id="clickableCell_${y}_${j}">
                <div class="triUp"></div>
                <div class="triDown"></div></div>`
            } else {
                document.getElementById(`clickableRow${divIndex}`).innerHTML += `<div class="grassIso " id="clickableCell_${y}_${j}"></div>`
            }
            y--
        }
    }
}

function drawMiniMap(player) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            var cell = document.getElementById(`miniMap_${x}_${y}`)
            var posx = player.posOnWorld[0] - 1 + x
            var posy = player.posOnWorld[1] - 1 + y
            if (!(0 <= posx && posx <= player.world[player.posOnWorld[1]].length - 1) || !(0 <= posy && posy <= player.world.length - 1)) cell.style.backgroundColor = "blue"
            else if (x == 1 && y == 1) cell.style.backgroundColor = "red" //si c'est la position du joueur
            else {
                var cellValue = player.world[posy][posx]
                if (cellValue != 0) cell.style.backgroundColor = "gray"
                else cell.style.backgroundColor = "black"
            }
        }
    }
}

async function drawPlayer(player) {
    var playerDiv = document.getElementById("player")
    if (playerDiv) {
        document.getElementById("player").parentNode.removeChild(playerDiv)
    }
    document.getElementById(`tileIso_${player.posOnRoom[1]}_${player.posOnRoom[0]}`).innerHTML += `
    <img src="img/dofusPersoExample.png" class="player" id="player"></img>`
}