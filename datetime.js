const datetimeElem = document.querySelector('#date-time');
const date = new Date();
const months = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря'
}

datetimeElem.innerText = `Учебный предмет • ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;