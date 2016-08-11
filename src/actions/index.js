import * as types from '../constants/ActionTypes';

export function addFlow() {
    return { type: types.ADD_FLOW };
}
export function deleteFlow(id) {
    return { type: types.DELETE_FLOW, id };
}
export function editFlow(id, name, steps) {
    console.log("*edit flow");
    console.log(name);
    return { type: types.EDIT_FLOW, id, name, steps };
}


//UI actions
export function changeView(viewToShow) {
    return { type: types.CHANGE_VIEW, viewToShow };
}
export function setCurrentFlow(flow) {
    return { type: types.SET_CURRENT_FLOW, flow };
}
