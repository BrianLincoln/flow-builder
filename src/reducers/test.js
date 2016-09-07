import { START_TEST, RECEIVE_TEST_COMPLETED } from '../constants/ActionTypes';

const initialState = {
    status: 'notStarted'
};

export default function test (state = initialState, action) {
    switch (action.type) {
        case START_TEST:
            return Object.assign({}, state, {
                status: 'running',
                result: undefined
            });
        case RECEIVE_TEST_COMPLETED:
            console.log('RECEIVE_TEST_COMPLETED');
            console.log(action);
            return Object.assign({}, state, {
                status: action.result,
                failureMessage: action.failureMessage,
                failedStep: action.failedStep
            });

        default:
            return state;
    }
}
