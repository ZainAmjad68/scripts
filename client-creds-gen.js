function generateRandomPassword(length, includeAlphabets = true, includeNumbers = true, includeSymbols = false, clientName = '') {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    if (includeAlphabets) {
        characters += uppercaseLetters + lowercaseLetters;
    }
    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }

    if (characters === '') {
        console.error('Please specify at least one character type (alphabets, numbers, or symbols).');
        return null;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    const modifiedClientName = clientName.replace(/./g, (c, index) => index % 2 === 0 ? c.toLowerCase() : c.toUpperCase());
    const finalPassword = modifiedClientName + password;
    return finalPassword;
}

function generatePassword() {
    const passwordLength = document.getElementById('passwordLength').value;
    const includeAlphabets = document.getElementById('includeAlphabets').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const clientName = document.getElementById('clientName').value;

    const generatedPassword = generateRandomPassword(passwordLength, includeAlphabets, includeNumbers, includeSymbols, clientName);

    if (generatedPassword) {
        document.getElementById('passwordOutput').innerText = 'Generated Password: ' + generatedPassword;
    } else {
        document.getElementById('passwordOutput').innerText = 'Failed to generate password.';
    }
}
