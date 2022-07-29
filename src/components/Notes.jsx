import { useSelector } from 'react-redux';

import Note from './Note';
import NotesFilter from './NotesFilter';

function Notes() {
  function selector({ filter, notes }) {
    if (filter === 'IMPORTANT') {
      return notes.filter((note) => note.important === true);
    }

    if (filter === 'NONIMPORTANT') {
      return notes.filter((note) => note.important === false);
    }

    return notes;
  }
  const notes = useSelector(selector);

  return (
    <div>
      <NotesFilter />
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}

export default Notes;
