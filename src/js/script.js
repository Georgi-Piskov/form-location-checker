// This file contains the JavaScript code that handles form submissions, logs the user's IP address to retrieve location data, and checks if the country of residence differs from the IP country.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('locationForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;
        const countryOfResidence = document.getElementById('country').value;

        const ipData = await fetch('https://ipwho.is/' + await getUserIP());
        const ipLocation = await ipData.json();

        const ipCountry = ipLocation.country;

        const isDifferentCountry = countryOfResidence !== ipCountry;

        resultDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Country of Residence: ${countryOfResidence}</p>
            <p>IP Country: ${ipCountry}</p>
            <p>Different Country: ${isDifferentCountry}</p>
        `;
    });

    async function getUserIP() {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    }
});