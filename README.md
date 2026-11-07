# Smart Solutions - Software Development & IT Agency Landing Page

**Smart Solutions** is a modern, responsive corporate landing page designed for a software development and IT solutions agency. Built entirely with vanilla HTML5, CSS3, and JavaScript, it showcases company services, a project portfolio, client testimonials, pricing tiers, and interactive forms powered by the browser's `localStorage`.

---

## Key Features

* ** Fully Responsive Design:** Adapts seamlessly across desktop, tablet, and mobile screens using CSS Grid, Flexbox, and custom media queries.
* ** Interactive Mobile Navigation:** Smooth toggleable hamburger menu for mobile devices.
* ** Rich UI Sections:**
  * **Hero / Landing Section:** Full-screen banner with overlay and call-to-action messaging.
  * **Services & Solutions:** Grid layout highlighting core offerings (Web Development, Mobile Apps, UI/UX Design, Technical Support).
  * **Interactive Portfolio:** Filterable-style gallery with smooth hover zoom and slide-up caption animations.
  * **Video Background Banner:** Autoplay, muted loop video section with an overlay callout.
  * **About & Statistics Counter:** Company overview paired with key performance metrics.
  * **Testimonials & Skills:** Client reviews alongside dynamic CSS progress bars (`data-atr` tooltips) showcasing technical proficiency in HTML, CSS, JavaScript, and Python.
  * **Pricing Plans:** Clean 3-tier pricing cards with interactive hover states.
* ** Newsletter Subscription (LocalStorage):**
  * Validates email format using Regular Expressions (Regex).
  * Prevents duplicate email registrations.
  * Stores subscriber emails persistently in `localStorage`.
* ** Contact Form with CRUD Functionality:**
  * Real-time input validation (Name length, valid Email regex, Message length).
  * Saves submitted inquiries to `localStorage` and dynamically renders them as user cards on the page.
  * Includes a **Delete** feature to remove individual messages from both the DOM and `localStorage`.

---

##  Technologies Used

* **HTML5:** Semantic structure and accessible markup.
* **CSS3:** Custom properties (CSS Variables), Flexbox, CSS Grid, pseudo-elements, transitions, and responsive media queries.
* **JavaScript (ES6+):** DOM manipulation, event handling, Regex form validation, and `localStorage` state management.
* **Font Awesome:** Scalable vector icons for services, social links, and UI controls.
* **Normalize.css:** For consistent cross-browser rendering.

---

##  Project Structure

```text
├── index.html          # Main HTML document
├── main.js             # JavaScript for mobile menu, validation, and localStorage
├── CSS/
│   ├── style.css       # Main stylesheet
│   ├── normalize.css   # CSS reset/normalization
│   └── all.min.css     # Font Awesome icons stylesheet
├── images/             # Project images, logos, and portfolio assets
└── video/
    └── video.mp4       # Background video for the feature section
```

---

##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, Safari). No build tools or external servers are required.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/doflalord/smart-solutions.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd smart-solutions
   ```
3. **Run the project:**
   * Simply double-click `index.html` to open it in your browser, **OR**
   * Use the **Live Server** extension in VS Code for hot-reloading.

---

##  Usage & Functionality Guide

1. **Testing the Newsletter Form:**
   * Scroll to the **Subscribe** section.
   * Enter an invalid email to see the red validation prompt.
   * Enter a valid email and click **Subscribe**—it will save to your browser's `localStorage`. Trying to enter the same email again will trigger an `"Email already exists"` warning.
2. **Testing the Contact Form:**
   * Scroll to the **Contact Us** section.
   * Fill in your Name (min. 3 chars), a valid Email, and a Message (min. 10 chars).
   * Click **Send**. Your submission will immediately appear below the form as a card and remain there even if you refresh the page.
   * Click **Delete** on any card to remove it.

---

##  Customization

To change the primary theme color of the website, open `CSS/style.css` and modify the `--mainColor` variable at the top of the file:

```css
:root {
    --mainColor: #19c8fa; /* Change this hex code to your preferred brand color */
}
```

---

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

##  Contact

**Smart Solutions Team**  
* GitHub: [@doflalord](https://github.com/doflalord)
* Email: doflalord2023@gmail.com