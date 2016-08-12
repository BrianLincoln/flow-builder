import { } from '../constants/ActionTypes';

const initialState = [
    {
        currentFlow: undefined,
        currentView: 'flow-list'
    }
];

export default function flows (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
