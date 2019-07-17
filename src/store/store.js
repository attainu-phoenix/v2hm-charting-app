import { createStore, combineReducers } from "redux";
import updateChartReducer from "./reducers/updateChartReducer";
import ChartReducer from "./reducers/ChartReducer.js";
import saveChartsReducer from "./reducers/saveChartsReducer.js";

let reducer = combineReducers({
  updateChart: updateChartReducer,
  chartData: ChartReducer,
  charts: saveChartsReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

/*store.dispatch({
    type: "REMOVE_CHART",
    removechart:({
        chartId: "AG5EQuyKZP"
    })
})*/

/*store.dispatch({
    type: "CREATE_CHART",
    newData: ({
        userId: "33sEqWyntO" ,
        name: "Export sales, Janurary 2019",
        chartType: "bar",
        chartData: [
         {x: 10, y: 35},
         {x: 11, y: 25},
         {x: 12, y: 15}
        ]
    })
})*/

/*store.dispatch({
    type: "GET_CHART",
    onechart:({
        chartId: "0eG4R8t4xX" 
    })
})*/

/*store.dispatch({
    type: "GET_ALL_CHARTS",
    allcharts:({
        userId: "33sEqWyntO"
    })
})*/

/*store.dispatch({
    type: "UPDATE_CHART",
    editonechart:({
        chartId: "T5d85d4GcK" 
    }),
    updatedData:({
        userId: "33sEqWyntO",
        name: "Export sales, Feburary 2019,",
        chartType: "line",
        chartData: [
         {x: 12, y: 35},
         {x: 14, y: 25},
         {x: 15, y: 15},
         {x: 16, y: 10},
         {x: 17, y: 15}     
       ]
   })
})*/

export { store, stateMapper };
