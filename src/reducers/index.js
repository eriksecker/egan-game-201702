import { combineReducers } from 'redux';

import background from './background';
import hero from './hero';

const rootReducer = combineReducers({
  background,
	hero,
});

export default rootReducer;
