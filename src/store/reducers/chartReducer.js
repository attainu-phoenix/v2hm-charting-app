import {createChart} from '../api/api.js';
import {store} from '../store.js';


function chartReducer(chart={}, action) {

    if(action.type === "CREATE_CHART") {
        createChart(store, action);
    }

    if(action.type === "CHART_CREATED") {
        return action.newChartData;
    }

    if(action.type === "CLEAR_CHART") {
        return {};
    }


    return chart;
}


export default chartReducer;