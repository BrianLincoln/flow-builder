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
        console.log('~~~editFlowName');
        console.log(body);
        console.log(JSON.stringify(body));
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
    return () => {
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
        });
    };
}
