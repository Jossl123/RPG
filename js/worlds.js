var r = new Array(10).fill(1).map(() => new Array(10).fill(1));

var firstWorld = new World("firstWorld", [
    [r, r, 0, r],
    [0, r, r, r],
    [r, r, r, 0],
    [0, r, r, 0]
])