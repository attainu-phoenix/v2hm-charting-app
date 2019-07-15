import {createStore, combineReducer} from 'redux';
import createChartReducer from './reducers/CreateChartReducer.js';
import saveChartsReducer from './reducers/saveChartsReducer.js';



let reducer = combineReducer({
    charts: createChartReducer,
    allCharts: saveChartsReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("dispatched ==>", store.getState());
})

function stateMapper(state) {
    return state;
}

export {state, stateMapper};