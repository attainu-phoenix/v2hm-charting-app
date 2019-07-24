
import { createStore, combineReducers } from "redux";
import chartsReducer from "./reducers/chartsReducer.js";
import chartReducer from "./reducers/chartReducer.js";
import updateChartReducer from "./reducers/updateChartReducer.js";

let reducer = combineReducers({
  chart: chartReducer,
  charts: chartsReducer,
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
//   userId: "33sEqWyntO"
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

// function updateChartReducer(oldState, action) {
//   let initialState = {
//     data: {}
//   };

//   if (!oldState) {
//     return initialState;
//   }

//   let newState = initialState;

//   newState.data = oldState.data;

//   if (action.type === "UPDATE_CHART") {
//     console.log(action.chart_data);
//     newState.data = action.chart_data;
//     console.log(newState);
//   }

//   if (action.type === "CLEAR_CHART") {
//     return {};
//   }

//   return newState;
// }

// export default updateChartReducer;
