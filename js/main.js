document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current navigation item
    function setActiveNavItem() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    setActiveNavItem();

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Lazy loading images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // Animate on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });}

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load
    
        // Count up animation for experience section
        const experienceNumber = document.querySelector('.experience-number');
        if (experienceNumber) {
            const countUp = () => {
                const target = parseInt(experienceNumber.dataset.count);
                const count = parseInt(experienceNumber.innerText);
                const increment = target / 200;
    
                if (count < target) {
                    experienceNumber.innerText = Math.ceil(count + increment);
                    setTimeout(countUp, 10);
                } else {
                    experienceNumber.innerText = target;
                }
            }
    
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    countUp();
                }
            });
    
            observer.observe(experienceNumber);
        }
    
        // Product slider initialization
        if ($('.products-slider').length) {
            $('.products-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    
        // Form validation
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const nameInput = this.querySelector('input[name="name"]');
                const emailInput = this.querySelector('input[name="email"]');
                const messageInput = this.querySelector('textarea[name="message"]');
    
                if (validateForm(nameInput, emailInput, messageInput)) {
                    // Here you would typically send the form data to your server
                    console.log('Form submitted:', {
                        name: nameInput.value,
                        email: emailInput.value,
                        message: messageInput.value
                    });
                    this.reset();
                    alert('Obrigado por entrar em contato! Responderemos em breve.');
                }
            });
        }
    
        function validateForm(nameInput, emailInput, messageInput) {
            let isValid = true;
    
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Por favor, insira seu nome');
                isValid = false;
            } else {
                showSuccess(nameInput);
            }
    
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Por favor, insira seu e-mail');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Por favor, insira um e-mail válido');
                isValid = false;
            } else {
                showSuccess(emailInput);
            }
    
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Por favor, insira sua mensagem');
                isValid = false;
            } else {
                showSuccess(messageInput);
            }
    
            return isValid;
        }
    
        function showError(input, message) {
            const formControl = input.parentElement;
            formControl.className = 'form-control error';
            const small = formControl.querySelector('small');
            small.innerText = message;
        }
    
        function showSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }
    
        function isValidEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    });