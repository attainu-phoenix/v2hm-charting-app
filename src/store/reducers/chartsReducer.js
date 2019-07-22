import {getAllCharts} from '../api/api.js';
import {store} from '../store.js';


function chartsReducer(charts=[], action) {

    if(action.type === "FETCH_CHARTS") {
        getAllCharts(store, action);
    }

    if(action.type === "CHARTS_LOADED") {
        return action.charts;
    }

    if(action.type === "CLEAR_LOADED") {
        return [];
    }

    return charts;
}


export default chartsReducer;