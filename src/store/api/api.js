const HEADERS = {
    "X-Parse-Application-Id": "chartowl",
    "Content-Type": "application/json"
};

export function createChart() {
    let url = "http://localhost:1337/parse/classes/charts";
   
       fetch(url, {
           method: "post",
           headers: HEADERS,
           body: JSON.stringify({
               userId: "33sEqWyntO",
               name: "Export sales, Feb 2019",
               chartType: "bar",
               chartData: [
                   {x: 10, y: 35},
                   {x: 11, y: 25},
                   {x: 12, y: 15}
               ]
           })
       })
       .then(data => data.json())
       .then(json => {
           console.log(json);
       })
      
       .catch(err => console.log(err));
   }
   
   
   
  export function getAllCharts() {
       let userId = "33sEqWyntO";
   
   
       let params = encodeURI(`where={"userId": "${userId}"}`);
       let url = `http://localhost:1337/parse/classes/charts?${params}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(json => {
           console.log(json);
       })
       .catch(err => console.log(err));
   }
   
   
   
   export function getOneChart() {
       let chartId = "T5d85d4GcK";
   
   
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "get",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(json => {
           console.log(json);
       })
       .catch(err => console.log(err));
   }
   
    export function editOneChart() {
       let chartId ="T5d85d4GcK";
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "put",
           headers: HEADERS,
           body: JSON.stringify({
               userId: "33sEqWyntO",
               name: "Export sales, Mar 2019,",
               chartType: "line",
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
       .then(json => {
               console.log(json);
           })
       .catch(err => console.log(err));
   }
   
   
   
    export function removeChart() {
       let chartId = "uEicKoeijv";
   
   
       let url = `http://localhost:1337/parse/classes/charts/${chartId}`;
   
       fetch(url, {
           method: "delete",
           headers: HEADERS
       })
       .then(data => data.json())
       .then(json => {
           console.log(json);
       })
       .catch(err => console.log(err));
   }
   