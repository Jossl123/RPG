var characterProperties = {
    'archer': {
        'color1': '#FFFD62',
        'color2': '#365733',
        'name': 'Archer',
        'description': "Le meilleur archer de toute la forêt"
    },
    'hunter': {
        'color1': '#FDDCA7',
        'color2': '#2D1C02',
        'name': 'Chasseur',
        'description': "Le meilleur chasseur de tous les temps"
    },
    'magician': {
        'color1': '#4B77E5',
        'color2': '#000C3F',
        'name': 'Magicien',
        'description': "Il controlle l'art de la prestidigitation"
    },
    'warior': {
        'color1': '#C33408',
        'color2': '#2F0F00',
        'name': 'Guerrier',
        'description': "Un guerrier surpuissant"
    }
}
var classChoose = "archer"

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