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
module.exports = slaider;