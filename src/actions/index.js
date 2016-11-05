import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

export function fetchFlow(flowId) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        return fetch('/api/flows/' + flowId)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(receiveFlow(data));
        });
    };
}

export function fetchTest(flowId) {
    return (dispatch) => {
        dispatch(requestTest(flowId));

        return fetch('/api/tests/' + flowId)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(receiveTest(data));
        });
    };
}

export function editFlowName(flowId, name) {
    return (dispatch) => {
        dispatch(requestFlow(flowId));

        const body = {
            name
        };

        return fetch('/api/flows/' + flowId, {
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

        return fetch('/api/flows/' + flowId, {
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

        return fetch('/api/flows/' + flowId + '/steps/' + stepId, {
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

        return fetch('/api/flows/' + flowId + '/steps/' + stepId, {
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
        return fetch('/api/flows/' + flowId + '/reorder/' + stepId, {
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

export function requestTest(flowId) {
    return {
        type: types.REQUEST_TEST
    };
}

export function receiveTest(test) {
    return {
        type: types.RECEIVE_TEST,
        receivedAt: Date.now(),
        test
    };
}



export function runTest(flow) {
    return (dispatch) => {
        const startTime = Date.now();

        dispatch(startTest(flow.id, startTime));

        const body = {
            flow
        };
        return fetch('/api/test-runner', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        .then(() => {
            dispatch(followTestStatus(flow.id, startTime));
        });
    };
}



export function followTestStatus(flowId, startTime) {
    return (dispatch) => {

        return fetch('/api/tests/' + flowId, {
            method: 'GET',
        })
        .then((res) => {
            if (res.ok) {
                const resJson = res.json();
                return resJson;
            } else {
                return;
            }
        })
        .then((resJson) => {
            if (resJson.status === 'complete' && startTime < Date.parse(resJson.finished)) {
                dispatch(receiveTestComplete(flowId, resJson.result, resJson.status, resJson.screenshots, resJson.failure));
            } else {
                setTimeout(() => {
                    dispatch(followTestStatus(flowId, startTime));
                }, 500);
            }
        });
    };
}

export function startTest(flowId, startTime) {
    return {
        type: types.START_TEST,
        flowId,
        startTime
    };
}

export function receiveTestComplete(flowId, result, status, screenshots, failure) {
    return {
        type: types.RECEIVE_TEST_COMPLETED,
        receivedAt: Date.now(),
        flowId,
        result,
        status,
        screenshots,
        failureMessage: failure !== null ? failure.reason : undefined,
        failedStep: failure !== null ? failure.stepId : undefined
    };
}
