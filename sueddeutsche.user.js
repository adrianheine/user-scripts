// ==UserScript==
// @name        NoScript und Sueddeutsche.de
// @namespace   https://adrianheine.de
// @description:de Macht noscript-Popup bei der SZ unschädlich
// @include     http://www.sueddeutsche.de/*
// @version     1
// @grant       none
// ==/UserScript==

document.body.querySelector('noscript .no-js').style.position = 'initial'
