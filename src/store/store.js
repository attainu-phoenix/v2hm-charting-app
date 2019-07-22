import { createStore, combineReducers } from "redux";
import updateChartReducer from "./reducers/updateChartReducer";
import ChartReducer from "./reducers/ChartReducer.js";
import saveChartsReducer from "./reducers/saveChartsReducer.js";


let reducer = combineReducers({
  updateChart: updateChartReducer,
  chartData: ChartReducer,
  charts: saveChartsReducer
});
let store = createStore(reducer);


store.subscribe(() => {
  console.log("dispatched ==>", store.getState());
});


function stateMapper(state) {
  return state;
}


export { store, stateMapper };