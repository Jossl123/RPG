function drawRoom(room, player) {
    // document.getElementById("gameIsoView").innerHTML = ''
    // for (let y = 0; y < room.length; y++) {
    //     document.getElementById("gameIsoView").innerHTML += `
    //     <div class="roomRow" id="roomRow_${y}"></div>`
    //     for (let x = 0; x < room[y].length; x++) {
    //         if (room[y][x] == 0) {
    //             document.getElementById(`roomRow_${y}`).innerHTML += `
    //             <div class="cell wall" id="cell_${y}_${x}"></div>`
    //         } else {
    //             document.getElementById(`roomRow_${y}`).innerHTML += `
    //             <div class="cell emptyCell" id="cell_${y}_${x}"></div>`
    //         }
    //     }
    // }
    // document.getElementById("gameIsoClickable").innerHTML = ''
    // for (let y = 0; y < room.length; y++) {
    //     document.getElementById("gameIsoClickable").innerHTML += `
    //     <div class="roomRow" id="roomRowC_${y}"></div>`
    //     for (let x = 0; x < room[y].length; x++) {
    //         if (room[y][x] == 0) {
    //             document.getElementById(`roomRowC_${y}`).innerHTML += `
    //             <div class="cell" id="cell_${y}_${x}"></div>`
    //         } else {
    //             document.getElementById(`roomRowC_${y}`).innerHTML += `
    //             <div class="cell emptyCellC" id="cell_${y}_${x}"></div>`
    //         }
    //     }
    // }


    document.getElementById("gameIsoView").innerHTML = ''

    for (let i = room.length - 1; i > 0; i--) {
        document.getElementById("gameIsoView").innerHTML += `<div style="--rowNbx: ${room.length-i}; --rowNby: ${room.length-i};" id="isoRow${room.length-i}" class="row">`
        for (let j = 0, x = i; x <= room.length - 1; j++, x++) {
            console.log(j, (room.length - 1) - x, i)
            if (room[j][(room.length - 1) - x] >= 1) {
                document.getElementById(`isoRow${room.length-i}`).innerHTML += `<img class="grassIso" src="img/isometricGrassExample.png" alt="">`
            }
        }
        console.log("----")
    }
    for (let i = 0; i <= room.length - 1; i++) {
        document.getElementById("gameIsoView").innerHTML += `<div style="--rowNbx: ${room.length-i}; --rowNby: ${room.length+i};" id="isoRow${room.length+i}" class="row">`
        for (let j = 0, y = i; y <= room.length - 1; j++, y++) {
            if (room[y][j] >= 1) {
                document.getElementById(`isoRow${room.length+i}`).innerHTML += `<img class="grassIso" src="img/isometricGrassExample.png" alt="">`
            }
        }
    }


    drawMiniMap(player)
    drawPlayer(player)
}

/*function drawRoom(room, player) {
    document.getElementById("gameViewZone").innerHTML = ''
    for (let y = 0; y < room.length; y++) {
        document.getElementById("gameViewZone").innerHTML += `
        <div class="triRow" id="triRow_${y}"></div>`
        for (let x = 0; x < room[y].length; x++) {
            if (room[y][x] == 0) {
                document.getElementById(`triRow_${y}`).innerHTML += `
                <div class="losange wall y${y} x${x}" id="cell_${y}_${x}"></div>`
            } else {
                document.getElementById(`triRow_${y}`).innerHTML += `
                <div class="losange emptyCell y${y} x${x}" id="cell_${y}_${x}"></div>`
            }
        }
    }
    drawMiniMap(player)
    drawPlayer(player)
}*/

function drawMiniMap(player) {
    return
}

function drawPlayer(player) {
    //document.getElementById(`cell_${player.posOnRoom[1]}_${player.posOnRoom[0]}`).innerHTML = `
    //<img src="img/dofusPersoExample.png" class="player" id="player"></img>`
    //document.getElementById(`gameZone`).innerHTML += `
    //<img src="img/dofusPersoExample.png" class="player" id="player"></img>`
}