from pathlib import Path

content = r"""# 🍽️ Restaurant Website – Industrial-Level MERN Stack Prompt

## Prompt

---

# Context and Role

Given the knowledge that you have in creating web applications and digital solutions in MERN Stack technology, it is very important for you to develop a Restaurant Website that functions efficiently through MERN Stack technology, such as MongoDB, Express.js, React.js, and Node.js.

The program should be interactive for customers to enjoy a nice and user-friendly interface. It must also include easy navigation options, security at the back end, as well as scalability. Users will be able to browse through menu items, place orders for food items, reserve tables, communicate with the management of the restaurant, and manage their profiles as well.

Moreover, the program should include order management and mail notifications on order placement and table booking.

---

# Objective

Develop a complete full-stack Restaurant Website that:

- Provides a modern animated restaurant UI.
- Displays restaurant menus dynamically.
- Allows users to place online food orders.
- Supports table reservation functionality.
- Includes user authentication and profile management.
- Implements an admin dashboard for restaurant management.
- Stores customer and order data securely.
- Sends automated email notifications for orders and reservations.
- Maintains production-level responsiveness, accessibility, and performance.

---

# UI and Animation Requirements

## Modern Restaurant Experience

Implement immersive UI/UX using Framer Motion with:

- Smooth page transitions
- Scroll-triggered animations
- Hero section animations
- Interactive food cards
- Hover effects on menu items
- Animated booking forms
- Smooth modal transitions

---

## Scroll-Based Storytelling

Implement:

- Parallax scrolling effects
- Fade-in animations
- Staggered section transitions
- Sequential content reveal
- Animated testimonials
- Interactive gallery animations

---

# Required Sections

The restaurant website must include:

- Hero Section
- About Restaurant Section
- Featured Dishes Section
- Full Menu Section
- Special Offers Section
- Chef Showcase Section
- Customer Testimonials
- Table Reservation Section
- Online Food Ordering Section
- Contact Section
- Admin Dashboard

---

# Layout Requirements

The layout must be:

- Fully responsive (mobile, tablet, desktop)
- SEO optimized
- Accessible using semantic HTML and ARIA labels
- Optimized for performance
- Modern and visually appealing

---

# User Authentication Requirements

## Authentication Features

Implement:

- User registration and login
- JWT authentication
- Secure password hashing using bcrypt
- Protected routes
- Session handling
- Forgot password and reset functionality

---

# Food Ordering System Requirements

## Ordering Features

Users must be able to:

- Browse food categories
- Add items to cart
- Update cart quantity
- Remove items from cart
- Place online orders
- Track order status
- View order history

---

# Checkout System

Implement:

- Secure checkout flow
- Delivery address form
- Payment integration (optional)
- Order confirmation page
- Email notification after successful order

---

# Table Reservation System

## Reservation Features

Allow customers to:

- Book tables online
- Select date and time
- Select number of guests
- Submit reservation requests

---

# Reservation Form Fields

Include:

- Full Name
- Email
- Phone Number
- Date
- Time
- Guest Count
- Special Requests (optional)

---

# Validation Requirements

Implement:

- Client-side validation
- Backend validation
- Proper error messages
- Prevent invalid submissions

---

# Menu Management System

## Dynamic Menu Features

The admin should be able to:

- Add food items
- Edit menu items
- Delete dishes
- Upload food images
- Manage pricing
- Organize categories

---

# Admin Dashboard Requirements

## Dashboard Features

Implement an admin panel that includes:

- Order management
- Reservation management
- User management
- Analytics dashboard
- Sales statistics
- Food inventory management (optional)

---

# Backend Requirements

## API System

Implement secure REST APIs for:

- Authentication
- Food menu management
- Order management
- Reservation handling
- Contact form submissions
- Admin operations

---

# Database Requirements

Use MongoDB to store:

- Users
- Orders
- Reservations
- Food items
- Customer reviews
- Contact messages

---

# Email Notification System

## Automated Emails

Trigger emails for:

- Order confirmation
- Reservation confirmation
- Contact form submissions
- Admin notifications

Use:

- Nodemailer
- SMTP services
- Transactional email APIs

Store credentials securely using environment variables.

---

# Contact System Requirements

## Contact Form Features

Implement:

- Contact form modal/page
- Animated form transitions
- Form validation
- Secure message handling
- Email notification to restaurant owner

---

# Data Processing and Security Requirements

## Security Measures

Sanitize and validate all inputs to prevent:

- XSS attacks
- Injection attacks
- Unauthorized access
- Spam submissions

---

# Security Features

Implement:

- Helmet.js
- Rate limiting
- JWT verification
- Secure API middleware
- Environment variable protection

---

# File Upload Requirements

Support secure image uploads for:

- Food images
- Restaurant gallery
- User profile images (optional)

Use:

- Multer
- Cloudinary/AWS S3 (optional)

---

# Output Requirements

The final system must provide:

- Responsive restaurant UI
- Animated user experience
- Functional food ordering system
- Online table booking system
- Secure authentication
- Admin dashboard
- Email notification workflow
- Real-time order handling
- Smooth checkout experience

---

# Error Handling and Documentation

## Error Handling

Handle gracefully:

- Invalid orders
- Failed reservations
- Authentication errors
- Database failures
- Email sending failures
- API validation errors

---

# Documentation

Provide documentation for:

- Folder structure
- API architecture
- Database schema
- Environment variables
- Deployment instructions
- Setup guide

---

# Performance and Scalability

Optimize:

- Bundle size
- API response times
- Database queries
- Image loading
- Animation rendering

Ensure:

- Lazy loading
- High traffic handling
- Optimized animations
- Efficient caching
- SEO optimization

---

# Technology Stack

## Frontend

Use:

- React.js OR Next.js
- Tailwind CSS
- Framer Motion
- Redux Toolkit / Context API
- Axios

---

## Backend

Use:

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Nodemailer
- dotenv

---

## Database

Use:

- MongoDB
- Mongoose ODM

---

# Optional Integrations

Implement optional advanced features such as:

- Stripe/Razorpay payment integration
- Real-time order tracking
- WebSocket notifications
- AI chatbot support
- Dark mode
- Multi-language support
- PWA support
- Docker deployment
- Redis caching

---

# Deployment Requirements

## Frontend Deployment

- Vercel
- Netlify

---

## Backend Deployment

- Render
- Railway
- AWS

---

## Database

- MongoDB Atlas

---

# Expected Output

The final application should deliver:

- Industrial-level restaurant website
- Modern animated UI
- Secure MERN architecture
- Online food ordering
- Table reservation system
- Admin dashboard
- High scalability
- Production-ready deployment setup
"""

path = Path("/mnt/data/restaurant_prompt.md")
path.write_text(content, encoding="utf-8")

print(f"Markdown file created at: {path}")
