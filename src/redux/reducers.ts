import { combineReducers } from 'redux';

import locations from './slices/locations';
import categories from './slices/locations';

const reducers = {
  locations,
  categories
};

const rootReducer = combineReducers({
  ...reducers,
});

// @ts-ignore
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
