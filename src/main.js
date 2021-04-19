const { output } = require("./utils");
const { linkStations } = require("./data");

console.log(output(linkStations, [0, 0]));
console.log(output(linkStations, [100, 100]));
console.log(output(linkStations, [15, 10]));
console.log(output(linkStations, [18, 18]));
