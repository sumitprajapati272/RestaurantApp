# 🍽️ Industrial-Level Full-Stack Restaurant Website Prompt

## Context and Role

As a Full-Stack MERN Developer specializing in modern web experiences and scalable production systems, you are responsible for designing and implementing a high-performance Restaurant Website with immersive UI animations, secure backend architecture, and a production-ready ordering ecosystem.

The application must provide a modern digital restaurant experience that combines responsive UI/UX, smooth storytelling animations, online food ordering, table reservations, secure authentication, cloud database management, and administrative controls.

The website should feel premium, interactive, scalable, and visually engaging while maintaining accessibility, responsiveness, security, and performance optimization.

Additionally, the system must include secure customer interaction flows, automated email notifications, and a robust admin management dashboard.

---

# Objective

Develop a complete industrial-level full-stack Restaurant Website that:

* Implements immersive scroll-based storytelling animations using Framer Motion.
* Provides a responsive and modern restaurant UI.
* Supports online food ordering and cart management.
* Includes secure JWT authentication and profile management.
* Implements a fully functional table reservation system.
* Provides an admin dashboard for restaurant management.
* Stores customer, reservation, menu, and order data securely.
* Triggers automated email notifications for customer interactions.
* Maintains production-level responsiveness, accessibility, scalability, and security.

---

# UI and Animation Requirements

## Scroll-Based Storytelling Experience

Implement cinematic storytelling animations using Framer Motion:

* Scroll-triggered section animations
* Sequential content reveal
* Smooth parallax scrolling effects
* Staggered entrance transitions
* Hero section motion effects
* Interactive hover animations
* Smooth modal transitions
* Animated testimonials
* Animated menu interactions
* Animated reservation form experience

Ensure animations:

* Use GPU-friendly properties
* Avoid layout thrashing
* Maintain smooth scroll performance
* Support reduced-motion accessibility preferences

---

# Layout Requirements

The restaurant website must include:

* Hero Section
* About Restaurant Section
* Featured Dishes Section
* Full Dynamic Menu Section
* Special Offers Section
* Chef Showcase Section
* Testimonials Section
* Reservation Section
* Online Food Ordering Section
* Gallery Section
* Contact Section
* Footer Section
* Admin Dashboard

The layout must be:

* Fully responsive (mobile, tablet, desktop)
* SEO optimized
* Accessible using semantic HTML and ARIA labels
* Optimized for Core Web Vitals
* Modern and visually polished

---

# Food Ordering System Requirements

## Ordering Features

Users must be able to:

* Browse menu categories
* View food details
* Search food items
* Filter menu items
* Add items to cart
* Update cart quantity
* Remove items from cart
* Add favorite dishes
* Place food orders
* Track order status
* View order history

---

# Checkout System

Implement:

* Secure checkout flow
* Delivery information form
* Address management
* Order summary
* Payment integration support
* Order confirmation page
* Success/failure handling
* Email notification after successful order

Optional payment support:

* Stripe
* Razorpay

---

# Table Reservation System Requirements

## Reservation Features

Customers must be able to:

* Book restaurant tables online
* Select reservation date
* Select reservation time
* Select guest count
* Add special requests
* Receive booking confirmation

---

# Reservation Form Fields

Include:

* Full Name
* Email Address
* Phone Number
* Date
* Time
* Number of Guests
* Special Requests (optional)

---

# Validation Requirements

Implement:

* Client-side validation
* Backend validation
* Structured validation errors
* Prevent invalid submissions
* Email validation
* Spam prevention
* Rate limiting

---

# User Authentication Requirements

## Authentication Features

Implement:

* User registration
* User login
* Logout functionality
* JWT authentication
* Password hashing using bcrypt
* Protected routes
* Session persistence
* Forgot password flow
* Reset password flow
* User profile management

---

# Admin Dashboard Requirements

## Dashboard Features

Implement a secure admin dashboard that includes:

* Order management
* Reservation management
* Menu management
* User management
* Sales analytics
* Revenue statistics
* Customer management
* Food inventory management (optional)
* Review moderation
* Dashboard charts and reports

Dashboard UI should include:

* Sidebar navigation
* Interactive analytics cards
* Responsive dashboard layout
* Smooth UI animations
* Dark/light mode support

---

# Dynamic Menu Management System

The admin must be able to:

* Add food items
* Edit menu items
* Delete dishes
* Upload food images
* Manage food categories
* Update pricing
* Toggle dish availability

---

# Backend Requirements

## API Architecture

Implement secure REST APIs for:

* Authentication
* Menu management
* Cart management
* Order management
* Reservation handling
* Contact form submissions
* User management
* Admin operations

The backend should:

* Use modular architecture
* Follow RESTful API standards
* Return structured JSON responses
* Implement centralized error handling
* Use async/await architecture

---

# Database Requirements

Use MongoDB to securely store:

* Users
* Orders
* Reservations
* Menu items
* Reviews
* Contact messages
* Payment records

Implement:

* Proper schema relationships
* Indexed queries
* Optimized database performance
* Secure query handling

---

# Email Notification System

## Automated Email Workflow

Trigger automated emails for:

* Order confirmation
* Reservation confirmation
* Contact form submissions
* Payment confirmation
* Admin notifications

Use:

* Nodemailer
* SMTP services
* Transactional email APIs

Store credentials securely using environment variables.

---

# Contact System Requirements

## Contact Features

Implement:

* Contact form modal/page
* Animated modal transitions
* Form validation
* Secure message handling
* Email notification to restaurant owner
* Success and failure states

---

# File Upload Requirements

Support secure uploads for:

* Food images
* Restaurant gallery
* User profile images

Use:

* Multer
* Cloudinary or AWS S3 (optional)

---

# Security Requirements

## Security Measures

Sanitize and validate all inputs to prevent:

* XSS attacks
* Injection attacks
* Unauthorized access
* Spam submissions
* CSRF vulnerabilities

Implement:

* Helmet.js
* Rate limiting
* JWT verification middleware
* Environment variable protection
* Secure API middleware
* Protected admin routes

---

# Performance and Scalability

Optimize:

* Bundle size
* Animation rendering
* Database queries
* API response times
* Image optimization
* Lazy loading
* Component rendering

Ensure:

* High traffic scalability
* Fast page load times
* SEO optimization
* Accessibility compliance
* Efficient caching strategies

---

# Error Handling and Documentation

## Error Handling

Handle gracefully:

* Failed orders
* Invalid reservations
* Authentication failures
* Payment failures
* API validation errors
* Email sending failures
* Database connection failures

Provide:

* Structured error responses
* Backend logging
* Frontend error states
* User-friendly notifications

---

# Documentation Requirements

Provide documentation for:

* Folder structure
* API architecture
* Database schema
* Environment variables
* Installation guide
* Deployment guide
* Authentication flow
* Admin dashboard usage

---

# Technology Stack

## Frontend

Use:

* React.js OR Next.js
* Tailwind CSS
* Framer Motion
* Axios
* Redux Toolkit / Context API

---

## Backend

Use:

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Nodemailer
* dotenv
* Multer

---

# Database

Use:

* MongoDB
* Mongoose ODM

---

# Optional Advanced Features

Implement optional advanced features such as:

* AI chatbot support
* Real-time order tracking
* WebSocket notifications
* Dark mode
* Multi-language support
* PWA support
* Docker deployment
* Redis caching
* Push notifications

---

# Deployment Requirements

## Frontend Deployment

* Vercel
* Netlify

## Backend Deployment

* Render
* Railway
* AWS

## Database

* MongoDB Atlas

---

# Output Requirements

The final system must provide:

* Modern animated restaurant experience
* Secure authentication workflow
* Functional food ordering system
* Online table booking system
* Production-ready backend APIs
* Responsive admin dashboard
* Automated email notification workflow
* Real-time user interactions
* Smooth checkout experience
* Scalable MERN architecture

---

# Development Flow

Build the project step-by-step:

1. Backend architecture setup
2. MongoDB connection
3. Authentication APIs
4. Menu APIs
5. Reservation APIs
6. Order management APIs
7. Frontend UI development
8. Framer Motion animation system
9. Cart and checkout flow
10. Admin dashboard implementation
11. Payment integration
12. Email notification system
13. Security optimization
14. Final deployment and testing

---

# Final Goal

The final application should function as a complete industrial-level Restaurant Website platform with:

* Premium animated UI/UX
* Online food ordering
* Secure authentication
* Table reservation system
* Admin management dashboard
* Cloud database integration
* Email notification workflows
* Responsive design
* Production-ready deployment architecture
* High scalability and maintainability
