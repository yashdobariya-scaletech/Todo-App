import { createStore } from "redux";

const initialSate = { inputFields: [] };

const inputFieldReduser = (state = { initialSate }, action) => {};

const store = createStore(inputFieldReduser);

export default store;
