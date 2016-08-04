// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
document.addEventListener("DOMContentLoaded", function() {
	var createStepButton = document.getElementById("create-step");
	var steps = [];

	createStepButton.onclick = function() {

		var newStepElement = createNewStep();

		document.body.insertBefore(newStepElement, createStepButton);
      //chrome.tabs.executeScript(null, {file:"selection.js"});
	};

//keeping reference for executing stuff on page
	//toggleSelectionButton.onclick = function() {
	//	chrome.tabs.executeScript({
	//		file: "selection.js"
	//	});

	//};
});

var createNewStep = function() {
	var newStepElement = document.createElement("div");
	newStepElement.class = "new-step";

	var newStepTextNode = document.createTextNode("Sweet new step");
	newStepElement.appendChild(newStepTextNode);

	var newStepTypeSelection = createNewStepTypeSelection();
	console.log(newStepTypeSelection);
	newStepElement.appendChild(newStepTypeSelection);

	return newStepElement;
};

var createNewStepTypeSelection = function() {
	var stepTypes = [
		{
			"type": "loadPage",
			"label": "Load a page"
		},
		{
			"type": "editField",
			"label": "Edit a field"
		},
		{
			"type": "click",
			"label": "Click an element"
		},
		{
			"type": "checkElementExists",
			"label": "Check if an element exists"
		}
	];

	var newStepElementTypeSelection = document.createElement("div");
	newStepElementTypeSelection.class = "new-step-type-selection";

	var newStepElementTypeSelectionTitle = document.createElement("h2");
	newStepElementTypeSelection.appendChild(newStepElementTypeSelectionTitle);

	var newStepElementTypeSelectionOptionList = document.createElement("ul");
	newStepElementTypeSelection.appendChild(newStepElementTypeSelectionOptionList);

	for(var i = 0; i < stepTypes.length; i++) {
		var stepElementOption = document.createElement("li");
		stepElementOption.class = "new-step-type-option";

		var stepElementOptionInput = document.createElement("input");
		stepElementOptionInput.type = "radio";
		stepElementOptionInput.name = "step-type";
		stepElementOption.appendChild(stepElementOptionInput);

		var stepElementOptionLabel = document.createElement("label");
		var stepElementOptionLabelTextNode = document.createTextNode(stepTypes[i].label);
		stepElementOptionLabel.appendChild(stepElementOptionLabelTextNode);
		stepElementOption.appendChild(stepElementOptionLabel);

		newStepElementTypeSelection.appendChild(stepElementOption);
	}

	return newStepElementTypeSelection;

}
