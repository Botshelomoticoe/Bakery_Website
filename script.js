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

    /* Advanded DOM: Filter Buttons */
//  Define data in a JS array
const productData = [
    {id:1,name:"Classic Wedding Cake",category: "cake", img: "images/orangeflower_weddingcake.png"},
    {id:2,name:"Birthday Cake",category: "cake", img: "images/hunnamontena_cake.png"},
    {id:3,name:"Bridal Cake",category: "cake", img: "images/braidal_shower.png"},
    {id:4,name:"wedding Cake",category: "cake", img: "images/wedding_cake.png"},
    {id:5,name:"Bento Cake",category: "cake", img: "images/bento_cake.png"},
    {id:6,name:"Wedding Cake",category:"cake",img:"images/minimalistic_weddingcake.png"},
    {id:7,name:"Biscuits",category:"Sweet Pastery",img:"images/biscuits.png"},
    {id:8,name:"Platters",category:"Platters",img:"images/platters.png"},
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