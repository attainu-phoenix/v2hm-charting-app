const HEADERS = {
  "X-Parse-Application-Id": "chartowl",
  "Content-Type": "application/json"
};

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

function getAllCharts(store, action) {
  let params = encodeURI(`where={"userId": "${action.userId}"}`);
  let url = `http://localhost:1337/parse/classes/charts?${params}`;

  fetch(url, {
    method: "get",
    headers: HEADERS
  })
    .then(data => data.json())
    .then(result => {
      store.dispatch({
        type: "CHARTS_LOADED",
        charts: result.results
      });
    })
    .catch(err => console.log(err));
}

function getOneChart(store, action) {
  let url = `http://localhost:1337/parse/classes/charts/${action.chartId}`;
  fetch(url, {
    method: "get",
    headers: HEADERS
  })
    .then(data => data.json())
    .then(result => {
      store.dispatch({
        type: "ONE_CHART_LOADED",
        oneChartData: result
      });
    })
    .catch(err => console.log(err));
}

function editOneChart(store, action) {
  let url = `http://localhost:1337/parse/classes/charts/${
    action.chartData.objectId
  }`;

  fetch(url, {
    method: "put",
    headers: HEADERS,
    body: JSON.stringify(action.chartData)
  })
    .then(data => data.json())
    .then(result => {
      store.dispatch({
        type: "CHART_EDITED",
        editedChartData: action.chartData
      });
    })
    .catch(err => console.log(err));
}

function removeChart(store, action) {
  let url = `http://localhost:1337/parse/classes/charts/${action.chartId}`;

  fetch(url, {
    method: "delete",
    headers: HEADERS
  })
    .then(data => data.json())
    .then(result => {
      store.dispatch({
        type: "CHART_REMOVED"
      });
    })
    .catch(err => console.log(err));
}

export { createChart, getAllCharts, getOneChart, editOneChart, removeChart };
