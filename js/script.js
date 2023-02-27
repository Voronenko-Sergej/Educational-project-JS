'use strict';
import forms from './modules/forms.js';
import modal from './modules/modal.js';
import slaider from './modules/slaider.js';
import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import carts from './modules/carts.js';
import calculator from './modules/calculator.js';
window.addEventListener('DOMContentLoaded', function () {
    carts();
    forms();
    modal();
    slaider();
    tabs();
    timer();
    calculator();
});



