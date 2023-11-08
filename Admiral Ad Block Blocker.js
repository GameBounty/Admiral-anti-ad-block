// ==UserScript==
// @name         Admiral Ad Block Blocker
// @namespace    http://your-namespace.com
// @version      1.0
// @description  hehe admiral go brrrrrrr
// @author       zdashero
// @match        https://qiwi.gg/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    function hideElements() {
        const elementsToHide = document.querySelectorAll('.fEy1Z2XT');
        for (const element of elementsToHide) {
            element.style.display = 'none';
        }
    }
    const checkInterval = 10;
    setInterval(hideElements, checkInterval);
})();
