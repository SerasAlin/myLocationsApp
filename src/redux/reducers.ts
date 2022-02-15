import { combineReducers } from 'redux';

import language from './slices/locations';

const reducers = {
  language,
};

const rootReducer = combineReducers({
  ...reducers,
});

// @ts-ignore
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
