let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("calendar-days");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    monthYear.textContent = new Intl.DateTimeFormat('nl-NL', { month: 'long', year: 'numeric' }).format(currentDate);
    
    let days = [...Array(firstDay).keys()].map(i => `<div class="empty-day">${prevMonthLastDate - (firstDay - 1) + i}</div>`);
    for (let i = 1; i <= lastDate; i++) {
        days.push(`<div class="day">${i}</div>`);
    }
    while (days.length % 7) {
        days.push(`<div class="empty-day"></div>`);
    }

    daysContainer.innerHTML = days.join('');
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar();
}

document.getElementById('prev').addEventListener('click', () => changeMonth(-1));
document.getElementById('next').addEventListener('click', () => changeMonth(1));

renderCalendar();
