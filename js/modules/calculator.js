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
                        sex = 447.6;
                        document.querySelector('#famen').classList.add('calculating__choose-item_active');
                        document.querySelector('#men').classList.remove('calculating__choose-item_active');
                        console.log(element);
                        break;
                    case 'men':
                        sex = 88.36;
                        document.querySelector('#men').classList.add('calculating__choose-item_active');
                        document.querySelector('#famen').classList.remove('calculating__choose-item_active');
                        break;
                    case 'low':
                        active = 1.375;
                        document.querySelector('#low').classList.add('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'small':
                        active = 1.2;
                        document.querySelector('#small').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#medium').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'medium':
                        active = 1.55;
                        document.querySelector('#medium').classList.add('calculating__choose-item_active');
                        document.querySelector('#low').classList.remove('calculating__choose-item_active');
                        document.querySelector('#small').classList.remove('calculating__choose-item_active');
                        document.querySelector('#high').classList.remove('calculating__choose-item_active');
                        break;
                    case 'high':
                        active = 1.725;
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
                        height = event.target.value;

                    } else if (event.target.id === 'weight') {
                        weight = event.target.value;
                    } else {
                        age = event.target.value;
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