var player

function play() {
    document.getElementById("body").removeChild(document.getElementById("chooseCharacterScript"))
    document.getElementById("body").removeChild(document.getElementById("chooseCharacter"))
    document.getElementById("game").style.display = "flex"
    player = new Player(classChoose, firstWorld)
    drawRoom(player.room, player)
}