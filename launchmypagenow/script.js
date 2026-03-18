// Get all sections
const sections = document.querySelectorAll('.section');
const progressBar = document.querySelector('.progress-bar');
const domainInput = document.getElementById('customDomain');

// Function to update progress bar
function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;

    // Check if we're at step 7
    const step7 = document.getElementById('step7');
    if (step7) {
        const step7Rect = step7.getBoundingClientRect();
        if (step7Rect.top <= windowHeight * 0.5) {
            progressBar.classList.add('completed');
        } else {
            progressBar.classList.remove('completed');
        }
    }
}

// Function to scroll to next section
function scrollToNextSection(currentSectionId) {
    const currentSection = document.getElementById(currentSectionId);
    if (!currentSection) {
        console.error('Current section not found:', currentSectionId);
        return;
    }

    // Get all sections as an array
    const sectionsArray = Array.from(sections);
    const currentIndex = sectionsArray.indexOf(currentSection);
    
    if (currentIndex === -1) {
        console.error('Current section not found in sections array');
        return;
    }

    const nextSection = sectionsArray[currentIndex + 1];
    if (!nextSection) {
        console.error('No next section found');
        return;
    }

    // Hide all sections after the current one
    sectionsArray.forEach((section, index) => {
        if (index > currentIndex) {
            section.classList.remove('visible');
        }
    });

    // Scroll to next section and make it visible
    nextSection.scrollIntoView({ behavior: 'smooth' });
    nextSection.classList.add('visible');
}

// Function to open the user's website
function openWebsite() {
    const domain = document.getElementById('customDomain').value.trim();
    if (domain) {
        window.open(`https://${domain}`, '_blank');
    } else {
        alert('Please enter your domain name in Step 1 to view your website.');
    }
}

// Handle Enter key for all sections
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const currentSection = document.elementFromPoint(
            window.innerWidth / 2,
            window.innerHeight / 2
        ).closest('.section');
        
        if (currentSection) {
            const currentSectionId = currentSection.id;
            if (currentSectionId !== 'step7') { // Don't trigger on the last section
                e.preventDefault();
                scrollToNextSection(currentSectionId);
            }
        }
    }
});

// Event listeners
window.addEventListener('scroll', () => {
    updateProgress();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show first section immediately
    sections[0].classList.add('visible');
    
    // Hide all other sections
    sections.forEach((section, index) => {
        if (index > 0) {
            section.classList.remove('visible');
        }
    });
    
    // Initial progress bar update
    updateProgress();

    // Scroll to top on page load
    window.scrollTo(0, 0);
});

// Ensure page starts at top on refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}); 
