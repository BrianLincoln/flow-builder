import { ADD_FLOW, DELETE_FLOW, EDIT_FLOW } from '../constants/ActionTypes';

const initialState = [
    {
        'id': '2gzz24abasd',
        'name': 'Flow Numero Uno',
        'steps': [
            {
                'actionType': 'pageLoad',
                'url': 'http://google.com'
            },
            {
                'actionType': 'input',
                'inputType': 'text',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-input',
                'inputValue': '1830713AH'
            },
            {
                'actionType': 'click',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-button'
            },
            {
                'actionType': 'confirmElementExists',
                'selectorType': 'class',
                'selectorValue': 'tour-header-wrapper'
            }
        ]
    },
    {
        'id': 'u434s9ffs9h',
        'name': 'Flow 2',
        'steps': [
            {
                'actionType': 'pageLoad',
                'url': 'http://google.com'
            },
            {
                'actionType': 'input',
                'inputType': 'text',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-input',
                'inputValue': '1830713AH'
            },
            {
                'actionType': 'click',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-button'
            },
            {
                'actionType': 'confirmElementExists',
                'selectorType': 'class',
                'selectorValue': 'tour-header-wrapper'
            }
        ]
    }
];

export default function flows (state = initialState, action) {
    switch (action.type) {
        case ADD_FLOW:
            return [
                {
                    id: 'abc1234',
                    name: '',
                    steps: []
                },
                ...state
            ];
        case DELETE_FLOW:
            return state.filter((flow) => {
                flow.id !== action.id;
            });
        case EDIT_FLOW:
            return state.map((flow) => {
                Object.assign({}, flow, { name: action.name, steps: action.steps });
            });
        default:
            return state;
    }
}
