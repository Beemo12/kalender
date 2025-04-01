let date = new Date();

const render = () => {
    let year = date.getFullYear(), month = date.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    let prevLastDate = new Date(year, month, 0).getDate();
    
    document.getElementById("month-year").textContent = new Intl.DateTimeFormat('nl-NL', { month: 'long', year: 'numeric' }).format(date);

    let days = [...Array(firstDay).fill().map((_, i) => `<div class="empty-day">${prevLastDate - firstDay + i + 1}</div>`)];
    days.push(...[...Array(lastDate).keys()].map(i => `<div class="day">${i + 1}</div>`));
    while (days.length % 7) days.push(`<div class="empty-day"></div>`);

    document.getElementById("calendar-days").innerHTML = days.join('');
};

document.getElementById('prev').onclick = () => (date.setMonth(date.getMonth() - 1), render());
document.getElementById('next').onclick = () => (date.setMonth(date.getMonth() + 1), render());

render();
