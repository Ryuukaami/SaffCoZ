// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to product items
const productItems = document.querySelectorAll('.best-seller-item, .discount-item');
productItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Banner auto-rotation (simple implementation)
const newestBanner = document.querySelector('.newest-banner');
const bannerImages = ['newest-perfume-1.png', 'newest-perfume-2.png', 'newest-perfume-3.png'];
let currentImageIndex = 0;

function rotateBannerImage() {
    const bannerImage = newestBanner.querySelector('.banner-image img');
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImage.src = `images/${bannerImages[currentImageIndex]}`;
}

// Rotate banner image every 5 seconds
setInterval(rotateBannerImage, 5000);