'use strict';
import forms from './modules/forms';
import modal from './modules/modal';
import slaider from './modules/slaider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import carts from './modules/carts';
import calculator from './modules/calculator';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);
    carts();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slaider();
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items');
    timer('2023-03-01', '.timer');
    calculator();
});



