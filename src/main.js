const { distance } = require("mathjs");

const linkStations = [
  {
    position: [0, 0],
    reach: 10,
  },
  {
    position: [20, 20],
    reach: 5,
  },
  {
    position: [10, 0],
    reach: 12,
  },
];

function getOptimalLinkStation(linkStations, position) {
  return linkStations.reduce((a, b) => {
    if (calculatePower(a, position) > calculatePower(b, position)) {
      return a;
    }
    return b;
  });
}

function calculatePower(linkStation, devicePosition) {
  const dist = distance(linkStation.position, devicePosition);
  if (dist > linkStation.reach) {
    return 0;
  }
  const power = Math.pow(linkStation.reach - dist, 2);
  return Math.max(power, 0);
}

function output(linkStations, position) {
  const ls = getOptimalLinkStation(linkStations, position);
  if (calculatePower(ls, position) <= 0) {
    return `No link station within reach for point (${position.join(", ")}).`;
  }
  return `Best link station for point (${position.join(
    ", "
  )}) is at point (${ls.position.join(", ")}) with power ${calculatePower(
    ls,
    position
  )}`;
}

linkStations.forEach((ls) => {
  console.log(`(${ls.position.join(", ")}), reach: ${ls.reach}\n`);
});
console.log(output(linkStations, [0, 0]));
console.log(output(linkStations, [100, 100]));
console.log(output(linkStations, [15, 10]));
console.log(output(linkStations, [18, 18]));
