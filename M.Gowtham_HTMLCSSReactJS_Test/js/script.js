document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters with one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    alert('Form submitted successfully!'); 
});

function validateEmail(email) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
}
