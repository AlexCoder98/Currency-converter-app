export function updateCurrencyArray(usd, eur, gbp, uah, czk, currencies) {

    // creating pln courses object
    const plnCurrencyCourses = {};

    plnCurrencyCourses.plnToUSD = usd;
    plnCurrencyCourses.plnToEUR = eur;
    plnCurrencyCourses.plnToGBP = gbp;
    plnCurrencyCourses.plnToUAH = uah;
    plnCurrencyCourses.plnToCZK = czk;

    // creating usd courses object
    const usdCurrencyCourses = {};

    const usdToPLN = 1 / usd;
    const usdToEUR = eur / usd;
    const usdToGBP = gbp / usd;
    const usdToUAH = uah / usd;
    const usdToCZK = czk / usd;

    usdCurrencyCourses.usdToPLN = usdToPLN;
    usdCurrencyCourses.usdToEUR = usdToEUR;
    usdCurrencyCourses.usdToGBP = usdToGBP;
    usdCurrencyCourses.usdToUAH = usdToUAH;
    usdCurrencyCourses.usdToCZK = usdToCZK;

    // creating eur courses object
    const eurCurrencyCourses = {};

    const eurToPLN = 1 / eur;
    const eurToUSD = usd / eur;
    const eurToGBP = gbp / eur;
    const eurToUAH = uah / eur;
    const eurToCZK = czk / eur;

    eurCurrencyCourses.eurToPLN = eurToPLN;
    eurCurrencyCourses.eurToUSD = eurToUSD;
    eurCurrencyCourses.eurToGBP = eurToGBP;
    eurCurrencyCourses.eurToUAH = eurToUAH;
    eurCurrencyCourses.eurToCZK = eurToCZK;

    // creating gbp courses object
    const gbpCurrencyCourses = {};

    const gbpToPLN = 1 / gbp;
    const gbpToUSD = usd / gbp;
    const gbpToEUR = eur / gbp;
    const gbpToUAH = uah / gbp;
    const gbpToCZK = czk / gbp;

    gbpCurrencyCourses.gbpToPLN = gbpToPLN;
    gbpCurrencyCourses.gbpToUSD = gbpToUSD;
    gbpCurrencyCourses.gbpToEUR = gbpToEUR;
    gbpCurrencyCourses.gbpToUAH = gbpToUAH;
    gbpCurrencyCourses.gbpToCZK = gbpToCZK;

    // creating uah courses object
    const uahCurrencyCourses = {};

    const uahToPLN = 1 / uah;
    const uahToUSD = usd / uah;
    const uahToEUR = eur / uah;
    const uahToGBP = gbp / uah;
    const uahToCZK = czk / uah;

    uahCurrencyCourses.uahToPLN = uahToPLN;
    uahCurrencyCourses.uahToUSD = uahToUSD;
    uahCurrencyCourses.uahToEUR = uahToEUR;
    uahCurrencyCourses.uahToGBP = uahToGBP;
    uahCurrencyCourses.uahToCZK = uahToCZK;

    // creating czk courses object
    const czkCurrencyCourses = {};

    const czkToPLN = 1 / czk;
    const czkToUSD = usd / czk;
    const czkToEUR = eur / czk;
    const czkToGBP = gbp / czk;
    const czkToUAH = uah / czk;

    czkCurrencyCourses.czkToPLN = czkToPLN;
    czkCurrencyCourses.czkToUSD = czkToUSD;
    czkCurrencyCourses.czkToEUR = czkToEUR;
    czkCurrencyCourses.czkToGBP = czkToGBP;
    czkCurrencyCourses.czkToUAH = czkToUAH;

    currencies.push(plnCurrencyCourses, usdCurrencyCourses, eurCurrencyCourses, gbpCurrencyCourses, uahCurrencyCourses, czkCurrencyCourses);
}