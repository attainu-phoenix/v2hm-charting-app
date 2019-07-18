import {
  createChart,
  getOneChart,
  editOneChart,
  removeChart
} from "../api/api.js";
import { store } from "../store.js";

function ChartReducer(chartData = [], action) {
  if (action.type === "REMOVE_CHART") {
    console.log("reducer remove chart", action.removechart.chartId);

    removeChart(store, action);
  }

  if (action.type === "CHART_REMOVED") {
    return [];
  }

  if (action.type === "CREATE_CHART") {
    createChart(store, action);
  }

  if (action.type === "CHART_CREATED") {
    return action.chartData;
  }

  if (action.type === "UPDATE_CHART") {
    editOneChart(store, action);
  }

  if (action.type === "CHART_UPDATED") {
    return action.chartData;
  }

  if (action.type === "GET_CHART") {
    getOneChart(store, action);
  }

  if (action.type === "CHART_LOADED") {
    return action.chartData;
  }

  return chartData;
}

export default ChartReducer;
