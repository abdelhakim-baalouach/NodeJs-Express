import { NEXT_SLIDE, PREVIOUS_SLIDE, SET_SLIDE } from "./types.jsx";
export function nextSlide() {
  return { type: NEXT_SLIDE };
}
export function previousSlide() {
  return { type: PREVIOUS_SLIDE };
}
export function setSlide(index) {
  return { type: SET_SLIDE, index };
}
