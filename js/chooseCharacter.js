var characterProperties = {
    'hunter': {
        'color1': '#2D1C02',
        'color2': '#FDDCA7',
        'name': 'Chasseur',
        'description': "Le meilleur chasseur de tous les temps"
    },
    'archer': {
        'color1': '#365733',
        'color2': '#FFFD62',
        'name': 'Archer',
        'description': "Le meilleur archer de toute la forêt"
    },
    'magician': {
        'color1': '#000C3F',
        'color2': '#4B77E5',
        'name': 'Magicien',
        'description': "Il controlle l'art de la prestidigitation"
    }
}
var classChoose = "hunter"

function chooseCharacter(e, name) {
    if (characterProperties[name] == undefined) return
    classChoose = name
    for (element of document.getElementsByClassName('perso')) {
        element.classList.remove('selected');
    }
    e.classList.add('selected');
    document.getElementById("chooseCharacter").style.background = `linear-gradient(${characterProperties[name].color1}, ${characterProperties[name].color2})`
    document.getElementById("characterName").innerHTML = characterProperties[name].name
    document.getElementById("description").innerHTML = characterProperties[name].description
}

function play() {
    alert(classChoose)
}