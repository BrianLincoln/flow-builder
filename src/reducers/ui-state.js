import { CHANGE_VIEW, SET_CURRENT_FLOW } from '../constants/ActionTypes';

const initialState = [
    {
        currentFlow: undefined,
        currentView: 'flow-list'
    }
];

export default function flows (state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return Object.assign([], state, { currentView: action.viewToShow });
        case SET_CURRENT_FLOW:
            return Object.assign([], state, { currentFlow: action.flow });
        default:
            return state;
    }
}
