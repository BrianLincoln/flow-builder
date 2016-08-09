import { combineReducers } from 'redux';
import flows from './flows';
import uiState from './ui-state';

const rootReducer = combineReducers({
    flows,
    uiState
});

export default rootReducer;
