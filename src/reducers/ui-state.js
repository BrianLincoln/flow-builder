import { CHANGE_VIEW, SET_CURRENT_FLOW } from '../constants/ActionTypes';

const initialState = [
    {
        currentFlowId: undefined,
        currentView: 'flow-list'
    }
];



export default function flows (state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            console.log("CHANGE_VIEW");
            console.log(action.viewToShow);
            return Object.assign([], state, { currentView: action.viewToShow });
        case SET_CURRENT_FLOW:
            console.log("SET_CURRENT_FLOW");
            console.log(action.flowId);
            return Object.assign([], state, { currentFlowId: action.flowId });
        default:
            return state;
    }
}
