import { useSelector } from 'react-redux';

import Note from './Note';

function Notes() {
  function selector(state) {
    return state;
  }
  const notes = useSelector(selector);

  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default Notes;
