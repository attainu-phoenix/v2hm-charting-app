import { createStore, combineReducers } from "redux";
import updateChartReducer from "./reducers/updateChartReducer";

let reducer = combineReducers({
  updateChart: updateChartReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
