const HEADERS = {
  "X-Parse-Application-Id": "chartowl",
  "Content-Type": "application/json"
};

function createUser() {
  let url = "http://localhost:1337/parse/classes/charts";

  fetch(url, {
    method: "post",
    headers: HEADERS,
    body: JSON.stringify({
      username: "mojom2k",
      password: "mojojojo"
    })
  })
    .then(data => data.json())
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
}

createUser();

// function createChart(store, action) {
//   let url = "http://localhost:1337/parse/classes/charts";

//   fetch(url, {
//     method: "post",
//     headers: HEADERS,
//     body: JSON.stringify(action.newData)
//   })
//     .then(data => data.json())
//     .then(result => {
//       store.dispatch({
//         type: "CHART_CREATED",
//         chartData: result
//       });
//       console.log(result);
//     })
//     .catch(err => console.log(err));
// }

// function getAllCharts(store, action) {
//   let userId = JSON.stringify(action.allcharts);

//   let params = encodeURI(`where={"userId": "${userId}"}`);
//   let url = `http://localhost:1337/parse/classes/charts?${params}`;

//   fetch(url, {
//     method: "get",
//     headers: HEADERS
//   })
//     .then(data => data.json())
//     .then(result => {
//       store.dispatch({
//         type: "CHARTS_LOADED",
//         data: result
//       });
//       console.log(result);
//     })
//     .catch(err => console.log(err));
// }

// function getOneChart(store, action) {
//   let chartId = JSON.stringify(action.onechart);

//   let url = `http://localhost:1337/parse/classes/charts/${chartId}`;

//   fetch(url, {
//     method: "get",
//     headers: HEADERS
//   })
//     .then(data => data.json())
//     .then(result => {
//       store.dispatch({
//         type: "CHART_LOADED",
//         chartData: result
//       });
//       console.log(result);
//     })
//     .catch(err => console.log(err));
// }

// function editOneChart(store, action) {
//   let chartId = JSON.stringify(action.editonechart);
//   let url = `http://localhost:1337/parse/classes/charts/${action.newData.id}`;

//   fetch(url, {
//     method: "put",
//     headers: HEADERS,
//     body: JSON.stringify(action.newData)
//   })
//     .then(data => data.json())
//     .then(result => {
//       store.dispatch({
//         type: "CHART_UPDATED",
//         chartData: result
//       });
//       console.log(result);
//     })
//     .catch(err => console.log(err));
// }

// function removeChart(store, action) {
//   let chartId = JSON.stringify(action.removeonechart);

//   let url = `http://localhost:1337/parse/classes/charts/${chartId}`;

//   fetch(url, {
//     method: "delete",
//     headers: HEADERS
//   })
//     .then(data => data.json())
//     .then(result => {
//       store.dispatch({
//         type: "CHART_REMOVED",
//         chartData: ""
//       });
//       console.log();
//     })
//     .catch(err => console.log(err));
// }

// export { createChart, getAllCharts, getOneChart, editOneChart, removeChart };
