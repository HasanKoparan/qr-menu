# 🍽️ QR Menu

A responsive digital restaurant menu built with HTML, CSS, JavaScript and Bootstrap. Customers can browse the menu by category and open a detail page for every dish.

🔗 **Live Demo:** https://hasankoparan.github.io/qr-menu/

## 📸 Screenshots

### Menu Page
![Menu Page](screenshots/menu.png)

### Product Detail Page
![Detail Page](screenshots/detail.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## ✨ Features

- Menu items loaded dynamically from `db.json` with `fetch`
- Category filter buttons (All, Breakfast, Lunch, ...)
- Dynamic product detail page, driven by the `id` in the URL (`URLSearchParams`)
- Prices, categories and descriptions rendered from data
- Responsive layout for mobile and desktop
- Modular JavaScript with ES modules

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+, modules, async/await)
- Bootstrap

## 📁 Project Structure

```
qr-menu/
├── images/        # Product images
├── screenshots/   # README screenshots
├── js/
│   ├── api.js     # Fetches menu data
│   ├── main.js    # Home page logic
│   ├── detail.js  # Detail page logic
│   └── ui.js      # Rendering functions
├── db.json        # Menu data
├── index.html     # Menu page
├── detail.html    # Product detail page
└── style.css
```

## 🚀 Getting Started

```bash
git clone https://github.com/HasanKoparan/qr-menu.git
cd qr-menu
```

Open the folder in VS Code and run `index.html` with the **Live Server** extension.

## 📚 What I Practiced

- Working with `fetch` and async/await
- Reading URL parameters with `URLSearchParams`
- Rendering dynamic content from JSON data
- Splitting code into modules

## 👤 Author

**Hasan Koparan**
Full-stack Developer | React & JavaScript | Frontend Focus
GitHub: [@HasanKoparan](https://github.com/HasanKoparan)
