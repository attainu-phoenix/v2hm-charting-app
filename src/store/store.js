import { createStore, combineReducers } from "redux";
import chartsReducer from "./reducers/chartsReducer.js";


let reducer = combineReducers({
    charts: chartsReducer
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
    type: "FETCH_CHARTS"
})