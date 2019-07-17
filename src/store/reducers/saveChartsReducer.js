import { getAllCharts } from "../api/api.js";
import { store } from "../store.js";

function saveChartsReducer(charts = [], action) {
  if (action.type === "GET_ALL_CHARTS") {
    getAllCharts(store, action);
  }

  if (action.type === "CHARTS_LOADED") {
    return action.charts;
  }

  return charts;
}

export default saveChartsReducer;
