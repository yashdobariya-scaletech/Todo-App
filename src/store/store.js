import { createStore } from "redux";
import { ADD_INPUTFIELD_DETAILS, ADD_FILTEREDARRAY } from "../store/action";

const initialSate = { inputFields: [] };

const inputFieldReduser = (state = initialSate, action) => {
  console.log(action, "type");
  switch (action.type) {
    case ADD_INPUTFIELD_DETAILS:
      return {
        ...state,
        inputFields: [...state.inputFields, action.value],
      };

    case ADD_FILTEREDARRAY:
      return {
        ...state,
        inputFields: action.carsList,
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
