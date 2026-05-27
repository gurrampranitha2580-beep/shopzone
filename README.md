# ShopZone

ShopZone is a React Single Page Application (SPA) built as part of Sprint 06. The project demonstrates client-side routing, global state management using Context API, protected routes, API integration, and localStorage persistence.

## Features

- Home page
- Product listing page
- Product details page
- Dynamic routing using React Router
- Add to Cart functionality
- Cart quantity management
- Global cart state using Context API
- Navbar cart count synchronization
- Cart total calculation
- localStorage persistence
- Login as Guest
- Protected Checkout route
- Delivery details form
- Payment method selection
- Order confirmation page
- Contact form
- Responsive user interface

## Technologies Used

- React
- Vite
- React Router DOM
- Context API
- JavaScript
- CSS
- DummyJSON API

## API Used

https://dummyjson.com/products

## Application Routes

| Route | Description |
|---------|------------|
| / | Home Page |
| /shop | Product Listing |
| /product/:id | Product Details |
| /cart | Shopping Cart |
| /login | Guest Login |
| /checkout | Protected Checkout |
| /contact | Contact Form |

## Key Concepts Implemented

### React Router
Used for navigation between pages without browser reloads.

### Dynamic Routing
Implemented product detail pages using route parameters and useParams().

### Context API
Used to manage cart and authentication state globally without prop drilling.

### localStorage
Used to persist cart data across browser refreshes.

### Protected Routes
Unauthorized users attempting to access Checkout are redirected to Login.

## Installation

```bash
npm install
npm run dev