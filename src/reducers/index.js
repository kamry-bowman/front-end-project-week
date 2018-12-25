import { combineReducers } from 'redux';
import { byIdReducer, allIdsReducer, allTagsReducer } from './notesReducer';
import { authReducer } from './authReducer';
export { getAllNotes, getAllIds, getNoteById } from './notesReducer';

export default combineReducers({
  byId: byIdReducer,
  allIds: allIdsReducer,
  allTags: allTagsReducer,
  auth: authReducer,
});

