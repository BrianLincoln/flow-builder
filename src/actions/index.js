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

export function addStep(flowId) {
    console.log('~~~~ addStep');
    return { type: types.ADD_STEP, flowId };
}
export function deleteStep(id) {
    return { type: types.DELETE_STEP, id };
}
export function editStep(id, step) {
    return { type: types.EDIT_STEP, id, step };
}


//UI actions
