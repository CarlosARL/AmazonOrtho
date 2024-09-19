$(document).ready(function() {
    // Hero slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
        
    });
    $('.products-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
    
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    });
    
    
    
    // Função para ajustar a altura do hero
    function adjustHeroHeight() {
        const headerHeight = $('header').outerHeight();
        $('#hero').css('padding-top', headerHeight + 'px');
        $('.hero-slider').css('height', `calc(100vh - ${headerHeight}px)`);
    }

    // Chamar a função no carregamento e no redimensionamento da janela
    adjustHeroHeight();
    $(window).resize(adjustHeroHeight);                                                                                             
    // Fix for Slick Slider content opacity
    $('.hero-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.hero-content').css('opacity', '0');
    });

    $('.hero-slider').on('afterChange', function(event, slick, currentSlide){
        $('.hero-content').css('opacity', '1');
    });

    // Specialties slider
    $('.specialties-slider').slick({
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

    // Google Maps
    function initMap() {
        const mapOptions = {
            zoom: 5,
            center: {lat: -14.235, lng: -51.925}, // Center of Brazil
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        };

        const map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Add markers for each branch
        const branches = [
            {lat: -23.550520, lng: -46.633309, title: 'São Paulo'},
            {lat: -22.906847, lng: -43.172897, title: 'Rio de Janeiro'},
            {lat: -19.917299, lng: -43.934117, title: 'Belo Horizonte'},
            {lat: -30.034647, lng: -51.217658, title: 'Porto Alegre'},
            {lat: -15.793889, lng: -47.882778, title: 'Brasília'}
        ];

        branches.forEach(branch => {
            const marker = new google.maps.Marker({
                position: {lat: branch.lat, lng: branch.lng},
                map: map,
                title: branch.title,
                icon: {
                    url: 'images/marker-icon.png',
                    scaledSize: new google.maps.Size(30, 30)
                }
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `<h3>${branch.title}</h3><p>Filial Mashtom Ortopedics</p>`
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        });
    }

    // Call initMap when the Google Maps API is loaded
    window.initMap = initMap;

    // Load recent events
    function loadRecentEvents() {
        const eventsContainer = document.querySelector('.events-grid');
        
        // Simulated events data (replace with actual API call in production)
        const events = [
            {title: 'Congresso Brasileiro de Ortopedia 2023', date: '15-17 Ago, 2023', image: 'images/event-1.jpg'},
            {title: 'Workshop de Novas Tecnologias em Próteses', date: '5 Set, 2023', image: 'images/event-2.jpg'},
            {title: 'Simpósio Internacional de Cirurgia do Joelho', date: '22-23 Set, 2023', image: 'images/event-3.jpg'}
        ];

        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event-item');
            eventElement.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}" loading="lazy">
                </div>
                <div class="event-content">
                    <h4>${event.title}</h4>
                    <p class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
                    <a href="events.html" class="btn btn-secondary">Saiba Mais</a>
                </div>
            `;
            eventsContainer.appendChild(eventElement);
        });
    }

    loadRecentEvents();

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Form validation for newsletter subscription
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Here you would typically send the email to your server
                console.log('Subscribing email:', email);
                this.reset();
                alert('Obrigado por se inscrever em nossa newsletter!');
            } else {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

// Testimonials carousel
if (document.querySelector('.testimonials-carousel')) {
    $('.testimonials-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
}

// Products showcase
if (document.querySelector('.products-showcase')) {
    $('.products-showcase').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

// Smooth scroll to top
const scrollToTopButton = document.querySelector('.scroll-to-top');
if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}