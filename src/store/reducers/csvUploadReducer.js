import {uploadCsvChart} from '../api/api.js';
import {store} from '../store.js';

function csvUploadReducer(csvChart = [], action) {

    if (action.type === "CSV_UPLOAD") {

        uploadCsvChart(store, action);
        
    }

    if (action.type === "CHART_UPLOADED") {
        return action.csvChart;
    }
    
 return csvChart;
}

export default csvUploadReducer;
