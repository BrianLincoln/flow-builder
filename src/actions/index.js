import * as types from '../constants/ActionTypes';

export function addFlow() {
    return { type: types.ADD_FLOW };
}
export function deleteFlow(id) {
    return { type: types.DELETE_FLOW, id };
}
export function editFlow(id, name, steps) {
    return { type: types.EDIT_FLOW, id, name, steps };
}


//UI actions
export function showFlowList() {
    return { type: types.SHOW_FLOW_LIST };
}
export function showFlowEditor(id) {
    return { type: types.SHOW_FLOW_EDITOR, id };
}
