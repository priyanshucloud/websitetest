// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainMenu.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Current year for copyright
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    let slideInterval;
    const slideTime = 5000; // 5 seconds
    
    // Initialize slider
    function initSlider() {
        updateSlider();
        startSlideShow();
        
        // Event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Pause on hover
        slider.addEventListener('mouseenter', pauseSlideShow);
        slider.addEventListener('mouseleave', startSlideShow);
    }
    
    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
        
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetInterval();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        resetInterval();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
        resetInterval();
    }
    
    // Start automatic slideshow
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideTime);
    }
    
    // Pause slideshow
    function pauseSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Reset interval timer
    function resetInterval() {
        pauseSlideShow();
        startSlideShow();
    }
    
    // Initialize the slider
    if (slider) {
        initSlider();
    }
});
