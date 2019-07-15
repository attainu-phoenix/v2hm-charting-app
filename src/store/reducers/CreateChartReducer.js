import {createChart,getOneChart,editOneChart,removeChart} from '../api/api.js';
import {store} from '../store.js';

function createChartReducer(chartData = [], action) {

    if (action.type === "CLEAR_CHARTS"){
        removeChart(store,action)
        return [];
    }

    if (action.type === "CREATE_CHART"){

        createChart(store, action);
        return chartData;
    }

    if (action.type === "CHART_CREATED") {

        return action.charData;
    }

    if (action.type === "UPDATE_CHART"){

        editOneChart(store, action);
        return chartData;
    }

    if (action.type === "GET_CHART") {

        getOneChart(store, action);
        return chartData;
    }

        return chartData;
}

export default createChartReducer;