import { createStore, combineReducers } from "redux";
import updateChartReducer from "./reducers/updateChartReducer";

// let reducer = function(oldState, action) {
//   let initialState = {
//     isChartLoading: false
//   };

//   if (!oldState) {
//     return initialState;
//   }

//   let newState = initialState;

//   if (action.type == "FETCH_CHART") {
//     // fetch("https://dog.ceo/api/breeds/list/all")
//     //     .then(function(response) {
//     //         return response.json();
//     //     })
//     //     .then(function(data) {
//     //         store.dispatch({
//     //             type: "MENU_LOADED",
//     //             data: Object.keys(data.message)
//     //         });
//     //     })
//     //     .catch(function(err){
//     //         console.log(err);
//     //     });

//     newState.isChartLoading = true;
//   }

//   if (action.type == "CHART_LOADED") {
//     newState.breeds = action.data;
//   }
//   return newState;
// };

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
