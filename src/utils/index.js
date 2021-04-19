const { distance } = require("mathjs");

function getOptimalLinkStation(linkStations, position) {
  const ls = linkStations
    .filter((ls) => distance(ls.position, position) < ls.reach)
    .reduce((a, b) => {
      if (a && calculatePower(a, position) > calculatePower(b, position)) {
        return a;
      }
      return b;
    }, null);
  return ls;
}

function calculatePower(linkStation, devicePosition) {
  const dist = distance(linkStation.position, devicePosition);
  if (dist > linkStation.reach) {
    return 0;
  }
  const power = Math.pow(linkStation.reach - dist, 2);
  return Math.max(power, 0);
}

module.exports = {
  output: function (linkStations, position) {
    const ls = getOptimalLinkStation(linkStations, position);
    if (!ls) {
      return `No link station within reach for point (${position.join(", ")}).`;
    }
    return `Best link station for point (${position.join(
      ", "
    )}) is at point (${ls.position.join(", ")}) with power ${calculatePower(
      ls,
      position
    )}`;
  },
};
