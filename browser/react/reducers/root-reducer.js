import { SET_LYRICS } from "../constants";

const init = {
  text: "",
};

export default (state = init, action) => {
  switch (action.type) {
    case "SET_LYRICS":
      console.log("NEW REDUX STATE", state.text);
      //return Object.assign({}, { value: state.value + 1});
      return { ...state, text: action.lyric };
    default:
      return state;
  }
};
