import { currencies } from "./getCoursesData.js";
import { updateCurrencyCourses, selectDate } from "./getCoursesData.js";

const quotaInput = document.getElementById('quota');
const outputInput = document.getElementById('output');
const btn = document.querySelector('.exchange');

const selectTags = document.querySelectorAll('select');

const dateInput = document.getElementById('date-input');

let currencyFrom;
let currencyTo;
let result;

updateCurrencyCourses();

selectTags.forEach(select => {
    select.addEventListener('change', (e) => {
        if (select.getAttribute('id') === 'select-from') {
            currencyFrom = e.target.value;

            switch (currencyFrom) {
                case 'PLN': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
                case 'USD': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
                case 'EUR': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
                case 'GBP': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
                case 'UAH': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
                case 'CZK': quotaInput.setAttribute('placeholder', currencyFrom);
                    break;
            }

            return currencyFrom;

        } else if (select.getAttribute('id') === 'select-to') {
            currencyTo = e.target.value;
            return currencyTo;
        }

    })
})

function makeCalculation(quota) {
    if (currencyFrom === 'PLN') {
        switch (currencyFrom === 'PLN') {
            case currencyTo === 'USD': result = `${(quota / currencies[0].plnToUSD).toFixed(2)} USD`;
                break;
            case currencyTo === 'EUR': result = `${(quota / currencies[0].plnToEUR).toFixed(2)} EUR`;
                break;
            case currencyTo === 'GBP': result = `${(quota / currencies[0].plnToGBP).toFixed(2)} GBP`;
                break;
            case currencyTo === 'UAH': result = `${(quota / currencies[0].plnToUAH).toFixed(2)} UAH`;
                break;
            case currencyTo === 'CZK': result = `${(quota / currencies[0].plnToCZK).toFixed(2)} CZK`;
                break;
            case currencyTo === 'PLN': result = `${quota} PLN`;
                break;
        }
        return result;

    } else if (currencyFrom === 'USD') {
        switch (currencyFrom === 'USD') {
            case currencyTo === 'PLN': result = `${(quota / currencies[1].usdToPLN).toFixed(2)} PLN`;
                break;
            case currencyTo === 'EUR': result = `${(quota / currencies[1].usdToEUR).toFixed(2)} EUR`;
                break;
            case currencyTo === 'GBP': result = `${(quota / currencies[1].usdToGBP).toFixed(2)} GBP`;
                break;
            case currencyTo === 'UAH': result = `${(quota / currencies[1].usdToUAH).toFixed(2)} UAH`;
                break;
            case currencyTo === 'CZK': result = `${(quota / currencies[1].usdToCZK).toFixed(2)} CZK`;
                break;
            case currencyTo === 'USD': result = `${quota} USD`;
                break;
        }

        return result;
    } else if (currencyFrom === 'EUR') {
        switch (currencyFrom === 'EUR') {
            case currencyTo === 'PLN': result = `${(quota / currencies[2].eurToPLN).toFixed(2)} PLN`;
                break;
            case currencyTo === 'USD': result = `${(quota / currencies[2].eurToUSD).toFixed(2)} USD`;
                break;
            case currencyTo === 'GBP': result = `${(quota / currencies[2].eurToGBP).toFixed(2)} GBP`;
                break;
            case currencyTo === 'UAH': result = `${(quota / currencies[2].eurToUAH).toFixed(2)} UAH`;
                break;
            case currencyTo === 'CZK': result = `${(quota / currencies[2].eurToCZK).toFixed(2)} CZK`;
                break;
            case currencyTo === 'EUR': result = `${quota} EUR`;
                break;
        }

        return result;
    } else if (currencyFrom === 'GBP') {
        switch (currencyFrom === 'GBP') {
            case currencyTo === 'PLN': result = `${(quota / currencies[3].gbpToPLN).toFixed(2)} PLN`;
                break;
            case currencyTo === 'USD': result = `${(quota / currencies[3].gbpToUSD).toFixed(2)} USD`;
                break;
            case currencyTo === 'EUR': result = `${(quota / currencies[3].gbpToEUR).toFixed(2)} EUR`;
                break;
            case currencyTo === 'UAH': result = `${(quota / currencies[3].gbpToUAH).toFixed(2)} UAH`;
                break;
            case currencyTo === 'CZK': result = `${(quota / currencies[3].gbpToCZK).toFixed(2)} CZK`;
                break;
            case currencyTo === 'GBP': result = `${quota} GBP`;
        }

        return result;
    } else if (currencyFrom === 'UAH') {
        switch (currencyFrom === 'UAH') {
            case currencyTo === 'PLN': result = `${(quota / currencies[4].uahToPLN).toFixed(2)} PLN`;
                break;
            case currencyTo === 'USD': result = `${(quota / currencies[4].uahToUSD).toFixed(2)} USD`;
                break;
            case currencyTo === 'EUR': result = `${(quota / currencies[4].uahToEUR).toFixed(2)} EUR`;
                break;
            case currencyTo === 'GBP': result = `${(quota / currencies[4].uahToGBP).toFixed(2)} GBP`;
                break;
            case currencyTo === 'CZK': result = `${(quota / currencies[4].uahToCZK).toFixed(2)} CZK`;
                break;
            case currencyFrom === 'UAH': result = `${quota} UAH`;
                break;
        }

        return result;
    } else if (currencyFrom === 'CZK') {
        switch (currencyFrom === 'CZK') {
            case currencyTo === 'PLN': result = `${(quota / currencies[5].czkToPLN).toFixed(2)} PLN`;
                break;
            case currencyTo === 'USD': result = `${(quota / currencies[5].czkToUSD).toFixed(2)} USD`;
                break;
            case currencyTo === 'EUR': result = `${(quota / currencies[5].czkToEUR).toFixed(2)} EUR`;
                break;
            case currencyTo === 'GBP': result = `${(quota / currencies[5].czkToGBP).toFixed(2)} GBP`;
                break;
            case currencyTo === 'UAH': result = `${(quota / currencies[5].czkToUAH).toFixed(2)} UAH`;
                break;
            case currencyFrom === 'CZK': result = `${quota} CZK`;
                break;
        }

        return result;
    }
}

function exchangeCurrency() {
    const quota = quotaInput.value;

    if (quota !== "") {
        if (currencyFrom && currencyTo) {
            makeCalculation(quota);
        } else {
            alert(`You didn't choose the currency!!!`);
            return;
        }
    } else {
        alert('Quota field cannot be empty!!!');
        return;
    }

    outputInput.setAttribute('value', result);
}

btn.addEventListener('click', exchangeCurrency);

dateInput.addEventListener('change', selectDate);

