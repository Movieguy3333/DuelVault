# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

DuelVault

# Overview

DuelVault is a web application that helps Yu-Gi-Oh! collectors track, analyze, and understand the financial value of their card collections. Users can manage their collections, track real-time prices, and set price alerts.

# Features

Card Collection Management – Add, remove, and organize cards.
Real-Time Price Tracking – Fetch up-to-date card values.
Collection Valuation – View the total worth of a collection.
Price Alerts – Get email notifications when a card surpasses a set price.
User Authentication – Secure login/logout.

# Tech Stack

Frontend
Vite + React.js
TailwindCSS
Backend (Planned)
Node.js + Express
MongoDB
Nodemailer for email alerts
Cron Jobs for scheduled price updates

DuelVault/
│── public/ # Public assets (e.g., Vite logo)  
 │ └── vite.svg  
 │  
 │── src/ # Main source code  
 │ ├── assets/ # Images, icons, and other static files  
 │ ├── components/ # Reusable React components  
 │ ├── pages/ # Collection & Valuation pages  
 │ ├── App.jsx # Main application component  
 │ ├── App.css # Global styles  
 │ ├── main.jsx # React entry point  
 │ └── index.css # Main stylesheet  
 │  
 │── .gitignore # Git ignore rules  
 │── eslintrc.json # ESLint configuration  
 │── eslint.config.js # Additional ESLint settings  
 │── index.html # Main HTML file  
 │── package-lock.json # Dependency lock file  
 │── package.json  
 │── README.md  
 │── vite.config.js
