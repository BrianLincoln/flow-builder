import { SHOW_FLOW_LIST, SHOW_FLOW_EDITOR } from '../constants/ActionTypes';

const initialState = {
    currentView: 'flow-list'
};

export default function flows (state = initialState, action) {
    switch (action.type) {
        case SHOW_FLOW_LIST:
            state.currentView = 'flow-list';
            return state;
        case SHOW_FLOW_EDITOR:
            state.currentView = 'flow-editor';
            return state;
        default:
            return state;
    }
}
