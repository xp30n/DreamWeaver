document.getElementById('create-account').addEventListener('click', function() {
    // Hide the login form
    document.getElementById('login-form').classList.add('hidden');

    // Show the signup form
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('back-to-login').addEventListener('click', function() {
    // Hide the signup form
    document.getElementById('signup-form').classList.add('hidden');

    // Show the login form
    document.getElementById('login-form').classList.remove('hidden');
});

// Login Button functionality
document.querySelector('.login-button').addEventListener('click', function() {
    // Fade out elements
    fadeOutElements();

    // Simulate login success and transition to main interface after fade out
    setTimeout(function() {
        window.location.href = "main-interface.html"; // Replace with your actual page or app logic
    }, 1000); // 1000ms for the fade-out effect
});

// Signup Button functionality
document.querySelector('.signup-button').addEventListener('click', function() {
    // Fade out elements
    fadeOutElements();

    // Simulate signup success and transition to main interface after fade out
    setTimeout(function() {
        window.location.href = "main-interface.html"; // Replace with your actual page or app logic
    }, 1000); // 1000ms for the fade-out effect
});

// Function to fade out elements
function fadeOutElements() {
    // Get the elements to fade out
    const elementsToFade = [
        document.querySelector('.logo'),
        document.querySelector('.tagline'),
        ...document.querySelectorAll('.input-field'), // Select all input fields
        document.querySelector('.login-form'),
        document.querySelector('.signup-form')
    ];

    // Add fade-out class to each element
    elementsToFade.forEach(function(element) {
        element.classList.add('fade-out');
    });
}