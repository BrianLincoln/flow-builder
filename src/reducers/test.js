import { REQUEST_TEST, RECEIVE_TEST, START_TEST, RECEIVE_TEST_COMPLETED } from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    status: 'notStarted'
};

export default function test (state = initialState, action) {
    switch (action.type) {
        case REQUEST_TEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TEST:
            return Object.assign({}, state, {
                status: action.test.status,
                screenshots: action.test.screenshots,
                failureMessage: action.test.failureMessage,
                failedStep: action.test.failedStep,
                isFetching: false
            });
        case START_TEST:
            return Object.assign({}, state, {
                startTime: action.startTime,
                status: 'running'
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
