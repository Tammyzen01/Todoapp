import * as Helper from '../contants/reducerName'
import note from '../slice/note';
import favourite from '../slice/favourite';

export const noteReducer = (state, action) => {
  if (action.type === `${Helper.NOTE}/reset`) {
    state = undefined;
  }
  return note(state, action);
};

export const favouriteReducer = (state, action) => {
    if (action.type === `${Helper.FAVOURITE}/reset`) {
      state = undefined;
    }
    return favourite(state, action);
  };


