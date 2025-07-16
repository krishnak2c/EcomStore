# EcomStore - A JavaScript eCommerce Project



A fully responsive and functional e-commerce website built with modern front-end technologies. This project showcases a complete online shopping experience, from browsing products to a fully functional shopping cart. It is built with vanilla JavaScript, HTML5, and CSS, and uses Vite for a fast and modern development workflow.

## ✨ Features

-   **Homepage:** A welcoming landing page with a hero section, featured item categories, and company policies.
-   **Product Listing:** Browse all available products with details like name, image, price, rating, and stock.
-   **Dynamic Content:** Products and cart items are dynamically rendered using JavaScript and HTML `<template>` elements.
-   **Interactive Shopping Cart:**
    -   Add products to the cart from the product list.
    -   View all items in a dedicated cart page.
    -   Increment or decrement the quantity of each item.
    -   Remove items from the cart.
    -   Real-time update of the cart total and item count in the navbar.
-   **Local Storage Persistence:** The shopping cart state is saved in the browser's local storage, so items are not lost on page refresh.
-   **Responsive Design:** The layout is optimized for various screen sizes, from mobile phones to desktops.
-   **Static Pages:** Includes "About Us" and "Contact Us" pages.

## 🚀 Live Demo

A live demo of the project can be found here: **Live Demo Link**

---

## 🛠️ Technologies Used

-   **Frontend:**
    -   HTML5
    -   CSS3
    -   JavaScript (ES6 Modules)
-   **Styling:**
    -   Custom CSS with modern layouts (Grid)
    -   Tailwind CSS utility classes for styling.
    -   Google Fonts
    -   Font Awesome for icons.
-   **Development:**
    -   Vite as a build tool and dev server.

---

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and `npm` (or `yarn`/`pnpm`) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/krishnak2c/Ecommerce_Website.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Ecommerce_Website
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the address provided by Vite in the terminal).

---

## 📁 Project Structure

The project follows a standard front-end structure:

```
/
├── public/
│   └── images/               # Image assets
├── index.html                # Home Page
├── about.html                # About Page
├── products.html             # Products Listing Page
├── contact.html              # Contact Page
├── addToCart.html            # Shopping Cart Page
├── style.css                 # Main Stylesheet
├── main.js                   # Main JS for product listing page
├── showAddToCartCards.js     # JS for the cart page logic
├── homeQuantityToggle.js     # JS for quantity toggles
├── footer.js                 # Reusable footer component logic (if any)
├── vite.config.js            # Vite configuration
└── package.json              # Project configuration and dependencies
```

---

## 📝 How It Works

The application's logic is handled entirely on the client-side with JavaScript.

-   **Product Data:** Product information is fetched (simulated from a local source like a `.js` file or API) and dynamically injected into the `products.html` page.
-   **Templating:** The HTML `<template>` element is used to define reusable structures for product cards and cart items, which are then cloned and populated with data.
-   **State Management:** The shopping cart's state is managed using an array stored in the browser's `localStorage`. This ensures data persistence across sessions.
-   **Event Handling:** Event listeners are used to capture user interactions, such as clicking "Add to Cart", adjusting item quantities, or removing items. These actions trigger functions that update the `localStorage` and re-render the necessary parts of the UI.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is open-source. Feel free to use it for learning and personal projects.