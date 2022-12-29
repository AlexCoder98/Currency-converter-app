import { displayCurrencyCourses } from "./displayCurrencyCourses.js";
import { updateCurrencyArray } from "./updateCurrencyArray.js";
import { createCurrencyTable } from "./createCurrencyTable.js";

export const currencies = [];

const getCoursesBtn = document.querySelector('.get-courses');

const today = new Date().toISOString().slice(0, 10);

let selectedDate;

function sendXMLHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                const data = JSON.parse(xhr.response);
                resolve(data);
            }
        }

        xhr.onerror = () => {
            reject('Something went wrong!')
        }

        xhr.send();

    })
    return promise;
}

export function updateCurrencyCourses() {
    sendXMLHttpRequest('GET', 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json').then(data => {

        const usd = data[0].rates[1].mid;
        const eur = data[0].rates[7].mid;
        const gbp = data[0].rates[10].mid;
        const uah = data[0].rates[11].mid;
        const czk = data[0].rates[13].mid;


        displayCurrencyCourses(usd, eur, gbp, uah);
        updateCurrencyArray(usd, eur, gbp, uah, czk, currencies)
        createCurrencyTable(data);
    }).catch(err => console.log({ err }))
}

export function selectDate(e) {
    selectedDate = e.target.value;
}

function getCoursesForACertianDate(date = today) {
    sendXMLHttpRequest('GET', `https://api.nbp.pl/api/exchangerates/tables/a/${date}/?format=json`).then(data => {

        createCurrencyTable(data);

    }).catch(err => alert(err));
}

getCoursesBtn.addEventListener('click', () => {
    getCoursesForACertianDate(selectedDate);
})