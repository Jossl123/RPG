var r = new Array(5).fill(1).map(() => new Array(5).fill(1));
r[0][0] = 0
r[1][0] = 0
var firstWorld = new World("firstWorld", [
    [r, r, 0, r],
    [0, r, r, r],
    [r, r, r, 0],
    [0, r, r, 0]
])