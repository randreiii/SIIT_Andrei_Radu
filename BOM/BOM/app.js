//Add there radio buttons with available languages (e.g., en-US, ro-RO)

document.getElementById('romanian').checked = true;
localStorage.getItem('language')

//As an extra you can implement some radio buttons which are used to select the currency and store the information in the cookies.
//You can implement the two functionalities in one app or in 2 separate apps.

const currency = document.cookie ?
    document.cookie
        .split('; ')
        .find(row => row.startsWith('currency='))
        .split('=')[1] : 'lei';

document.getElementById(currency).checked = true;

const setCookie = (value) => {
    document.cookie = `currency=${value};`;
}