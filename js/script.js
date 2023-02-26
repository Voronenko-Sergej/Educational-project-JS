'use strict';
import forms from './modules/forms';
import modal from './modules/modal';
import slaider from './modules/slaider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import carts from './modules/carts';
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



