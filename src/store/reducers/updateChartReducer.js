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
    newState.data = Object.assign(action.chart_data);
  }

  if (action.type === "CLEAR_CHART") {
    return {};
  }

  return newState;
}

export default updateChartReducer;
