const currencyTableContainer = document.querySelector('.currency-table-container');

const tableHeaders = ['Number', 'Currency', 'Code', 'Rate'];

let tableIsCreated = false;
let oldTable = '';

export function createCurrencyTable(data) {
    const courses = data[0].rates;

    if (tableIsCreated) {
        currencyTableContainer.removeChild(oldTable);
        tableIsCreated = false;
        oldTable = '';
    }

    const table = document.createElement('table');
    currencyTableContainer.appendChild(table);

    const headerRow = document.createElement('thead');

    let number = 1;

    for (const headerElement of tableHeaders) {
        const tableHeaderRowCell = document.createElement('th');
        tableHeaderRowCell.setAttribute('class', 'header-name-cell');
        tableHeaderRowCell.textContent = headerElement;
        headerRow.appendChild(tableHeaderRowCell);
    }

    for (const element of courses) {
        const tableRow = document.createElement('tr');
        const numberColumn = document.createElement('th');
        numberColumn.setAttribute('class', 'header-number-cell');
        tableRow.appendChild(numberColumn);
        numberColumn.textContent = number;
        for (const [key, value] of Object.entries(element)) {
            const tableCell = document.createElement('td');
            tableCell.setAttribute('class', key);
            tableCell.textContent = value
            tableRow.appendChild(tableCell);
        }
        number++;
        table.appendChild(headerRow);
        table.appendChild(tableRow);
    }
    tableIsCreated = true;
    oldTable = table;
}