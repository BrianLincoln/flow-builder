import React from 'react';
import SelectStepType from './select-step-type';
import FlowResult from './flow-result';

let flow = [
    {  //eventually dynamic
        'accountId': 'g1brqz0a54b',
        'actions': [
            {
                'actionType': 'pageLoad',
                'url': 'http://eftours.com'
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

const FlowCreator = () => {
    return (
        <div>
            <button id="create-step" onClick={handleClick} >Add Step</button>
            <SelectStepType />
            <FlowResult flow={flow} />
        </div>
    );
};

const handleClick = (e) => {
    chrome.tabs.executeScript(null, { file:'src/browser-scripts/selection.js' });
    console.log(e);
};

export default FlowCreator;
