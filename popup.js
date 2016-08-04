// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
document.addEventListener('DOMContentLoaded', function() {
  var createStepButton = document.getElementById("create-step");
  var toggleSelectionButton = document.getElementById("toggle-selection");
  var steps = [];

  createStepButton.onclick = function() {
      console.log("create step");

      var newStepElement = createNewStep();

      document.body.insertBefore(newStepElement, createStepButton);
      //chrome.tabs.executeScript(null, {file:"selection.js"});
  };

  toggleSelectionButton.onclick = function() {
      console.log("click");

      chrome.tabs.executeScript({
        file: "selection.js"
      });
      //chrome.tabs.executeScript(null, {file:"selection.js"});
  };
});

var createNewStep = function() {
  var newStepElement = document.createElement("div");
  newStepElement.class = "new-step";

  var newStepTextNode = document.createTextNode("Sweet new step");
  newStepElement.appendChild(newStepTextNode);

  return newStepElement;
}
