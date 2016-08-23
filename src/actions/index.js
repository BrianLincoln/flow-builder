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
            dispatch(receiveFlow(data.flow));
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

        .then(fetch('http://localhost:8080/api/flows/' + flowId))
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(receiveFlow(flowId, data.flow));
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
