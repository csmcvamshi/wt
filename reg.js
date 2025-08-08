// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('RegForm');
    const submitBtn = document.getElementById('btn');
    const resetBtn = document.getElementById('btn1');
    submitBtn.addEventListener('click', validateForm);
    resetBtn.addEventListener('click', resetForm);
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const fatherName = document.getElementById('fathername').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmpassword').value.trim();
        const email = document.getElementById('email').value.trim();
        const dob = document.getElementById('dob').value;
        const phone = document.getElementById('phoneno').value.trim();
        const address = document.getElementById('address').value.trim();
        const image = document.getElementById('image').files[0];

        const nameRegex = /^[a-zA-Z\s]+$/;
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        
        // Clear previous errors
        clearErrors();
        
        let isValid = true;
        
        // Validate name
        if (name === '' || !nameRegex.test(name)) {
            showError('name', 'Please enter a valid name (letters only)');
            isValid = false;
        }
        
        // Validate father name
        if (fatherName === '' || !nameRegex.test(fatherName)) {
            showError('fathername', 'Please enter a valid father name (letters only)');
            isValid = false;
        }
        
        // Validate username
        if (username === '' || !usernameRegex.test(username)) {
            showError('username', 'Please enter a valid username (letters, numbers, underscore only)');
            isValid = false;
        }
        
        // Validate password
        if (password === '' || password.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            showError('password', 'Password must contain uppercase, lowercase, number and special character');
            isValid = false;
        }
        
        // Validate confirm password
        if (confirmPassword === '' || password !== confirmPassword) {
            showError('confirmpassword', 'Passwords do not match');
            isValid = false;
        }
        
        // Validate email
        if (email === '' || !emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate DOB
        if (dob === '') {
            showError('dob', 'Please select your date of birth');
            isValid = false;
        }
        
        // Validate gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            alert('Please select your gender');
            isValid = false;
        }
        
        // Validate languages
        const languages = document.querySelectorAll('input[name="check"]:checked');
        if (languages.length === 0) {
            alert('Please select at least one language');
            isValid = false;
        }
        
        // Validate phone
        if (phone === '' || !phoneRegex.test(phone)) {
            showError('phoneno', 'Please enter a valid 10-digit phone number');
            isValid = false;
        }
        
        // Validate address
        if (address === '') {
            showError('address', 'Please enter your address');
            isValid = false;
        }
        
        // Validate image
        if (!image) {
            alert('Please upload an image');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid - you can submit the form or show success message
            alert('Registration successful!');
            console.log('Form data:', {
                name,
                fatherName,
                username,
                email,
                dob,
                gender: gender.value,
                languages: Array.from(languages).map(l => l.value),
                phone,
                address,
                image: image.name
            });
            
            // Optionally reset form after successful submission
            // resetForm();
        }
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.style.borderColor = 'red';
        field.title = message;
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.textContent = message;
        
        // Insert after the field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }
    
    function clearErrors() {
        // Remove all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        // Reset field borders
        const fields = form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
            field.title = '';
        });
    }
    
    function resetForm() {
        form.reset();
        clearErrors();
    }
    
    // Real-time validation removed - simple checks only
});
