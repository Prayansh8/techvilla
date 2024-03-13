fetch('./doctordetail.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            createCard(item);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function createCard(item) {
    const cardContainer = document.getElementById('card-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.Name}" class="doctor-image" id="doctor-${item.ID}">
      <h2>Name: ${item.Name}</h2>
      <p>Contact: ${item.Contact}</p>
      <p>Specilization: ${item.Specilization}</p>
      <p>Experience: ${item.Experience}</p>
  `;
    cardContainer.appendChild(card);
}