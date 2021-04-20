import { LatLng } from "../types/index";
import { calculatePower, getLinkStation } from "./formulas";

export function output(position: LatLng) {
  const ls = getLinkStation(position);
  if (!ls) {
    console.log(
      `No link station within reach for point (${position.join(", ")}).`
    );
    return;
  }
  console.log(
    `Best link station for point (${position.join(
      ", "
    )}) is at point (${ls.position.join(", ")}) with power ${calculatePower(
      ls,
      position
    ).toFixed(2)}.`
  );
  return;
}
