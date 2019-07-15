const HEADERS = {
    "X-Parse-Application-Id": "chartowl",
    "Content-Type": "application/json"
};

 function createChart(store,action) {
    let url = "http://localhost:1337/parse/classes/charts";
   
       fetch(url, {
           method: "post",
           headers: HEADERS,
           body: JSON.stringify({
               userId: "33sEqWyntO" ,
               name: "Export sales, Janurary 2019",
               chartType: "bar",
               chartData: [
                {x: 10, y: 35},
                {x: 11, y: 25},
                {x: 12, y: 15}
               ]
           })
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CREATE_CHART",
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function getAllCharts(store,action) {
       let userId = "33sEqWyntO" ;
   
   
       let params = encodeURI(`where={"userId": "${userId}"}`);
       let url = `http://localhost:1337/parse/classes/charts?${params}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"GET_ALL_CHARTS",
               data:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function getOneChart(store,action) {
       let chartId = "0eG4R8t4xX"  ;
   
   
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"GET_CHART",
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function editOneChart(store,action) {
       let chartId = "0eG4R8t4xX" ;
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "put",
           headers: HEADERS,
           body: JSON.stringify({
               userId: "33sEqWyntO",
               name: "Export sales, Janurary 2019,",
               chartType: "bar",
               chartData: [
                {x: 12, y: 35},
                {x: 14, y: 25},
                {x: 15, y: 15},
                {x: 16, y: 10},
                {x: 17, y: 15}     
               ]
           })
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"UPDATE_CHART",
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function removeChart(store,action) {
       let chartId = "0eG4R8t4xX" ;
   
   
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "delete",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CLEAR_CHARTS",
               chartData:""
           })
           console.log();
       })
       .catch(err => console.log(err));
   }

   export {createChart,getAllCharts,getOneChart,editOneChart,removeChart}