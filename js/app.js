let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("calendar-days");
    const weekdaysContainer = document.getElementById("weekdays");
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    monthYear.innerText = new Intl.DateTimeFormat('nl-NL', { month: 'long', year: 'numeric' }).format(currentDate);
    
    const weekdays = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
    weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join('');
    
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    
    let days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(`<div class="empty-day">${prevLastDate - (firstDay - 1) + i}</div>`);
    }
    for (let day = 1; day <= lastDate; day++) {
        days.push(`<div class="day">${day}</div>`);
    }
    let nextMonthDay = 1;
    while (days.length % 7 !== 0) {
        days.push(`<div class="empty-day">${nextMonthDay++}</div>`);
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
