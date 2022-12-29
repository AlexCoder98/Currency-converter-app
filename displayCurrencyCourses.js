export function displayCurrencyCourses(usd, eur, gbp, uah) {

    const date = new Date();
    const dateToDisplay = new Intl.DateTimeFormat('en-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);

    document.querySelector('.current-date').textContent = dateToDisplay;

    document.querySelector('.usd').textContent = `${(usd).toFixed(2)} PLN`;
    document.querySelector('.eur').textContent = `${(eur).toFixed(2)} PLN`;
    document.querySelector('.gbp').textContent = `${(gbp).toFixed(2)} PLN`;
    document.querySelector('.uah').textContent = `${(uah).toFixed(2)} PLN`;

    const today = date.toISOString().slice(0, 10);

    const dateInput = document.getElementById('date-input');
    dateInput.setAttribute('value', today);
    dateInput.setAttribute('max', today);

}

