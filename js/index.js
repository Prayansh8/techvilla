
        // Fetch JSON data from URL
        fetch('https://api.example.com/data')
            .then(response => {
                // Check if response is successful (status code 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse JSON response
                return response.json();
            })
            .then(data => {
                // Process JSON data
                displayData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // Function to display JSON data
        function displayData(data) {
            const jsonDataContainer = document.getElementById('json-data');
            // Convert JSON object to string for display
            const jsonDataString = JSON.stringify(data, null, 2);
            // Display JSON data in the HTML
            jsonDataContainer.textContent = jsonDataString;
        }
    