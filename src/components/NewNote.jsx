import { useDispatch } from 'react-redux';

import { createNote } from '../reducers/noteReducer';

function NewNote() {
  const dispatch = useDispatch();

  function addNote(event) {
    event.preventDefault();
    const content = event.target.note.value;
    /* eslint-disable-next-line */
    event.target.note.value = '';
    dispatch(createNote(content));
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
}

export default NewNote;
