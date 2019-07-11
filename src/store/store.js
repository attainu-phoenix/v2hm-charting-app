import { createStore, combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";

let rootReducer = combineReducers({
  data: dataReducer
});

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
