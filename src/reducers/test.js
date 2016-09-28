import { START_TEST, RECEIVE_TEST_COMPLETED } from '../constants/ActionTypes';

const initialState = {
    status: 'notStarted'
};

export default function test (state = initialState, action) {
    switch (action.type) {
        case START_TEST:
            return Object.assign({}, state, {
                startTime: action.startTime,
                status: 'running',
                result: undefined
            });
        case RECEIVE_TEST_COMPLETED:
            return Object.assign({}, state, {
                status: action.result,
                screenshots: action.screenshots,
                failureMessage: action.failureMessage,
                failedStep: action.failedStep
            });

        default:
            return state;
    }
}
