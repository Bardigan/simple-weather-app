export default function(state=[], action) {

  if (action.type === 'FETCH_WEATHER') {
    return [action.payload.data, ...state];
  }
  if (action.type === 'DELETE_ACTION') {
    const oldState = [...state];
    return oldState.filter((el,index) => {
      return action.payload !== index;
    })
  }
  if (action.type === 'EMPTY_FIELD') {
    return state;
  }

  if (action.type === 'NOT_FOUND') {
    return state;
  }

  return state;
}