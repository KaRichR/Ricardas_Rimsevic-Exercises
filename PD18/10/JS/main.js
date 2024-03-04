document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', validateRegistration);

    function validateRegistration(event) {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const username = document.getElementById('username').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if (!fullName || !email || !password || !username || !phoneNumber || !confirmPassword || !gender) {
            alert('Please fill in all fields.');
            event.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
            return;
        }

        if (email.indexOf('@') === -1) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        if (!/^\d+$/.test(phoneNumber)) {
            alert('Please enter a valid phone number (numeric characters only).');
            event.preventDefault();
            return;
        }

        alert('Registration successful!');
        event.preventDefault();
    }
});
