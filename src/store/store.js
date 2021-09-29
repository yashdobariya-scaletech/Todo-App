import { createStore } from "redux";
import { ADD_INPUTFIELD_DETAILS } from "../store/action";

const initialSate = { inputFields: [] };

const inputFieldReduser = (state = { initialSate }, action) => {
  switch (action.type) {
    case ADD_INPUTFIELD_DETAILS:
      return {
        ...state,
        inputFields: [...state.inputFields, action.value],
      };

    default:
      return state;
  }
};

const store = createStore(
  inputFieldReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
