import { createStore, combineReducers } from "redux";


let reducer = combineReducers({
});
let store = createStore(reducer);


store.subscribe(() => {
  console.log("dispatched ==>", store.getState());
});


function stateMapper(state) {
  return state;
}


export { store, stateMapper };