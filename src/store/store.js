import { createStore, combineReducers } from "redux";
import updateChartReducer from "./reducers/updateChartReducer";

let rootReducer = combineReducers({
  updateChart: updateChartReducer
});

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
