const randomize = require('randomatic');

function generateRandomPassword(length, includeAlphabets = true, includeNumbers = true, includeSymbols = false, clientName = '') {
    let pattern = '';

    if (includeAlphabets) {
        pattern += 'aA'; // lowercase and uppercase letters
    }

    if (includeNumbers) {
        pattern += '0';
    }

    if (includeSymbols) {
        pattern += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    if (pattern === '') {
        console.log('Please specify at least one character type (alphabets, numbers, or symbols).');
        return null;
    }

    try {
        const password = randomize(pattern, length);
        const modifiedClientName = clientName.replace(/./g, (c, index) => index % 2 === 0 ? c.toLowerCase() : c.toUpperCase());
        const finalPassword = modifiedClientName + password;
        return finalPassword;
    } catch (error) {
        console.error('Error generating password:', error);
        return null;
    }
}

// Example usage:
const passwordLength = 12; // Change this to the desired length of the password
const clientName = 'royaloaks'; // Optional client name
const generatedPassword = generateRandomPassword(passwordLength, true, true, false, clientName);
if (generatedPassword) {
    console.log('Generated Password:', generatedPassword);
} else {
    console.log('Failed to generate password.');
}
