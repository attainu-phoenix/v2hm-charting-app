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

// // Create a chart
// store.dispatch({
//     type: "CREATE_CHART",
//     newChartData: {
//         userId : "123",
//         name: "Hello World",
//         data: []
//     }
// })

// // Fetch currently loaded user's charts
// store.dispatch({
//   type: "FETCH_CHARTS",
//   userId: "123"
// });

// Clear the current chart and fetch a single chart
// store.dispatch({
//     type: "CLEAR_CHART"
// });
// store.dispatch({
//     type: "GET_ONE_CHART",
//     chartId : "9BMFJ1GXMq"
// });

// Edit a chart item
// store.dispatch({
//     type: "EDIT_CHART",
//     chartData : {
//         objectId: "9BMFJ1GXMq",
//         name: "Hello World " + new Date()
//     }
// });

// Remove a chart item
// store.dispatch({
//     type: "REMOVE_CHART",
//     chartId: "9BMFJ1GXMq"
// });
