import { combineReducers } from 'redux';
import flow from './flow';
import uiState from './ui-state';

const rootReducer = combineReducers({
    flow,
    uiState
});

export default rootReducer;
