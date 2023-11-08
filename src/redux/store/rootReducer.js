import * as Helper from './ResetAction'


import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  note: Helper.noteReducer,
  favourite: Helper.favouriteReducer
});

const rootReducer = (state ,action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
