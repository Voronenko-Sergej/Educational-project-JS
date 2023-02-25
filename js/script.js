'use strict';

const calculator = require('./modules/calculator');

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



