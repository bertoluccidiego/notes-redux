import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NewNote from './components/NewNote';
import Notes from './components/Notes';

import { initializeNotes } from './reducers/noteReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
