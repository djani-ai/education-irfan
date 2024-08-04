document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Terima kasih atas pesan Anda!');
        contactForm.reset();
    });
});
