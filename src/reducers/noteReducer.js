/* eslint-disable-next-line */
function noteReducer(state = [], action) {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'TOGGLE_IMPORTANCE': {
      const { id } = action.data;
      const noteToChange = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id === id ? changedNote : note));
    }
    default:
      return state;
  }
}

export default noteReducer;
