# Portfolio 🚀

_This project is a personal portfolio to showcase my work, built with React, Tailwind CSS, and Three.js for an interactive and responsive 3D experience. The project is mobile-first, with different layouts for desktop and mobile devices._

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [SEO and Social Sharing](#seo-and-social-sharing)
- [Contact](#contact)
- [Author](#author)

## Features

- Interactive 3D computer model using Three.js
- Responsive design for mobile, tablet, and desktop
- Dynamic content loading with React
- Easy customization using Tailwind CSS
- Optimized for SEO and social sharing, including Open Graph tags for WhatsApp

## Installation

**To run the project locally, clone the repository and install the dependencies:**

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

**Create a .env file with your environment variables for emailjs:**

```bash
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**To start the development server:**

```bash
npm run dev
```

## Technologies

- React.js: For building the user interface

- Tailwind CSS: For responsive design

- Three.js: For 3D model rendering

- Framer Motion: For animations

- EmailJS: For contact form submissions

## Project Structure

```plaintext
Portfolio
├── public
│   ├── desktop_pc
│   ├── logo.png
│   └── planet
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hoc
│   ├── styles.js
│   ├── utils
│   └── App.jsx
└── .env
```

## SEO and Social Sharing

The project includes Open Graph tags to optimize sharing on platforms like WhatsApp and Facebook, and meta tags for search engine optimization (SEO). Below are the key tags added in the index.html file:

```plaintext
<!-- Basic Meta Tags -->
<meta name="description" content="Portfolio of Cristian Varela, showcasing web development projects and skills.">
<meta name="keywords" content="Cristian Varela, portfolio, web developer, React, JavaScript, Tailwind CSS">
<meta name="author" content="Cristian Varela">
<meta name="robots" content="index, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="Cristian Varela's Portfolio">
<meta property="og:description" content="Explore Cristian Varela's portfolio, showcasing top web development projects.">
<meta property="og:image" content="/public/logo.png">
<meta property="og:url" content="https://varela-portfolio.vercel.app/">
<meta property="og:site_name" content="Cristian Varela Portfolio">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Cristian Varela's Portfolio">
<meta name="twitter:description" content="Explore Cristian Varela's portfolio, showcasing top web development projects.">
<meta name="twitter:image" content="/public/logo.png">

<!-- WhatsApp Sharing -->
<meta property="og:image" content="/public/logo.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

```

## Contact

If you have any questions or suggestions, feel free to get in touch at **cvarelagarcia@gmail.com.**

## Author

- [@VarelaCristianFacundo](https://github.com/VarelaCristianFacundo)
