import { START_TEST, RECEIVE_TEST_COMPLETED } from '../constants/ActionTypes';

const initialState = {
    isTesting: false
};

export default function test (state = initialState, action) {
    switch (action.type) {
        case START_TEST:
            return Object.assign({}, state, {
                isTesting: true,
                status: undefined,
                result: undefined
            });
        case RECEIVE_TEST_COMPLETED:
            return Object.assign({}, state, {
                isTesting: false,
                status: action.status,
                result: action.result
            });

        default:
            return state;
    }
}
