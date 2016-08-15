import { ADD_FLOW, DELETE_FLOW, EDIT_FLOW, EDIT_FLOW_NAME, ADD_STEP, DELETE_STEP, EDIT_STEP } from '../constants/ActionTypes';

const initialState = [
    {
        'id': '2gzz24abasd',
        'name': 'Flow Numero Uno',
        'steps': [
            {
                'id': 'j23lj23l4j24',
                'actionType': 'pageLoad',
                'url': 'http://google.com'
            },
            {
                'id': '88234jkhkhk24',
                'actionType': 'input',
                'inputType': 'text',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-input',
                'inputValue': '1830713AH'
            },
            {
                'id': 'aawer09808er',
                'actionType': 'click',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-button'
            },
            {
                'id': '87zxcv789sjp',
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
                'id': 'mmnb35po35',
                'actionType': 'pageLoad',
                'url': 'http://google.com'
            },
            {
                'id': '546727mnb832bnm',
                'actionType': 'input',
                'inputType': 'text',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-input',
                'inputValue': '1830713AH'
            },
            {
                'id': '16vmbb234mnbk',
                'actionType': 'click',
                'selectorType': 'class',
                'selectorValue': 'content-section-view-trip-button'
            },
            {
                'id': '235262klh2',
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
                    id: Math.random(), //this obviously sucks and should not be how ids are created
                    name: 'new flow',
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
                if (flow.id === action.id) {
                    return Object.assign({}, flow, { id: action.id, name: action.name, steps: action.steps });
                }
                return flow;
            });
        case EDIT_FLOW_NAME:
            return state.map((flow) => {
                if (flow.id === action.id) {
                    return Object.assign({}, flow, { id: action.id, name: action.name, steps: flow.steps });
                }
                return flow;
            });
        case ADD_STEP:
            return state.map((flow) => {
                if (flow.id === action.flowId) {
                    const steps = flow.steps.slice();

                    steps.push({
                        id: Math.random(), //this obviously sucks and should not be how ids are created
                        'actionType': 'confirmElementExists',
                        'selectorType': 'class',
                        'selectorValue': 'tour-header-wrapper'
                    });

                    return Object.assign({}, flow, { id: action.flowId, name: flow.name, steps });
                }
                return flow;
            });
        case DELETE_STEP:
            return state;
        case EDIT_STEP:
            return state.map((flow) => {
                const updatedSteps = flow.steps.map((step) => {
                    if (step.id === action.id) {
                        return Object.assign({}, step, action.step);
                    }
                    return step;
                });
                return Object.assign({}, flow, { id: flow.id, name: flow.name, steps: updatedSteps });
            });

        default:
            return state;
    }
}
