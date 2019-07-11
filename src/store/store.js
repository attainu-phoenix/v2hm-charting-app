import {createStore, combineReducer} from 'redux';
import createChartReducer from './reducers/CreateChartReducer.js';



let reducer = combineReducer({
    createCharts: createChartReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("dispatched ==>", store.getState());
})

function stateMapper(state) {
    return state;
}

export {state, stateMapper};