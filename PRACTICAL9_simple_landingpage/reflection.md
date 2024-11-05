# Code Walkthrough for simple landing Webpage

In this reflection, I’ll discuss the main HTML and CSS concepts applied in building a simple landing webpage, new skills and knowledge acquired, and any challenges I encountered during the process.

## Main Concepts Applied

1. **HTML Structure for E-commerce Layout**:
   - **Header and Navigation**: I created a header with a navigation bar, including links to sections like Home, Products, About Us, and Contact. This was accomplished using `<header>`, `<nav>`, and `<ul>` elements, and the structure ensures easy navigation.
   - **Hero Section**: I used a hero section with an overlay to make a visually appealing introductory section for the store. This includes a headline and a tagline that draws visitors in, created with `<section class="hero">`.
   - **Product Grid**: The products are displayed in a grid format. Each product card includes an image, name, and price, wrapped in `<div class="product-card">` to make the content easily readable and visually organized.
   - **Footer with Social Links**: The footer includes social media links for better user engagement, and it was styled to appear cohesive with the rest of the page.
   - **About Section**: A dedicated section provides a brief description of the store, created using `<div class="about-section">`.
   - **Mission Section**: I added a section to explain the company’s mission. This is organized as a standalone div block to emphasize its importance.
   - **Team Section**: To introduce the team, I used a grid layout to display each member in a separate card with an image, name, role, and description. Each member card is styled within a `<div class="team-card">` for a consistent look.
   - **Common Styling**:
   - I applied a universal `*` selector at the start to remove default margins and paddings and set `box-sizing: border-box`. This reset ensures consistency across browsers and helps prevent unexpected layout shifts.
   - **Custom Styling for Body and Text**:
   - I selected `Arial, sans-serif` for the body font, set the line height to `1.6`, and chose a dark text color for readability.
   - **Header and Navigation Bar**:
   - The header uses a dark background (`#333`) with white text to create a visually striking contrast. Navigation links are styled to appear horizontally with a flexbox (`display: flex`), and the `justify-content: space-between` property ensures an evenly spaced layout.
   - Links are designed with `text-decoration: none` and `color: #fff` for a clean, professional appearance.
   - **Hero Section**:
   - The hero section is styled with a background image (`background-image: url('bg2.jpeg')`), centered and covering the section fully. It’s overlaid with a semi-transparent black box (`rgba(0, 0, 0, 0.5)`) to improve text legibility and focus. Text alignment is centered, making the hero section a strong visual entry point.
   - **Product and About Sections**:
   - The product grid uses CSS Grid to allow flexibility in displaying items. Each card has a soft background, padding, and rounded corners, giving a consistent look. The `max-width: 100%` on images ensures they fit neatly within their containers.
   - The about and mission sections use a `max-width: 600px` constraint to maintain readability and aesthetic spacing around the main content.
   - **Team Section**:
   - The team grid uses a one-column layout by default, switching to multiple columns on larger screens. Cards in this section have images styled as circles, making them more visually engaging.
   - CSS properties like `border-radius: 50%` on images and `border-radius: 8px` on cards create a friendly, polished look.
   - **Footer**:
   - I styled the footer to match the header’s color scheme. The links are centered, with spacing managed by flexbox (`display: flex`) for consistent alignment. Links are kept simple with no underlines, reinforcing the clean, cohesive style.



2. **CSS Styling (linked in `pages.css`)**:
   - **Responsive Layout**: Although responsiveness isn’t a primary focus, I ensured the layout generally adapts to screen sizes through the use of CSS Flexbox for the product grid, allowing items to wrap neatly.
   - **Hero Overlay Styling**: The hero overlay was applied using a CSS overlay class to give a dark background effect that improves text readability over the hero image.
   - **Consistent Styling for Links**: CSS is used to style the navigation and footer links, so they are uniform across the page and change color on hover for interactivity.
   
3. **Images and Alt Attributes**:
   - Each product image has an `alt` attribute that describes the product. This improves accessibility for users with screen readers and provides fallback text if images fail to load.

## New Skills and Knowledge Acquired

- **Use of Hero Section and Overlay Styling**:
  - I learned to apply a hero section with an overlay for a bold introduction to the page. The overlay styling helps text stand out over images, and I see how it enhances the site’s visual appeal.
  
- **Grid-Based Layout for Product Cards**:
  - I explored using a grid layout to display multiple products, making the design organized and visually pleasing. This approach is ideal for e-commerce as it aligns products in a way that is easy for users to scan.

- **Using the Footer to Add Social Links**:
  - Including social media links in the footer gave me insight into web layout conventions and added an element of professional branding to the page.

## What I Learned

- **Creating User-Friendly Layouts**:
  - Building this page helped me see the importance of a well-structured layout for user engagement. With clear sections like the hero, product grid, and footer, users can navigate and interact with the site more intuitively.
  
- **Importance of Consistent Styling**:
  - Styling elements like links and buttons consistently improves the visual coherence of the page. This consistency enhances the user experience, making the page look more polished and professional.

- **Responsive Design (Media Queries)**:

  - **Tablet (768px)**:
    - At this width, I increase the space between navigation links and set the product grid to display three items in a row, optimizing use of space.
    - The team grid shows two members per row, improving layout on medium screens.

  - **Desktop (1024px)**:
    - The hero section height increases for a more immersive look on larger screens.
    - The product grid adjusts to four items in a row, while the team grid displays three, taking full advantage of the screen real estate.


## Challenges Faced and Solutions

1. **Aligning the Product Cards**:
   - **Challenge**: Initially, the product cards didn’t align perfectly within the grid, causing some cards to appear off-balance.
   - **Solution**: I used CSS Flexbox to align items within the grid and ensured that each card had consistent padding and margin, making the layout symmetrical.

2. **Footer Link Alignment**:
   - **Challenge**: The footer links were not aligning as expected, which made the footer appear uneven.
   - **Solution**: I adjusted the styling for the footer links, setting them as inline elements with spacing and consistent font size, achieving a clean and even alignment.

3. **Image Sizing for Product Cards**:
   - **Challenge**: Some product images were too large or too small compared to others, affecting the consistency of the product grid.
   - **Solution**: I set max-width and height properties for images in CSS to ensure they aligned uniformly within each product card.

4. **Image Sizing in the Team Section**:
   - **Challenge**: The images in the team cards initially didn’t align well, resulting in inconsistent sizes.
   - **Solution**: I set a fixed width and height for each image in CSS to maintain uniformity. This adjustment made the layout look balanced and professional.
