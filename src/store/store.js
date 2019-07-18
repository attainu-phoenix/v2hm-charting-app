import {createStore, combineReducers} from 'redux';
import ChartReducer from './reducers/ChartReducer.js';
import saveChartsReducer from './reducers/saveChartsReducer.js';
import {getUserAccess} from "../store/api/index.js";



let reducer = combineReducers({
    chartData: ChartReducer,
    charts: saveChartsReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("dispatched ==>", store.getState());
})

function stateMapper(state) {
    return state;
}

/*The code below is has variable definition and store dispatches used strictly for testing purpose only please follow the important instructions for testing: 
1. Before doing npm start ensure that all this code is commented out
2. Once you sucessfully login and app is loaded i.e.  http://localhost:3000/app for most of the systems then remove the // from below 2 variable declarations and any one store.dispatch which you want to test
3.You are free to login and logout as many times as you want as no need for commenting out full thing long as you do not terminate by pressing ctrl C   
 */

    //let user = getUserAccess();

    //let userId = user.userId;

/*store.dispatch({                              //Chart with given chartId removed now 5 charts left with gmail
    type: "REMOVE_CHART",
    removechart:({
        userId: userId,
        chartId: "bEbnAxbumF"
    })
})*/


/*store.dispatch({                              //Chart with object Id D2Vu765LjL Generated
    type: "CREATE_CHART",
    newData: ({
        userId: userId,
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
    type: "GET_CHART",                       //was able to get required chart
    onechart:({
        userId: userId,
        chartId: "bEbnAxbumF" 
    })
})*/


/*store.dispatch({                                         //Before remove have 6 charts with this userId
    type: "GET_ALL_CHARTS",
    allcharts:({
        userId: userId
    })
})*/



/*store.dispatch({
    type: "UPDATE_CHART",
    //editonechart:({
       // chartId: "D2Vu765LjL" 
    //}),
    updatedData:({                                      //chart with Id D2Vu765LjL modified
        userId: userId,
        chartId: "D2Vu765LjL",
        name: "Export sales, July 2019,",
        chartType: "pie",
        chartData: [
         {x: 12, y: 35},
         {x: 14, y: 25},
         {x: 15, y: 15},
         {x: 16, y: 10},
         {x: 17, y: 15}     
       ]
   })
})*/


export {store, stateMapper};