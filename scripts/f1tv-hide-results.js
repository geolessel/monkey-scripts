// ==UserScript==
// @name         F1TV Result Hider
// @namespace    http://geoffreylessel.com/
// @version      0.1.1
// @description  Hide results of completed races while navigating F1TV
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/geolessel/monkey-scripts/master/scripts/f1tv-hide-results.js
// @downloadURL  https://raw.githubusercontent.com/geolessel/monkey-scripts/master/scripts/f1tv-hide-results.js
// @author       Geoffrey Lessel
// @match        https://f1tv.formula1.com/*
// @copyright    2018 Geoffrey Lessel
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  console.log("Hiding podium results");

  function hidePodium(e) {
    let el = e.context;
    let originalHTML = el.innerHTML;
    el.innerHTML = "Podium hidden (click to reveal)";
    el.onclick = function() { el.innerHTML = originalHTML; };
  }

  // the podium elements are brought in via ajax, so we need to wait for them
  // using waitForKeyElements

  // most of the pages that have the podium displayed
  waitForKeyElements("section[class*='podium-winners']", hidePodium);
  // https://f1tv.formula1.com/en/archive pages
  waitForKeyElements("div[class*='gp-module__winners']", hidePodium);
})();
