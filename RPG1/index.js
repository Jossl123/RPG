var room = []
var phase = "choosingCharacter"
var player = 0
var joueurs = []

window.onload = function() {
    document.addEventListener("mousedown", mouseDown)
}

function initRoom(xs, ys) {
    room = new Array(ys).fill(0).map(() => new Array(xs).fill(0));
    for (let i = 1; i <= room.length - 2; i++) {
        room[1][i] = 1
    }
    for (let i = 1; i <= room.length - 2; i++) {
        room[room.length - 2][i] = 2
    }
    drawGrid(room)
}

function drawGrid(room) {
    document.getElementById("battleField").innerHTML = ""
    for (let y = 0; y < room.length; y++) {
        document.getElementById("battleField").innerHTML += `<div id='battleRow_${y}' class='battleFieldRow'></div>`
        for (let x = 0; x < room[y].length; x++) {
            document.getElementById(`battleRow_${y}`).innerHTML += `<div id='battleCell_${y}_${x}' class='battleFieldCell cell${room[y][x]}'></div>`
        }
    }
    if (!player || player.pos[0] == undefined) return
    document.getElementById(`battleCell_${player.pos[1]}_${player.pos[0]}`).innerHTML += `<div id="player"></div>`
}

function choosePlayer(name) {
    switch (name) {
        case "hunter":
            player = new Player("hunter", 100)
            break;

        case "archer":
            player = new Player("archer", 90)
            break;

        default:
            break;
    }
    document.getElementById("choosePlayer").style.visibility = "hidden"
    phase = "chooseBeginingPos"
}

function chooseBeginingPos(e) {
    var elementClickedId = e.target.id
    if (!elementClickedId.includes("battleCell")) return
    var indexElements = elementClickedId.split("_")
    var yindex = indexElements[1]
    var xindex = indexElements[2]
    if (room[yindex][xindex] == 2) {
        if (player.pos[0] == undefined) {
            player.pos = [xindex, yindex]
            document.getElementById(elementClickedId).innerHTML += `<div id="player"></div>`
            document.getElementById("beginGame").style.visibility = 'visible'
        } else {
            cellPastPos = document.getElementById(`battleCell_${player.pos[1]}_${player.pos[0]}`)
            for (var i = 0; i < cellPastPos.children.length; i++) {
                child = cellPastPos.children[i]
                if (child.id == "player") {
                    cellPastPos.removeChild(child)
                }
            };
            player.pos = [xindex, yindex]
            document.getElementById(elementClickedId).innerHTML += `<div id="player"></div>`
        }
    }
}

function beginGame() {
    joueurs.push(player)
    room = new Array(room.length).fill(0).map(() => new Array(room[0].length).fill(0));
    drawGrid(room)
    phase = "inGame"
    document.getElementById("beginGame").style.visibility = "hidden"
    return
}

initRoom(10, 10)