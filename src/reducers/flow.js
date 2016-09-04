import { EDIT_STEP, REQUEST_FLOW, RECEIVE_FLOW } from '../constants/ActionTypes';

const initialState = {
    isFetching: false
};

export default function flow (state = initialState, action) {
    switch (action.type) {
        case REQUEST_FLOW:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_FLOW:
            return Object.assign({}, state, {
                id: action.flow._id,
                isFetching: false,
                lastUpdated: action.receivedAt,
                steps: action.flow.steps,
                name: action.flow.name
            });



        case EDIT_STEP:
            return Object.assign({}, state, { steps: state.steps.map((step) => {
                if (step.id === action.id) {
                    return Object.assign({}, step, action.step);
                }
                return step;
            })
         });

        default:
            return state;
    }
}
