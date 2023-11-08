const datetimeElem = document.querySelector('#date-time');
const date = new Date();
const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

datetimeElem.innerText = `Учебный предмет • ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;