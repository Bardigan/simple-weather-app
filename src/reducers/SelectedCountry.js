export default function(state='Choose country', action) {
  if (action.type === 'CHANGE_COUNTRY') {
    return state = action.payload
  }
    return state;
  }