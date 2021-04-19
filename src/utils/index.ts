import { LatLng } from "./../types/index";

// Calculates the distance between two points with the Pythagorean theorem
const distance = (a: LatLng, b: LatLng): number => {
  const x = Math.abs(a[0] - b[0]);
  const y = Math.abs(a[1] - b[1]);
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

function getLinkStation(linkStations, position) {
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

export function output(linkStations, position) {
  const ls = getLinkStation(linkStations, position);
  if (!ls) {
    return `No link station within reach for point (${position.join(", ")}).`;
  }
  return `Best link station for point (${position.join(
    ", "
  )}) is at point (${ls.position.join(", ")}) with power ${calculatePower(
    ls,
    position
  ).toFixed(2)}`;
}
