import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

export function fetchFlow(flowId) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        return fetch('http://localhost:8080/api/flows/' + flowId)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(receiveFlow(data));
        });
    };
}

export function editFlowName(flowId, name) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        const body = {
            name
        };

        return fetch('http://localhost:8080/api/flows/' + flowId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(() => {
            dispatch(fetchFlow(flowId));
        });
    };
}

export function addStep(flowId) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        return fetch('http://localhost:8080/api/flows/' + flowId, {
            method: 'POST',
            body: {
                flowId
            }
        })
        .then(() => {
            dispatch(fetchFlow(flowId));
        });
    };
}

export function editStep(flowId, stepId, step) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        return fetch('http://localhost:8080/api/flows/' + flowId + '/steps/' + stepId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(step)
        })
        .then(() => {
            dispatch(fetchFlow(flowId));
        });
    };
}

export function removeStep(flowId, stepId) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        return fetch('http://localhost:8080/api/flows/' + flowId + '/steps/' + stepId, {
            method: 'DELETE'
        })
        .then(() => {
            dispatch(fetchFlow(flowId));
        });
    };
}

export function moveStep(flowId, stepId, direction) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        const body = {
            direction
        };
        return fetch('http://localhost:8080/api/flows/' + flowId + '/reorder/' + stepId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(() => {
            dispatch(fetchFlow(flowId));
        });
    };
}

export function requestFlow(flowId) {
    return {
        type: types.REQUEST_FLOW,
        flowId
    };
}

export function receiveFlow(flow) {
    return {
        type: types.RECEIVE_FLOW,
        receivedAt: Date.now(),
        flow
    };
}



export function runTest(flow) {
    return (dispatch) => {
        dispatch(startTest(flow.id));

        const body = {
            flow
        };
        return fetch('http://localhost:8080/api/test-runner', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        .then(() => {
            dispatch(followTestStatus(flow.id));
        });
    };
}



export function followTestStatus(flowId) {
    return (dispatch) => {

        return fetch('http://localhost:8080/api/tests/' + flowId, {
            method: 'GET',
        })
        .then((res) => {
            return res.json();
        })
        .then((resJSON) => {
            if (resJSON.status === 'complete') {
                dispatch(receiveTestComplete(flowId, resJSON.result, resJSON.status));
            } else {
                setTimeout(() => {
                    dispatch(followTestStatus(flowId));
                }, 2000);
            }

        });
    };
}

export function startTest(flowId) {
    return {
        type: types.START_TEST,
        flowId
    };
}

export function receiveTestComplete(flowId, result, status) {
    return {
        type: types.RECEIVE_TEST_COMPLETED,
        receivedAt: Date.now(),
        flowId,
        result,
        status
    };
}
