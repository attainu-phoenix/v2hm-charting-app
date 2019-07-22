import { createStore, combineReducers } from "redux";
import chartsReducer from "./reducers/chartsReducer.js";
import chartReducer from "./reducers/chartReducer.js";


let reducer = combineReducers({
    charts: chartsReducer,
    chart: chartReducer
});
let store = createStore(reducer);


store.subscribe(() => {
  console.log("dispatched ==>", store.getState());
});


function stateMapper(state) {
  return state;
}


export { store, stateMapper };


// Reducer examples
store.dispatch({
    type: "CREATE_CHART",
    newChartData: {
        userId : "123",
        name: "Hello World",
        data: []
    }
})

// Fetch currently loaded user's charts
store.dispatch({
    type: "FETCH_CHARTS",
    userId : "123"
})