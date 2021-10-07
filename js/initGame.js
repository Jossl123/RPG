var player

function play() {
    document.getElementById("body").removeChild(document.getElementById("chooseCharacterScript"))
    document.getElementById("body").removeChild(document.getElementById("chooseCharacter"))
    document.getElementById("game").style.display = "flex"
    player = new Player(classChoose, firstWorld)
        // document.getElementById(`gameZone`).innerHTML += `
        //     < img src="img/dofusPersoExample.png" class="player" id="player"></img>`
    drawRoom(player.room, player)
}