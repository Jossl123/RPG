function drawRoom(room, player) {
    document.getElementById("gameViewZone").innerHTML = ''
    for (let y = 0; y < room.length; y++) {
        document.getElementById("gameViewZone").innerHTML += `
        <div class="roomRow" id="roomRow_${y}"></div>`
        for (let x = 0; x < room[y].length; x++) {
            if (room[y][x] == 0) {
                document.getElementById(`roomRow_${y}`).innerHTML += `
                <div class="cell wall" id="cell_${y}_${x}"></div>`
            } else {
                document.getElementById(`roomRow_${y}`).innerHTML += `
                <div class="cell emptyCell" id="cell_${y}_${x}"></div>`
            }
        }
    }
    document.getElementById(`cell_${player.posOnRoom[1]}_${player.posOnRoom[0]}`).innerHTML = `
    <div class="player" id="player"></div>`
}