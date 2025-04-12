// Theme Switching
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'mobile-menu-btn';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add hamburger to nav
    nav.insertBefore(hamburger, navLinks);
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.innerHTML = navLinks.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
};

// Initialize mobile menu if screen width is small
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        }
    } else {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.remove();
            document.querySelector('.nav-links').classList.remove('show');
        }
    }
});

// Add loading animation to project images
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Reviews data
const reviews = [
    {
        name: "John Smith",
        business: "Tech Solutions Inc.",
        rating: 5,
        review: "Mark delivered an exceptional website that perfectly captured our brand identity. His attention to detail and technical expertise are outstanding."
    },
    {
        name: "Sarah Johnson",
        business: "Creative Designs Co.",
        rating: 4,
        review: "Working with Mark was a pleasure. He understood our vision and created a beautiful, functional website that exceeded our expectations."
    },
    {
        name: "Michael Brown",
        business: "StartUp Hub",
        rating: 5,
        review: "Mark's expertise in web development helped us launch our platform ahead of schedule. His communication and problem-solving skills are top-notch."
    },
    {
        name: "Emily Davis",
        business: "Digital Marketing Pro",
        rating: 5,
        review: "The website Mark created for us has significantly improved our online presence. His technical skills and creative approach are impressive."
    },
    {
        name: "Robert Wilson",
        business: "E-commerce Solutions",
        rating: 4,
        review: "Mark's work on our e-commerce platform was exceptional. He delivered a user-friendly interface that has increased our sales."
    },
    {
        name: "Jennifer Lee",
        business: "Creative Agency",
        rating: 5,
        review: "Mark's work on our website was exceptional. He understood our needs perfectly and delivered beyond our expectations."
    }
];

// Function to create star rating HTML
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to create a single review card
function createReviewCard(review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-card';
    
    reviewElement.innerHTML = `
        <div class="review-header">
            <div class="reviewer-info">
                <h3>${review.name}</h3>
                <p class="business">${review.business}</p>
            </div>
            <div class="star-rating">
                ${createStarRating(review.rating)}
            </div>
        </div>
        <p class="review-text">${review.review}</p>
    `;
    
    return reviewElement;
}

// Variables to track displayed reviews
let displayedReviews = 0;
const reviewsPerPage = 3;

// Function to load reviews
function loadReviews(loadMore = false) {
    const reviewsContainer = document.querySelector('.reviews-container');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    // Clear container if not loading more
    if (!loadMore) {
        reviewsContainer.innerHTML = '';
        displayedReviews = 0;
    }
    
    // Calculate how many reviews to show
    const reviewsToShow = Math.min(displayedReviews + reviewsPerPage, reviews.length);
    
    // Add reviews
    for (let i = displayedReviews; i < reviewsToShow; i++) {
        reviewsContainer.appendChild(createReviewCard(reviews[i]));
    }
    
    // Update displayed count
    displayedReviews = reviewsToShow;
    
    // Show/hide load more button
    if (loadMoreBtn) {
        if (displayedReviews >= reviews.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Function to initialize reviews section
function initReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    
    // Create load more button
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'load-more-btn';
    loadMoreBtn.textContent = 'Load More Reviews';
    loadMoreBtn.addEventListener('click', () => loadReviews(true));
    
    // Add button after container
    reviewsContainer.parentNode.insertBefore(loadMoreBtn, reviewsContainer.nextSibling);
    
    // Load initial reviews
    loadReviews();
}

// Initialize reviews when the page loads
document.addEventListener('DOMContentLoaded', initReviews); 
