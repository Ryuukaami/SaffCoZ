// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// hover effect
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

// Banner Rotation
document.addEventListener('DOMContentLoaded', function() {
    const bannerData = [
        {
            title: 'The Role Model',
            subtitle: 'Creed Aventus',
            description: 'The amount of other houses copying this DNA says enough about it',
            image: '../images/creedaventusp.jpg',
            link: 'products.html'
        },
        {
            title: 'Limited Edition',
            subtitle: 'Spice Bomb Extreme',
            description: 'Elegant and mysterious evening scent',
            image: '../images/spicebomb.jpg',
            link: 'products.html'
        },
        {
            title: 'Introducing Our Latest Fragrance',
            subtitle: 'JPG Elixir',
            description: 'A sweet and warm scent that captivates the senses',
            image: '../images/jpgelixir.jpg',
            link: 'products.html'
        }
    ];

    const bannerTitle = document.getElementById('banner-title');
    const bannerSubtitle = document.getElementById('banner-subtitle');
    const bannerDescription = document.getElementById('banner-description');
    const bannerImage = document.getElementById('banner-image');
    const bannerLink = document.querySelector('.newest-banner .cta-button');

    let currentBannerIndex = 0;

    function rotateBanner() {
        const banner = bannerData[currentBannerIndex];
        
        bannerTitle.style.opacity = 0;
        bannerSubtitle.style.opacity = 0;
        bannerDescription.style.opacity = 0;
        bannerImage.style.opacity = 0;

        setTimeout(() => {
            bannerTitle.textContent = banner.title;
            bannerSubtitle.textContent = banner.subtitle;
            bannerDescription.textContent = banner.description;
            bannerImage.src = banner.image;
            bannerLink.href = banner.link;

            bannerTitle.style.opacity = 1;
            bannerSubtitle.style.opacity = 1;
            bannerDescription.style.opacity = 1;
            bannerImage.style.opacity = 1;
        }, 500);

        currentBannerIndex = (currentBannerIndex + 1) % bannerData.length;
    }

    bannerTitle.style.transition = 'opacity 0.5s ease';
    bannerSubtitle.style.transition = 'opacity 0.5s ease';
    bannerDescription.style.transition = 'opacity 0.5s ease';
    bannerImage.style.transition = 'opacity 0.5s ease';

    setInterval(rotateBanner, 5000);
});


// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        if (!data.fullName || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Form submitted:', data);
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
}