/* eslint-disable-next-line */
function filterReducer(state = 'ALL', action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export function filterChange(filter) {
  return {
    type: 'SET_FILTER',
    filter,
  };
}

export default filterReducer;
