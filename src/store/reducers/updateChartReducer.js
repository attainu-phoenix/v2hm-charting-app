function updateChartReducer(oldState, action) {
  let initialState = {
    data: {}
  };

  if (!oldState) {
    return initialState;
  }

  let newState = initialState;

  newState.data = oldState.data;

  if (action.type === "UPDATE_CHART") {
    console.log(action.chart_data);
    newState.data = action.chart_data;
    console.log(newState);
  }

  if (action.type === "CLEAR_CHART") {
    return {};
  }

  return newState;
}

export default updateChartReducer;
