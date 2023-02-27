'use strict';
<<<<<<< HEAD
import forms from './modules/forms.js';
import modal from './modules/modal.js';
import slaider from './modules/slaider.js';
import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import carts from './modules/carts.js';
import calculator from './modules/calculator.js';
=======

const calculator = require('./modules/calculator');

>>>>>>> parent of ae80aab (the type of export and import of modules has been changed)
window.addEventListener('DOMContentLoaded', function () {
    const forms = require('./modules/forms'),
        modal = require('./modules/modal'),
        slaider = require('./modules/slaider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        carts = require('./modules/carts'),
        calculator = require('./modules/calculator');

    carts();
    forms();
    modal();
    slaider();
    tabs();
    timer();
    calculator();
});



