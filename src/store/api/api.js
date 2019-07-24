const HEADERS = {
  "X-Parse-Application-Id": "chartowl",
  "Content-Type": "application/json"
};


 function createChart(store,action) {
    let url = "http://localhost:1337/parse/classes/charts";
   
       fetch(url, {
           method: "post",
           headers: HEADERS,
           body: JSON.stringify(action.newData)
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CHART_CREATED",
               
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }

   function uploadCsvChart(store,action) {
    let url = "http://localhost:1337/parse/classes/charts";
   
       fetch(url, {
           method: "post",
           headers: HEADERS,
           body: JSON.stringify(action.Data)
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CHART_UPLOADED",
               csvChart:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function getAllCharts(store,action) {
       
       let params = encodeURI(`where={"userId": "${action.allcharts.userId}"}`);
       let url = `http://localhost:1337/parse/classes/charts?${params}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CHARTS_LOADED",
               charts:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function getOneChart(store,action) {
         
       let url = `http://localhost:1337/parse/classes/charts/${action.onechart.chartId}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS,
          
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CHART_LOADED",
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function editOneChart(store,action) {
       
       let url = `http://localhost:1337/parse/classes/charts/${action.updatedData.chartId}`;
       
       fetch(url, {
           method: "put",
           headers: HEADERS,
           body: JSON.stringify(action.updatedData)
       })
       .then(data => data.json())
       .then(result => {
           store.dispatch({
               type:"CHART_UPDATED",
               chartData:result
           })
           console.log(result);
       })
       .catch(err => console.log(err));
   }
   
   function removeChart(store,action) {

function createChart(store, action) {
  let url = "http://localhost:1337/parse/classes/charts";


  fetch(url, {
    method: "post",
    headers: HEADERS,
    body: JSON.stringify(action.newChartData)
  })
    .then(data => data.json())
    .then(result => {
      store.dispatch({
        type: "CHART_CREATED",
        newChartData: result
      });
    })
    .catch(err => console.log(err));
}


   export {createChart,uploadCsvChart, getAllCharts,getOneChart,editOneChart,removeChart}
