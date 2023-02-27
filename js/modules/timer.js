function timer() {
    //Timer 
    let dedlain = '2023-03-01';

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
    setClock('.timer', dedlain);
}
module.exports = timer;