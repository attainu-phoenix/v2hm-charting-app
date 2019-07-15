import {getAllCharts} from '../api/api.js';
import {store} from '../store.js';

function saveChartsReducer(saveCharts = [], action) {

if (action.type === "GET_ALL_CHARTS") {

    getAllCharts(store, action);
    return saveCharts;
    }
}

export default saveChartsReducer;