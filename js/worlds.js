var r = new Array(10).fill(1).map(() => new Array(10).fill(1));
r[2][4] = 0
r[2][3] = 0
r[4][3] = 0
r[4][2] = 0
var t = new Array(10).fill(1).map(() => new Array(10).fill(1));
t[3][4] = 0
t[5][5] = 0
t[8][7] = new Ennemi()
t[9][9] = 0
var firstWorld = new World("firstWorld", [
    [r, t, 0, r],
    [0, r, t, t],
    [r, t, r, 0],
    [0, r, r, 0]
])