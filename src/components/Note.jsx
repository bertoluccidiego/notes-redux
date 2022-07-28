import { useDispatch } from 'react-redux';

import { toggleImportanceOf } from '../reducers/noteReducer';

function Note({ note }) {
  const dispatch = useDispatch();
  function toggleImportance(id) {
    dispatch(toggleImportanceOf(id));
  }

  return (
    /* eslint-disable-next-line */
    <li key={note.id} onClick={() => toggleImportance(note.id)}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
}

export default Note;
