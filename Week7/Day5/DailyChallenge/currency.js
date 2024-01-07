// Daily Challenge: Currency Converter

// 1. The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// 2. First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// 3. To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// 4. Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.

const getCurrencies = async() => {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/2b13423dfbac423a2cf0dfe3/codes');
        if(response.ok) {
            const obj = await response.json();
            for (code of obj.supported_codes) {
                const optionFrom = document.createElement('option');
                optionFrom.value = code[0];
                optionFrom.text = `${code[0]} - ${code[1]}`;
                const optionTo = optionFrom.cloneNode(true);
                document.getElementById('from').append(optionFrom);
                document.getElementById('to').append(optionTo);
            }
        } else {
            throw new Error("Unable to fetch currencies");
        }
    } catch(error) {
        console.log(error);
    }
};

getCurrencies();

const convert = async(codeFrom, codeTo, amount) => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/2b13423dfbac423a2cf0dfe3/pair/${codeFrom}/${codeTo}/${amount}`);
        if(response.ok) {
            const obj = await response.json();
            showResult(obj.conversion_result);
        } else {
            throw new Error("Unable to convert");
        }
    } catch(error) {
        console.log(error);
        showResult(error);
    }
};

const showResult = (result) => {
    if (typeof result === 'number') {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = 'N/A';
    }
};

const from = document.getElementById('from');
const to = document.getElementById('to');
const amount = document.getElementById('amount');

const getAmount = (event) => {
    event.preventDefault();
    convert(from.value, to.value, amount.value);
};

const switchCurrencies = () => {
    const fromValue = from.value;
    const toValue = to.value;
    from.value = toValue;
    to.value = fromValue;
    if (amount.value) {
        convert(from.value, to.value, amount.value);
    }
};