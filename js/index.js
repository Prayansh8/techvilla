const sample = require();
console.log(sample)
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayData(data) {
    const jsonDataContainer = document.getElementById('json-data');
    const jsonDataString = JSON.stringify(data, null, 2);
    jsonDataContainer.textContent = jsonDataString;
}
