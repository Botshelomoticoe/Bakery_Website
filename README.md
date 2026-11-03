## Overview

Boledi's Cakes & Decor is a family owned bakery and this website was designed to showcase custom cakes, pastries, catering, and decor services.
The website serves as a digital storefront where customers can browse products, learn about the business's history, view special promotions,and submit enquiries or online orders.




  
 **Website Fundamentals and Structure:**

  

The website is built using HTML and follows a consistent, multi page structure. Every page shares a unified header and footer to ensure smooth navigationfor the user.

  

**Website Pages:**

  

- index.html (Home): The landing page features a warm welcome message, a "Why Choose Us" section, and a call to action in the footer.

- about.html (About Us): Details the bakery's history, values which are quality, customer satisfaction, creativity and reliability, mission, vision, and introduces the founder, Boledi Patience Molatudi.

- products.html (Products): A catalogue displaying various cakes (Wedding, Birthday, Bridal, Bento) and sweet pastries with price ranges.

- services.html (Services): Outlines the catering and decor services offered, with price ranges.

- order.html (Order Online): A form that allows customers to choose a product, customise their order (flavour, size, design), select a collection/delivery date, and choose a payment method.

- specialsandpromotions.html (Specials): Highlights current and seasonal offers, and includes an email sign up form for customer updates.

- enquiry.html (Enquiry): A detailed contact form for general questions, order enquiries, catering, or decor services.

- contact.html (Contact): Provides essential business information including phone numbers, email addresses, physical locations, operating hours and direct links to social media.

  Markin(2025) encourages that Project objectives and goals for a website should be

  - To increase website traffic and visibility by using SEO to improve visibility and making the website appear when users search relevant keywords.

- To make business information like contact details, operating information, location and price lists and images of the bakery's products and services available to all customers.

- Creating a responsive layout in order for the website to adapt to different screen sizes.

- Making forms available to customers that want to submit enquiries.

- To enhance user experience by always having consistent branding, simple navigation, styling, reducing load times and ensuring responsiveness.

- Generating leads and boosting conversions to convert visitors to customers by having persuasive calls to action and forms designed to gather contact information.

  

**HTML Code Structure:**

  

The HTML code follows a semantic layout, utilizing tags like header, nav, main, section, and footer to organize content correctly.

  

- Navigation: A consistent navigation bar is repeated across all pages using an unordered list, linking to all other pages.

- Forms: Interactive elements use standard HTML form tags  to collect the user data for orders and enquiries.

- Media: Images are added throughout the site to display previous work, products, and specials.

  **Styling & Visual Design:**

  The visual identity of Boledi's Cakes & Decor is defined by a shared CSS file that creates a bright, warm, and appetizing aesthetic.

  

**Color Palette:**

The website has a vibrant, bakery themed color scheme defined in CSS root variables:

  
- Sweet Pink (#ffb6c1): Used mainly for backgrounds (header, footer), image frames, and form accents to create a warm, friendly atmosphere.

- Shocking Orange (#ff6b00): Used for headings, primary buttons, hover states, and borders to draw attention and stimulate appetite.

- White/Cream (#ffffff): Used for the main background and text areas to ensure high readability and a clean look.

- Dark Text (#2c3e50): Used for body text to ensure strong contrast against the bright backgrounds.

  **Typography:**

  
 - Headings: Use the elegant Playfair Display serif font to give a classic, premium bakery feel.

- Body Text: Uses the clean, modern Poppins sans serif font for maximum readability on all screen sizes.

  **Key Styling Features:**

  

- Responsive Layout: The website uses CSS Flexbox and Grid to adapt seamlessly to different screen sizes.
- Image Framing: All images feature a distinct 5px solid pink border with rounded corners, a soft shadow, and a subtle zoom effect on hover.

- Interactive Elements: Buttons are designed with a pink background and an orange border. On hover, they invert to solid orange with white text.

- Form Styling: Input fields have pink borders that glow orange when clicked, providing clear visual feedback to the user.

  

**Website features and functionality:**

  

- Navigation: There is a consistent navigation structure that connects the different website pages. it allows visitors to move between all website pages.

- Responsive Design: Responsiveness of the application must be tested on desktop and mobile screen widths to confirm that navigation, images, text and forms remain usable. Jamal states " having a responsive and mobile friendly design is not optional anymore. It is essential if you want to keep your visitors and convert them into customers..." (5 Must-Have Website Features for Small Businesses,2025).

- Product and Service Presentation: The products and services pages organize information so that customers can explore the bakery's offerings. 

- Contact Information:The contact page provides a dedicated location for business contact details and other relevant customer information.

- Ordering and Enquiry Forms: The ordering and enquiry pages provide form interfaces for collecting relevant customer information. HTML form elements include text fields, selection controls and text areas, depending on the information required.





## Current Limitations

  

- The website does not have a backend for storing or processing customer orders.

- Enquiry submissions may require additional configuration to reach the business.

- Customer order tracking is not available unless a suitable tracking system has been implemented.

- Product availability and pricing may require a process for keeping information updated.

- An HTML form does not automatically submit, store or process an order. Actual submission and order management depend on the form configuration and any supporting backend or external service implemented

  
  
  

## Future Improvements:

  



  

- Adding a backend database to process the order.html and enquiry.html forms.

- Adding a customer reviews or testimonials section.

  

## Changelog

  

**Structure**

  

- HTML Fixes: Corrected invalid tags to standard  tags across all pages, resolving broken image displays. Fixed various nesting and typo issues in forms and accordions.

  

- Styling: Implemented a bright, cohesive bakery theme using CSS variables bubblegum pink, sunburst orange, clean white. Added responsive design, custom typography (Playfair Display & Poppins), and soft shadows to match the brand's aesthetic.

  

- Navigation and Footer: Created a unified navigation bar and footer across all pages for consistent user experience.

  

- Image Framing: Applied a uniform 5px pink border, rounded corners, and hover effects to all images.

  

**Interactivity and User Experience**

  

- Accordions: Integrated jQuery slideToggle for smooth, animated FAQ and information sections on the About page.

  

- Carousel: Added a fully functional, auto playing image slider on the Order Online page using jQuery to showcase cake designs.

  

- Scroll Animations: Implemented jQuery based animations to fade in and slide up content sections as the user scrolls.

  

- Dynamic Content: Built a JavaScript driven product and service grid, replacing static HTML with dynamically generated content for easier maintenance.

  

**Advanced Forms and Mapping**

  

- Form Validation & AJAX: Added client side validation using HTML attributes and custom JavaScript (RegEx) for email and phone fields. Implemented AJAX submission using event.

  

- Interactive Map: Integrated Leaflet, to display three business locations (Jane Furse, GaMarishane, and Mogorwane) with custom markers.

  

- Customization Field: Replaced the dropdown menu in the order form with a for detailed customer specifications.

  

**SEO and Documentation**

  

· SEO Implementation: Added title, meta descriptions, and meta keywords tags to every page. Optimized image file names and alt text for better search engine visibility.

  
  
  
  

## Reference list

  

Markin, I., 2025. Defining Website Goals and objectives.gapsy,[blog] 22 May. Available at < https://gapsystudio.com/blog/defining-website-goals-and-objectives/ > [Accessed 20 October 2026].

  

Jamal | Website Strategy, 2025. 5 Must have website features for small businesses.[video online] Available at: < https://www.youtube.com/watch?v=miLZ76HMMc0 > [Accessed 20 october 2026]

  
  

jQuery (n.d.) slideToggle() – jQuery API Documentation. Available at: https://api.jquery.com/slideToggle/ [Accessed: 2 November 2026]

  

Leaflet (n.d.) Leaflet Quick Start Guide. Available at: https://leafletjs.com/examples/quick-start/ [Accessed: 2 November 2026]