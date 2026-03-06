document.addEventListener('DOMContentLoaded', () => {
    const agriForm = document.getElementById('agriForm');

    agriForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const expertise = document.getElementById('expertise').value;

        // Simple validation check
        if(name === '' || email === '') {
            alert('Please fill in the required fields.');
            return;
        }

        // Success Message (Simulation)
        alert(`Thank you, ${name}! Your request for ${expertise || 'general'} advice has been sent to our agricultural extension services.`);
        
        // Reset form
        agriForm.reset();
    });

    // Smooth Scroll effect for Nav links (Handled by CSS, but good for older browsers)
    console.log("Agricultural Hub Initialized Successfully.");
});