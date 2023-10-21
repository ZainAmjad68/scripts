function generateClientCredentials() {
    const clientName = document.getElementById('clientName').value;
    const applicationDescription = document.getElementById('applicationDescription').value;
    const facilities = document.getElementById('facilities').value.split(',').map(facility => ({ facilityId: facility.trim() }));

    const password = generateRandomPassword(16); // Using the provided password generator function
    const clientId = clientName.toLowerCase() + randomString(26);
    const clientSecret = randomString(50);

    const clientData = {
        password: password,
        clientId: clientId,
        homepageUrl: 'https://www.caremerge.com',
        callbackUrl: "empty",
        applicationDescription: applicationDescription,
        channelName: applicationDescription + ' - Ticket Number', // Update with actual ticket number
        clientSecret: clientSecret,
        facilities: facilities,
        applicationName: applicationDescription, // Assuming applicationName should be the same as channelName
        clientGrants: [
            "client_credentials"
        ],
        username: "abbySeniorLivingApi"
    };

    const output = JSON.stringify({
        client_id: clientId,
        client_data: clientData
    }, null, 4);

    document.getElementById('credentialsOutput').innerText = output;
}

function randomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
