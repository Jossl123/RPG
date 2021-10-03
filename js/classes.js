class Player {
    constructor(classe, world) {
        switch (classe) {
            case "archer":
                this.health = 100
                break;

            case "hunter":
                this.health = 90
                break;

            case "magician":
                this.health = 80
                break;

            default:
                break;
        }
        this.worldName = world.name
        this.world = world.grid
        this.posOnWorld = [1, 0]
        this.room = this.world[this.posOnWorld[1]][this.posOnWorld[0]]
        this.posOnRoom = [0, 0]
    }
    left() {
        if (this.posOnRoom[0] == 0) { //si il est au plus a gauche de la salle = change de salle
            if (this.posOnWorld[0] != 0) { //si on est pas tout a gauche
                var newWorld = this.world[this.posOnWorld[1]][this.posOnWorld[0] - 1]
                if (newWorld != 0) {
                    if (newWorld[this.posOnRoom[1]][newWorld[this.posOnRoom[1]].length - 1] != 0) {
                        this.posOnWorld[0]--;
                        this.posOnRoom[0] = newWorld[this.posOnRoom[1]].length - 1
                        drawRoom(this.room, this)
                    }
                }
            }
        } else if (this.room[this.posOnRoom[1]][this.posOnRoom[0] - 1] != 0) { //si la case a cote est libre
            this.posOnRoom[0]--;
            drawPlayer(this)
        }
    }
    right() {
        if (this.posOnRoom[0] == this.room[this.posOnRoom[1]].length - 1) { //si il est au plus a droite de la salle = change de salle
            if (this.posOnWorld[0] != this.world[this.posOnWorld[1]].length - 1) { //si on est pas tout a droite
                var newWorld = this.world[this.posOnWorld[1]][this.posOnWorld[0] + 1]
                if (newWorld != 0) {
                    if (newWorld[this.posOnRoom[1]][0] != 0) {
                        this.posOnWorld[0]++;
                        this.posOnRoom[0] = 0
                        drawRoom(this.room, this)
                    }
                }
            }
        } else if (this.room[this.posOnRoom[1]][this.posOnRoom[0] + 1] != 0) { //si la case a cote est libre
            this.posOnRoom[0]++;
            drawPlayer(this)
        }
    }
    down() {
        if (this.posOnRoom[1] == this.room.length - 1) { //si il est au plus en bas de la salle = change de salle
            if (this.posOnWorld[1] != this.world.length - 1) { //si on est pas tout en bas du monde
                var newWorld = this.world[this.posOnWorld[1] + 1][this.posOnWorld[0]]
                if (newWorld != 0) {
                    if (newWorld[0][this.posOnRoom[0]] != 0) {
                        this.posOnWorld[1]++;
                        this.posOnRoom[1] = 0
                        drawRoom(this.room, this)
                    }
                }
            }
        } else if (this.room[this.posOnRoom[1] + 1][this.posOnRoom[0]] != 0) { //si la case en dessous est libre
            this.posOnRoom[1]++;
            drawPlayer(this)
        }
    }
    up() {
        if (this.posOnRoom[1] == 0) { //si il est au plus en bas de la salle = change de salle
            if (this.posOnWorld[1] != 0) { //si on est pas tout en bas du monde
                var newWorld = this.world[this.posOnWorld[1] - 1][this.posOnWorld[0]]
                if (newWorld != 0) {
                    if (newWorld[this.world.length - 1][this.posOnRoom[0]] != 0) {
                        this.posOnWorld[1]--;
                        this.posOnRoom[1] = this.world.length - 1
                        drawRoom(this.room, this)
                    }
                }
            }
        } else if (this.room[this.posOnRoom[1] - 1][this.posOnRoom[0]] != 0) { //si la case en dessous est libre
            this.posOnRoom[1]--;
            drawPlayer(this)
        }
    }
}

class World {
    constructor(name, grid) {
        this.name = name
        this.grid = grid
    }
}