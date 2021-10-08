var r = new Array(10).fill(1).map(() => new Array(10).fill(1));
r[5][4] = 0
r[5][3] = 0
r[4][3] = 0
r[4][2] = 0
var firstWorld = new World("firstWorld", [
    [r, r, 0, r],
    [0, r, r, r],
    [r, r, r, 0],
    [0, r, r, 0]
])