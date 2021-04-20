import { linkStations } from "./../data";
import { LatLng, LinkStation } from "../types/index";

// Calculates the distance between two points with the Pythagorean theorem
export function distance(a: LatLng, b: LatLng): number {
  const x = Math.abs(a[0] - b[0]);
  const y = Math.abs(a[1] - b[1]);
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export function getLinkStation(position: LatLng): LinkStation | null {
  return linkStations
    .filter((ls) => distance(ls.position, position) < ls.reach)
    .reduce((a, b) => {
      if (a && calculatePower(a, position) > calculatePower(b, position)) {
        return a;
      }
      return b;
    }, null);
}

export function calculatePower(
  linkStation: LinkStation,
  position: LatLng
): number {
  const dist = distance(linkStation.position, position);
  if (dist > linkStation.reach) {
    return 0;
  }
  const power = Math.pow(linkStation.reach - dist, 2);
  return Math.max(power, 0);
}
