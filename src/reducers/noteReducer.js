import { createSlice } from '@reduxjs/toolkit';

import notesService from '../services/notes';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    appendNote(state, action) {
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      const id = action.payload;
      console.log(id);
      const noteToChange = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id === id ? changedNote : note));
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { appendNote, toggleImportanceOf, setNotes } = noteSlice.actions;

export function initializeNotes() {
  return async (dispatch) => {
    const notes = await notesService.getAll();
    dispatch(setNotes(notes));
  };
}

export function createNote(content) {
  return async (dispatch) => {
    const newNote = await notesService.create(content);
    dispatch(appendNote(newNote));
  };
}

export default noteSlice.reducer;
