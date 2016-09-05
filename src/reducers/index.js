import { combineReducers } from 'redux';
import flow from './flow';
import test from './test';
import uiState from './ui-state';

const rootReducer = combineReducers({
    flow,
    test,
    uiState
});

export default rootReducer;
