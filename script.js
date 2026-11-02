// Wait for the HTML document to fully load before running scripts
$(document).ready(function() {

    

    /* Animations */
    $('section, .image.row img, .card').addClass('scroll-reveal');

    function checkScroll() {
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();

        $('.scroll-reveal').each(function() {
            let elementOffset = $(this).offset().top;
            if (elementOffset < (scrollTop + windowHeight - 100)) {
                $(this).addClass('active');
            }
        });
    }
    // Run on load and on scroll
    $(window).on('scroll', checkScroll);
    checkScroll(); 


    /* Carousel Logic */
    if ($('.carousel-track').length > 0) {
        let currentIndex = 0;
        const slides = $('.carousel-slide');
        const totalSlides = slides.length;

        function updateCarousel() {
            $('.carousel-track').css('transform', `translateX(-${currentIndex * 100}%)`);
        }

        $('.next').click(function() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        $('.prev').click(function() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        setInterval(function() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 4000);
    }


    /* Accordion logic */
    if ($('.accordion-header').length > 0) {
        $('.accordion-header').click(function() {
            let content = $(this).next('.accordion-content');
            
            $(this).toggleClass('active');
            content.slideToggle(300);

            $('.accordion-content').not(content).slideUp(300);
            $('.accordion-header').not(this).removeClass('active');
        });
    }


    /* Interactive Map */
    if ($('#map').length > 0) {
        // Coordinates for Jane Furse
        let map = L.map('map').setView([-24.9145, 29.7345], 12);

        // Load OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker for the bakery
        let marker = L.marker([-24.9145, 29.7345]).addTo(map);

        // Add a popup that opens when you click the marker
        marker.bindPopup("<b>Boledi's Cakes & Decor</b><br>Jane Furse, Hospital Area.<br>Come taste the sweetness!").openPopup();
    }

    /* Dynamic service and live search */

// services in an array 
const serviceData = [
    {
        title: "Wedding & Event Catering",
        description: "Full catering services for weddings, birthdays, and corporate events. Includes main meals, sides, and desserts.",
        price: "Prices range from R500 - R5000",
        image: "images/catering.png",
        keywords: "catering food event wedding catering services"
    },
    {
        title: "Event Decor & Styling",
        description: "Beautiful decor setups including balloon arches, table styling, draping, and custom centerpieces.",
        price: "Prices range from R2000 - R10000",
        image: "images/blue_decor.png", 
        keywords: "decor decorations event styling balloons setup"
    },
    {
        title: "Kiddies decor & party packages",
        description: "Fun and colorful party packages for children's birthdays, including themed decor, tableware, and activities.",
        price: "Prices range from R2000 - R6000",
        image: "images/decor_blue.png",
        keywords: "kiddies decor party packages birthdays themed"
    },
];

// Function to render the services to the page
function renderServices(searchTerm = "") {
    const grid = $('#dynamic-service-grid');
    if (grid.length === 0) return; // Stop if we aren't on the services page

    grid.empty(); // Clear the grid
    let matchCount = 0;

    // Convert search term to lowercase for easy matching
    const searchLower = searchTerm.toLowerCase();

    // Loop through the data
    serviceData.forEach(service => {
        // Check if the search term matches the title, description, or keywords
        const matchesTitle = service.title.toLowerCase().includes(searchLower);
        const matchesDesc = service.description.toLowerCase().includes(searchLower);
        const matchesKeywords = service.keywords.toLowerCase().includes(searchLower);

        if (matchesTitle || matchesDesc || matchesKeywords) {
            matchCount++;
            
            // Build the HTML for this service card
            const cardHTML = `
                <div class="service-card scroll-reveal active">
                    <!-- Note: class="gallery-img" enables the lightbox -->
                    <img src="${service.image}" alt="${service.title}" class="gallery-img">
                    <div class="card-content">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <p class="price">${service.price}</p>
                    </div>
                </div>
            `;
            grid.append(cardHTML);
        }
    });

    // Show or hide the "No results" message
    if (matchCount === 0) {
        $('#no-services-msg').fadeIn(300);
    } else {
        $('#no-services-msg').fadeOut(200);
    }
}

// Initializes the services grid on page load 
if ($('#dynamic-service-grid').length > 0) {
    renderServices(); // Renders everything initially

    // Listen for typing in the search bar
    $('#service-search').on('input', function() {
        const searchValue = $(this).val(); // Get what the user typed
        renderServices(searchValue);
    });
}

    /* Advanded DOM: Filter Buttons */
//  Define data in a JS array
const productData = [
    {id:1,name:"three tier Wedding Cake",category: "cake", img: "images/orangeflower_weddingcake.png"},
    {id:2,name:"Birthday Cake",category: "cake", img: "images/hunnamontena_cake.png"},
    {id:3,name:"Bridal shower Cake",category: "cake", img: "images/braidal_shower.png"},
    {id:4,name:"Traditional Wedding Cake",category: "cake", img: "images/wedding_cake.png"},
    {id:5,name:"Bento Cake",category: "cake", img: "images/bento_cake.png"},
    {id:6,name:"White Wedding Cake",category:"cake",img:"images/minimalistic_weddingcake.png"},
    {id:7,name:"Biscuits",category:"Sweet Pastery",img:"images/biscuits.png"},
    {id:8,name:"Platters",category:"Platters",img:"images/platters.png"}
];

// 2. Function to render products dynamically
function renderProducts(filter) {
    const grid = $('#dynamic-product-grid');
    if (grid.length === 0) return; // Stop if we aren't on the products page

    grid.empty(); // Clear existing items

    // Loop through the data and create HTML for each item
    productData.forEach(product => {
        // If filter is 'all' or matches the category, display it
        if (filter === 'all' || product.category === filter) {
            // Using Template Literals to inject variables dynamically
            const productHTML = `
                <div class="product-card scroll-reveal active" style="margin-bottom: 2rem;">
                    <img src="${product.img}" alt="${product.name}" class="gallery-img" style="width: 100%; height: 250px; object-fit: cover;">
                    <h3 style="margin-top: 1rem; font-size: 1.2rem;">${product.name}</h3>
                </div>
            `;
            grid.append(productHTML); // Inject into DOM
        }
    });
}

// 3. Initialize the grid on page load (if on products page)
if ($('#dynamic-product-grid').length > 0) {
    renderProducts('all');

    // 4. Handle Filter Button Clicks dynamically
    $('.filter-btn').click(function() {
        // Remove active class from all buttons
        $('.filter-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');
        
        // Get the filter value and re-render
        const filterValue = $(this).data('filter');
        
        // Fade out, render, fade in for smooth transition
        $('#dynamic-product-grid').fadeOut(200, function() {
            renderProducts(filterValue);
            $(this).fadeIn(200);
        });
    });
}


/* Gallery lightbox */
$(document).on('click', '.gallery-img', function() {
    const imgSrc = $(this).attr('src');
    
    // Set the source of the lightbox image and show it
    $('#lightbox-img').attr('src', imgSrc);
    $('#lightbox').addClass('show');
});

// Close lightbox when clicking the 'X'
$('.close-lightbox').click(function() {
    $('#lightbox').removeClass('show');
});

// Close lightbox when clicking anywhere on the dark background
$('#lightbox').click(function(e) {
    if (e.target === this) { // Only close if clicking the background, not the image
        $(this).removeClass('show');
    }
});

});