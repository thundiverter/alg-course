const timetableElem = document.querySelector('#timetable-body');

let timetableDate = new Date();
timetableDate.setDate(7);
timetableDate.setMonth(8);
timetableDate.setFullYear(2023);
timetableDate.setHours(0);
timetableDate.setMinutes(0);
timetableDate.setSeconds(0);
timetableDate.setMilliseconds(0);

let today = new Date();

for (let i = 0; i < 18; i++) {
    const diff = timetableDate.getTime() - today.getTime();
    timetableElem.innerHTML += `
    <tr ${(diff <= 0) ? 'style="color: gray;"' : ''}>
        <td>${i + 1}</td>
        <td>${timetableDate.getDate()} ${months[timetableDate.getMonth()]} ${timetableDate.getFullYear()}</td>
    </tr>
    `;
    timetableDate.setDate(timetableDate.getDate() + 7);
}