import {createChart, getOneChart} from '../api/api.js';
import {store} from '../store.js';


function chartReducer(chart={}, action) {

    if(action.type === "CREATE_CHART") {
        createChart(store, action);
    }

    if(action.type === "CHART_CREATED") {
        return action.newChartData;
    }

    if(action.type === "GET_ONE_CHART") {
        getOneChart(store, action);
    }

    if(action.type === "ONE_CHART_LOADED") {
        return action.oneChartData;
    }

    if(action.type === "CLEAR_CHART") {
        return {};
    }


    return chart;
}


export default chartReducer;