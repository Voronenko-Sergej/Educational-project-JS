/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
    const gender = document.querySelectorAll('#gender div'),
        physicalActivity = document.querySelectorAll('.calculating__choose_big div');
    let sex, height, weight, age, active;

    function calc() {
        if (sex && height && weight && age && active) {
            document.querySelector('.calculating__result span').textContent = Math.round((sex + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * active);
        } else {
            document.querySelector('.calculating__result span').textContent = '______';
        }
        console.log(typeof (sex), typeof (height), typeof (weight), typeof (age), typeof (active));
    }
    calc();
    function choiceVales(item) {
        item.forEach((element) => {
            element.addEventListener('click', (e) => {
                switch (element.id) {
                    case 'famen':
                        localStorage.setItem('sex', 447.6);
                        sex = +localStorage.getItem('sex');
                        document.querySelector('#famen').classList.add('calculating__choose-item_active');
                        document.querySelector('#men').classList.remove('calculating__choose-item_active');
                        break;
                    case 'men':
                        localStorage.setItem('sex', 88.36);
                        sex = +localStorage.getItem('sex');
                        document.querySelector('#men').classList.add('calculating__choose-item_active');
                        document.querySelector('#famen').classList.remove('calculating__choose-item_active');
                        break;
                    case 'low':
                        localStorage.setItem('active', 1.375);
                        active = +localStorage.getItem('active');
                        document.querySelector('#low').classList.add('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'small':
                        localStorage.setItem('active', 1.2);
                        active = +localStorage.getItem('active');
                        document.querySelector('#small').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'medium':
                        localStorage.setItem('active', 1.55);
                        active = +localStorage.getItem('active');
                        document.querySelector('#medium').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'high':
                        localStorage.setItem('active', 1.725);
                        active = +localStorage.getItem('active');
                        document.querySelector('#high').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        break;

                }
                calc();
            });

            element.addEventListener('input', (event) => {
                if (Number(event.target.value)) {
                    if (event.target.id === 'height') {
                        localStorage.setItem('height', event.target.value);
                        height = +localStorage.getItem('height');
                        // height = event.target.value;

                    } else if (event.target.id === 'weight') {
                        localStorage.setItem('weight', event.target.value);
                        weight = +localStorage.getItem('weight');
                    } else {
                        localStorage.setItem('age', event.target.value);
                        age = +localStorage.getItem('age');
                    }
                } else {
                    event.target.value = '';
                }
            });
        });
    }


    //  жінки 447.6
    // чолові 88.36


    choiceVales(gender);
    choiceVales(document.querySelectorAll('.calculating__choose_medium input'));
    choiceVales(physicalActivity);


    // Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
    // Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);




}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/carts.js":
/*!*****************************!*\
  !*** ./js/modules/carts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function carts() {
    //karct
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu  ')
        .then(date => {
            date.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carts);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId) {
    //forms
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postDate)('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

// Modal
function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    // const modalTimerId = setTimeout(openModal, 300000);
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slaider.js":
/*!*******************************!*\
  !*** ./js/modules/slaider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slaider() {
    // slaider
    const itemSlaid = document.querySelectorAll('.offer__slide');
    const btmPrev = document.querySelector('.offer__slider-prev');
    const btmNext = document.querySelector('.offer__slider-next');

    const current = document.querySelector('#current');
    let indexSlaid = 1;
    let total = document.querySelector('#total');

    if (indexSlaid < 10) {
        total.textContent = `0${itemSlaid.length}`;
    }

    if (indexSlaid > 10) {
        total.textContent = `${itemSlaid.lenght}`;

    }

    function showSlaider(n) {
        if (n > itemSlaid.length) {
            indexSlaid = 1;

        }
        if (n < 1) {
            indexSlaid = itemSlaid.length;
        }

        itemSlaid.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        itemSlaid[indexSlaid - 1].classList.add('show');
        itemSlaid[indexSlaid - 1].classList.remove('hide');

        if (itemSlaid.length < 10) {
            current.textContent = `0${indexSlaid}`;
        } else {
            current.textContent = indexSlaid;
        }
    }

    function plusSlides(n) {
        showSlaider(indexSlaid += n);
    }
    btmPrev.addEventListener('click', function () {
        plusSlides(-1);
    });

    btmNext.addEventListener('click', function () {
        plusSlides(1);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slaider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector) {
    //tabs
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(dedlainDate, timerSelector) {
    //Timer 
    let dedlain = dedlainDate;

    function getTimeRemelding(endtime) {
        let timeDifference = Date.parse(endtime) - Date.parse(Date());
        let day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        let seconds = Math.floor((timeDifference / 1000) % 60);

        if (timeDifference <= 0) {
            return {
                'total': dedlain,
                'days': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            };
        } else {
            return {
                'total': dedlain,
                'days': day,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selektor, endTime) {

        const timer = document.querySelector(selektor),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemelding(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock(timerSelector, dedlain);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postDate": () => (/* binding */ postDate)
/* harmony export */ });
const postDate = async (url, date) => {
    const rest = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: date
    });
    return await rest.json();

};

async function getResource(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slaider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slaider */ "./js/modules/slaider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_carts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carts */ "./js/modules/carts.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");










window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 5000);
    (0,_modules_carts__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__["default"])('form', modalTimerId);
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    (0,_modules_slaider__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])('2023-03-01', '.timer');
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map