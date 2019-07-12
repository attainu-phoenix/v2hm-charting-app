CREATE_CHART
CHART_CREATED
GET_CHARTDATA
UPDATE_CHARTDATA
REMOVE_CHARTDATA
GET_ALL_CHARTS
CLEAR_CHARTS

const HEADERS = {
    "X-Parse-Application-Id": "chartowl",
    "Content-Type": "application/json"
};

export function createChart(store,action) {
 let url = "http://localhost:1337/parse/classes/charts";

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            userId: ,
            name: "Export sales, Janurary 2019",
            chartType: "bar",
            chartData: [
                {x: CocaCola, y: 35%},
                {x: Pepsi, y: 25%},
                {x: Red_Bull, y: 15%}
            ]
        })
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"CREATE_CHART",
            data:result
        })
        console.log(result);
    })
    .catch(err => console.log(err));
}

export function getAllCharts(store,action) {
    let userId = ;


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

export function getOneChart(store,action) {
    let chartId = ;


    let url = `http://localhost:1337/parse/classes/charts/${chartId}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"GET_CHARTDATA",
            data:result
        })
        console.log(result);
    })
    .catch(err => console.log(err));
}

export function editOneChart(store,action) {
    let chartId = ;
    let url = `http://localhost:1337/parse/classes/charts/${chartId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            userId: "gAysjLnPcY",
            name: " "Export sales, Janurary 2019",",
            chartType: "bar",
            chartData: [
                {x: CocaCola, y: 35%},
                {x: Pepsi, y: 25%},
                {x: Red Bull, y: 15%},
                {x: Kingfisher, y: 10%},
                {x: Carlsberg, y: 15%}
                
            ]
        })
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"UPDATE_CHARTDATA",
            data:result
        })
        console.log(result);
    })
    .catch(err => console.log(err));
}

export function removeChart(store,action) {
    let chartId = ;


    let url = `http://localhost:1337/parse/classes/charts/${chartId}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"REMOVE_CHARTDATA",
            data:result
        })
        console.log(result);
    })
    .catch(err => console.log(err));
}