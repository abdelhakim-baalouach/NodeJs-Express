import { NEXT_SLIDE, PREVIOUS_SLIDE, SET_SLIDE } from "../actions/types.jsx";
import initialState from "./initialState.jsx";
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      return { ...state, index: state.index + 1 };
    case PREVIOUS_SLIDE:
      return { ...state, index: state.index - 1 };
    case SET_SLIDE:
      return { ...state, index: parseInt(action.index) };
    default:
      return state;
  }
}
export default rootReducer;
