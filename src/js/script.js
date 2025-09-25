// This file contains the JavaScript code that handles form submissions, logs the user's IP address to retrieve location data, and checks if the country of residence differs from the IP country.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('locationForm');
    const resultDiv = document.getElementById('result');

        document.getElementById('locationForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const gender = document.getElementById('gender').value;
            const age = document.getElementById('age').value.trim();
            const countryOfResidence = document.getElementById('country').value.trim();

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = "Checking your IP location...";

            try {
                // Get IP info
                const ipRes = await fetch('https://ipwho.is/');
                const ipData = await ipRes.json();

                let ipCountry = ipData.country || "Unknown";
                let ipCity = ipData.city || "Unknown";
                let ipISP = ipData.connection && ipData.connection.isp ? ipData.connection.isp : "Unknown";
                let isEU = ipData.is_eu ? "EU" : "Non-EU";

                let html = "" +
                    '<strong>Form Submission:</strong><br>' +
                    'Name: ' + name + '<br>' +
                    'Gender: ' + gender + '<br>' +
                    'Age: ' + age + '<br>' +
                    'Country of Residence: ' + countryOfResidence + '<br><br>' +
                    '<strong>IP Location Info:</strong><br>' +
                    'City: ' + ipCity + '<br>' +
                    'Country: ' + ipCountry + '<br>' +
                    'ISP: ' + ipISP + '<br>' +
                    'Region: ' + isEU + '<br>';

                if (countryOfResidence.toLowerCase() !== ipCountry.toLowerCase()) {
                    html += '<br><span style="color:red;">⚠️ Country of residence does not match your IP country!</span>';
                } else {
                    html += '<br><span style="color:green;">✅ Country of residence matches your IP country.</span>';
                }

                resultDiv.innerHTML = html;

            } catch (err) {
                resultDiv.innerHTML = '<span style="color:red;">Error fetching IP location. Please try again.</span>';
            }
        });

    async function getUserIP() {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    }
});