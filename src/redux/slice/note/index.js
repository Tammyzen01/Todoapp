
import { createSlice } from '@reduxjs/toolkit';
import * as Helper from '../../contants/reducerName'

export const note = createSlice({
  name: Helper.NOTE,

  initialState: {
    noteData: [],
  },

  reducers: {
    setNoteData: (state, actions) => {
      state.noteData.push(actions.payload);
    },
    updateNoteData:(state, actions) => {
      state.noteData = actions.payload
    },
},
});

export const {
  setNoteData,
  updateNoteData
} = note.actions

export default note.reducer;


