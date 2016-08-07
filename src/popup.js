import FlowManager from 'react';

// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
document.addEventListener('DOMContentLoaded', () => {
    const createStepButton = document.getElementById('create-step');

    createStepButton.onclick = () => {
        const newStepElement = createNewStep();
        document.body.insertBefore(newStepElement, createStepButton);
       //chrome.tabs.executeScript(null, {file:"selection.js"});
    };
});

const createNewStep = () => {
    const newStepElement = document.createElement('div');
    newStepElement.class = 'new-step';

    const newStepTypeSelection = createNewStepTypeSelection();
    newStepElement.appendChild(newStepTypeSelection);

    return newStepElement;
};

const createNewStepTypeSelection = () => {
    const stepTypes = [
        {
            'type': 'loadPage',
            'label': 'Load a page'
        },
        {
            'type': 'editField',
            'label': 'Edit a field'
        },
        {
            'type': 'click',
            'label': 'Click an element'
        },
        {
            'type': 'checkElementExists',
            'label': 'Check if an element exists'
        }
    ];

    const newStepElementTypeSelection = document.createElement('div');
    newStepElementTypeSelection.class = 'new-step-type-selection';

    const newStepElementTypeSelectionTitle = document.createElement('h2');
    newStepElementTypeSelection.appendChild(newStepElementTypeSelectionTitle);

    const newStepElementTypeSelectionOptionList = document.createElement('ul');
    newStepElementTypeSelection.appendChild(newStepElementTypeSelectionOptionList);

    for (let i = 0; i < stepTypes.length; i++) {
        const stepElementOption = document.createElement('li');
        stepElementOption.class = 'new-step-type-option';

        const stepElementOptionInput = document.createElement('input');
        stepElementOptionInput.type = 'radio';
        stepElementOptionInput.name = 'step-type';
        stepElementOption.appendChild(stepElementOptionInput);

        const stepElementOptionLabel = document.createElement('label');
        const stepElementOptionLabelTextNode = document.createTextNode(stepTypes[i].label);
        stepElementOptionLabel.appendChild(stepElementOptionLabelTextNode);
        stepElementOption.appendChild(stepElementOptionLabel);

        newStepElementTypeSelection.appendChild(stepElementOption);
    }

    return newStepElementTypeSelection;
};
