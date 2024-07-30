document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Simulate form submission delay (e.g., sending data to a server)
        setTimeout(function() {
            // Hide the form (optional)
            form.style.display = 'none';
            
            // Show the success message
            successMessage.style.display = 'block';
        }, 500); // Adjust the delay if needed
    });
});