import { LatLng, LinkStation } from "../types/index";
import { calculatePower, getLinkStation } from "./formulas";

export function output(linkStations: LinkStation[], position: LatLng) {
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
