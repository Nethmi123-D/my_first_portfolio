// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill out all fields');
                return;
            }
            
            // In a real scenario, you would send this data to a server
            console.log('Form submitted with:', { name, email, message });
            
            // Reset form and show success message
            contactForm.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
    
    // Add animation to skills progress bars on scroll
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    
    if (skillsSection && progressBars.length) {
        window.addEventListener('scroll', function() {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';
                });
            }
        });
    }
});