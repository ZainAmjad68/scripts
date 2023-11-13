let facilitiesArray = [];

function addFacility() {
    const facilityInput = document.getElementById('facilityInput');
    const facilityValue = facilityInput.value.trim();
    if (facilityValue) {
        facilitiesArray.push({ facilityId: facilityValue });
        facilityInput.value = '';
        updateFacilitiesList();
    }
}

function updateFacilitiesList() {
    const facilitiesContainer = document.getElementById('facilitiesContainer');
    const facilitiesList = facilitiesArray.map(facility => facility.facilityId).join(', ');

    facilitiesContainer.innerHTML = `
        <input type="text" id="facilityInput">
        <button onclick="addFacility()">Add Facility</button>
        <div class="facilities-list">
            <strong>Facilities:</strong>
            <ul>
                ${facilitiesArray.map(facility => `<li>${facility.facilityId}</li>`).join('')}
            </ul>
        </div>
    `;
}

function generateClientCredentials() {
    const clientName = document.getElementById('clientName').value;
    const applicationDescription = document.getElementById('applicationDescription').value;
    const password = randomStringGenerator(16); // Using the provided password generator function
    const clientId = clientName.toLowerCase() + randomStringGenerator(26);
    const clientSecret = randomStringGenerator(50);

    const clientData = {
        password: password,
        clientId: clientId,
        homepageUrl: 'https://www.caremerge.com',
        callbackUrl: "empty",
        applicationDescription: applicationDescription,
        channelName: applicationDescription + ' - Ticket Number', // Update with actual ticket number
        clientSecret: clientSecret,
        facilities: facilitiesArray,
        applicationName: applicationDescription, // Assuming applicationName should be the same as channelName
        clientGrants: [
            "client_credentials"
        ],
        username: "abbySeniorLivingApi"
    };

    const output = JSON.stringify({
        client_id: clientId,
        client_data: clientData
    }, null, 2);

    document.getElementById('credentialsOutput').innerText = output;
}

function randomStringGenerator(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
