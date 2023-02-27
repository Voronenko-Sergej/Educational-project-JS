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
        console.log(sex, height, weight, age, active);
    }
    calc();
    function choiceVales(item) {
        item.forEach((element) => {
            element.addEventListener('click', (e) => {
                switch (element.id) {
                    case 'famen':
                        localStorage.setItem('sex', 447.6);
                        sex = localStorage.getItem('sex');
                        document.querySelector('#famen').classList.add('calculating__choose-item_active');
                        document.querySelector('#men').classList.remove('calculating__choose-item_active');
                        break;
                    case 'men':
                        localStorage.setItem('sex', 88.36);
                        sex = localStorage.getItem('sex');
                        document.querySelector('#men').classList.add('calculating__choose-item_active');
                        document.querySelector('#famen').classList.remove('calculating__choose-item_active');
                        break;
                    case 'low':
                        localStorage.setItem('active', 1.375);
                        active = localStorage.getItem('active');
                        document.querySelector('#low').classList.add('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'small':
                        localStorage.setItem('active', 1.2);
                        active = localStorage.getItem('active');
                        document.querySelector('#small').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'medium':
                        localStorage.setItem('active', 1.55);
                        active = localStorage.getItem('active');
                        document.querySelector('#medium').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'high':
                        localStorage.setItem('active', 1.725);
                        active = localStorage.getItem('active');
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
                        height = localStorage.getItem('height');
                        // height = event.target.value;

                    } else if (event.target.id === 'weight') {
                        localStorage.setItem('weight', event.target.value);
                        weight = localStorage.getItem('weight');
                    } else {
                        localStorage.setItem('age', event.target.value);
                        age = localStorage.getItem('age');
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
export default calculator;