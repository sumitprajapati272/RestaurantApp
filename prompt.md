#  Industrial-Level Full-Stack Restaurant Website Prompt

## Context and Role

In the capacity of a Full-Stack MERN Developer, your mandate is to develop a high-performing Restaurant Website characterized by immersive user interface animations, robust back-end design, and a scalable online ordering ecosystem.

The application should be designed to offer an excellent digital experience in the form of modern user interface/user experience design, seamless storyboarding animations, online food orders, table reservations, robust back-end security, cloud-based database management, and management features.

Premium, interactive, scalable, visually attractive but at the same time accessible, responsive, and secure should be the characteristics of the website.

Moreover, it should be noted that secure customer engagement, email automation capabilities, and admin management features should be incorporated into the system.
 

# Objective

Develop a complete industrial-level full-stack Restaurant Website that:

* Implements immersive scroll-based storytelling animations using Framer Motion.
* Provides a responsive and modern restaurant UI.
* Supports online food ordering and cart management.
* Includes secure JWT authentication and profile management.
* Implements a fully functional table reservation system.
* Provides a restaurant management interface.
* Stores securely customer data, booking data, menu card details, and order details.
* Provides automated email service for customers whenever needed.
* Guarantees production-quality performance and security of the system.

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

# Layout Specifications

There should be:

* Hero Section – Contains the main banner, name of the restaurant, headlines, Call-To-Action buttons, and animated intro.
* About Restaurant Section – Contains information about the restaurant story, vision, ambience, and experience.
* Featured Dishes Section – Contains the featured or signature dishes having attractive food card designs.
* Full Dynamic Menu Section – Contains all categories of the menu items along with prices, descriptions, and filters.
* Special Offer Section – Contains all the discounts, combos, and offers that can be availed by the customers.
* Chefs’ Introduction Section – Introduces the chefs, their specialties, achievements, and restaurant’s overall cuisine experience.
* Customer Testimonial Section – Contains customer reviews along with ratings and animation effects.
* Booking Section – Helps the customers book tables at the restaurant using an interactive calendar.
* Food Ordering Section – Helps to browse dishes, manage cart, and place the orders.
* Gallery Section – Contains images of interior design, food preparation process, dining experience, events, and more.
* Contact Section – Enables customers to contact the restaurant via a form.
* Footer Section – Contains social media icons, policy terms, copyrights, and more.
The layout must be:

* Response for all devices (mobile, tablets, and computers)
* SEO
* Website accessibility through semantic tags and ARIA labels in HTML
* Compliance with Core Web Vitals
* Updated design and styles
* Testing across browsers
* Visual hierarchy, spacing, and typography
* A “mobile first” philosophy for responsive design
* Image optimization and lazy loading

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

# Checkout Process

Implement:

* Checkout process security – Design a secured multi-step checkout process that securely takes care of the cart verification, pricing calculation, user authentication, payment and order confirmation processes while preventing the occurrence of duplicated or incorrect order creation.

* Delivery form – Build a validated delivery form where customers can enter relevant delivery details such as full name, contact number, e-mail id, delivery location, city name, ZIP code, delivery instructions and more before placing an order.

* Address management features – Enable users to save, update, delete and even reuse different delivery addresses from their profile dashboard page.

* Order summary page – Show the order summary which will display all the selected foods, total amount of quantity purchased, sub-total amount, taxes applied, delivery charges, discount applied and net pay amount in real time before payment confirmation.

* Integration support for online payment systems – Integrate the platform with various online payment methods such as Stripe, Razorpay and other similar systems for secure token management and transactional verification.

* Confirmation page – Direct the users towards the confirmation page after a successful checkout where it will show the unique order ID, payment status, expected delivery time and order details.

* Success/error handling

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
# Fields in the Reservation Form

These should include:

* Full Name - This will be used by the website to capture the full name of the client who needs to make the reservation.

* Email Address - It is important to gather information about the email address from the client so that the reservation can be notified using that method.

* Phone Number - This will ensure that you have the means to contact the client in case any other follow up actions are necessary.

* Date - Ensure that the client can pick a date for their reservation from the drop-down menu.

* Time - The clients will pick the time during which they wish to come in for their reservation.

* Number of Guests - The client will inform us about how many people will join them on that day.

* Special Requests (Optional)

---

# Validation Requirements

Implement:

* Client-side validation – Perform validation on client side of all fields in any form prior to submission using appropriate validation for required fields, correct lengths, format and emptiness.

* Server side validation – Implement server-side validation for all incoming requests for data consistency, sanitization of any user input to avoid manipulation attempts, and for any data that bypasses frontend validation checks.

* Structured validation response – Provide validation feedback in a structured manner using JSON with detailed information about failed validation of each specific field as well as status code and meaningful error messages.

* Invalid data prevention – Prevent sending incomplete, repeated, empty, malformed or non-authorized form data by performing proper validation and controlling form submission attempts.

* Email validation – Validate the email address using secure regular expression and appropriate back-end checks to assure proper email structure.

* Spam protection – Integrate CAPTCHA mechanism into your forms and APIs to prevent any spamming attempts. Additionally, use honeypot fields and suspicious activity checks to detect and block suspicious activities.

* Rate limiting – Perform API rate limiting per one user or same IP to limit number of API calls from the same source.

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

## Features of the Dashboard

A secure admin dashboard must include the following features:

* Order Management - Enable administrators to manage orders such as tracking, viewing, updating, confirming and cancelling orders of customers in real-time fashion.

* Table/Reservation Management - Help administrators manage tables and reservations by monitoring booking, approving/rejecting reservations and managing customer booking requests.

* Menu Management - Provide dynamic menu management facility through which food items can be added, edited, categorized and deleted.

* User Management - Help administrators manage customers' accounts by tracking their activities, modifying roles of users and suspending accounts if necessary.

* Sales Analytics - Provide comprehensive analytics dashboard through which performance of the restaurant such as total sales, bestselling dishes, order growth etc. can be monitored.

* Revenue Statistics - Enable administrators to track income from various sources on daily, weekly, monthly and yearly basis.
* Customer management – Admins must have the capability to track customers’ engagement, review customer order history, manage customer feedback, and understand customer behavioral patterns.

* Food inventory management (optional) – This feature allows the tracking of ingredients, stock levels, alerts on low stocks, and other operations related to restaurant inventory.

* Reviews management – The administrator will have the ability to approve, disapprove, edit, or delete inappropriate customer reviews and rating scores.

* Dashboard graphics and reporting – The system should be able to display dynamic charts, graphs, performance metrics, and reports using modern analytical visualization tools.

The other capabilities that the dashboard can have include the following:

* Real-time update of the dashboard for orders, reservation, and customer activities without full-page refresh.

* Access control for administrative functions based on role.

* Searching, filtering, sorting, and pagination capabilities for better management of large sets of restaurant information.

* Logs and monitoring of actions taken by the administrator.

The UI design for Dashboard will comprise of:

* Navigation bar - It will be helpful in creating an organized menu to enable users to navigate easily through the orders, reservations, analytics, users, menu, and other settings.

* Live card analytics - Creating dashboard cards in an appealing way with information that includes analytics.

* Mobile responsive Dashboard UI design - This should work on mobile phones, tablets, laptops, and personal computers.

* Modern animations - Using lightweight animation and transitions to enhance interactions by users on the dashboard.

* Dark mode/Light mode - This will allow users to toggle to light and dark mode on a Dashboard UI page.

# Dynamic Menu Management System

Administrator needs to have the capability to:

* Add food items – Should enable administrators to dynamically add food items on the website by inputting the dish name, its description, category, ingredients, pricing, ratings, and availability status.

* Edit food items – Should allow admins to edit and modify the details of the food items such as changing pricing and descriptions and categories or food images if required.

* Delete dishes – Should enable administrators to delete any old or not available food items from the restaurant's menu without violating any database consistency rules or security.

* Upload food images – Should enable secure file upload of images for the menu items with proper middleware and cloud-based storage services to maintain quality food images.

* Manage food categories – Should enable admins to categorize dishes based on their types like starters, main course, desserts, beverages, and special dishes.

* Edit pricing – Should support dynamic updating of pricing for food dishes and combos.
---

# Backend requirements

## API Architecture

Create the following APIs:

Authentication - Create APIs for the process of authentication, including registration, login, logout, reset password, create token, and authentication using JWTs via protected routes.

Menu Management - APIs that handle menu creation, update, delete, get, search, and classify menus.

Cart Management - APIs that will help to handle the processes performed in the cart such as add products in the cart, modify cart, delete items in cart, and total of cart.

Order Food - APIs for handling order food. These include place an order, change order status, get orders of customers, pay for the order, and perform other order-related actions.

Table Reservation - APIs for handling table reservation. These include modify reservation, confirm reservations, handle guest reservations, and cancel reservations.

Contact Form - APIs for handling contact form actions. These include validate contact form, create contact form, and email contact forms to restaurant admins.

Users - APIs for handling information of users, locations of users, users' session and others user data.

The backend should:

* Be based on modular architecture – Build backend code into modular components like routes, controllers, middleware, services, models, and utilities.

* Be built according to RESTful API specifications – Create backend APIs based on proper use of HTTP requests, standardized endpoints, status codes, request and response logic.

* Return structured JSON responses – Ensure that all APIs return JSON responses in a structured format for both success and error cases.

* Have centralized error handling – Design a centralized backend error handling framework that handles validation, server-side, authentication, and other backend related errors.

* Utilize the async/await pattern – Develop backend logic using the async/await approach to create better scalability and readable code.

---
# Database requirements

Using MongoDB, store the following:

* Users – All information related to users, user accounts, passwords, roles, and profiles should be stored securely. In addition to that, save users' stored addresses.

* Orders – All the information about orders, deliveries, payment options, and transaction information should be securely stored.

* Reservations – All information related to reservations booked by customers such as booking date, number of people, status, and special requirements should be securely stored.

* Menu items – Information about all types of food item such as its title, description, cost, picture, category, availability, and ratings should be securely stored.

* Reviews – Feedbacks or information provided by customers regarding their visit and dish should be securely stored.

* Contact messages – Message posted on the website's contact form should be securely stored.

Implement the following:

* Schema relationships – A proper schema design will be done to establish relationships between users, orders, reservations, reviews, and menu items using object IDs.

* Indexing of queries – Query optimization will be done through indexing.

* Performance optimization – Efficient query and schema designs should be implemented.

---

# Email Notification System

## Automation Process

Send emails automatically for:

* Order confirmation emails - Send order confirmation emails automatically once an order is placed containing order information, delivery information, payment information, and date of delivery.

* Reservation confirmation emails - Send reservation confirmation emails automatically with information about date of booking, timing, guest details, and contact information of restaurant.

* Contact form submission emails - Send automatic emails to restaurant manager when customers send their queries through the contact form on the restaurant website.

* Payment confirmation emails - Send automatic emails to customers confirming their payment and providing transaction information.

* Admin emails - Notify administrator regarding different events happening within the application.

Use:

* Nodemailer - Use Nodemailer module in Node.js for creating automatic emails, using features of SMTP authentication, template generation, and automation.

* SMTP email services - Use SMTP email services to send transactional emails, automatic emails, and alert emails.

* Transactional email APIs - Use transactional email APIs to automate emails in production environments.

Email credentials should be saved in environment variables.

# Contact System Requirements

## Contact System Features

For it to have:

* A form in its modal page
* The animations of the modals
* Validation of forms
* Handling of messages securely
* Notification email to restaurant owner
* States of success and fail for contact

---

# File Upload System Requirements

Security of the file uploads in:

* Uploading pictures of the food items
* Uploading images for galleries of restaurants
* Uploading of users profile pictures

The system will utilize:

* Multer middleware
* Cloudinary or AWS S3 service for storage (Optional)

---

# Security Requirements

## Security System Features

Input sanitization and validation of the system from the following attacks:

* XSS attack - By validating user input through sanitizing of user inputs and safe output of dynamic data.

* Injection attacks - By validating user input and safe handling of data on the server-side.

* Unwanted access - By restricting access to the website and parts such as restricted pages, dashboards, and other parts through JWT tokens and sessions.

* Spam submissions - With CAPTCHA and other techniques to block spammers.

Implementation:

* Helmet.js - Use Helmet.js middleware for enhancing HTTP headers, disabling unsafe browser functionalities, securing API endpoints and preventing web security risks.

* Rate limiting - Restrict the rate of requests made by users/IP addresses to the server at any given period of time. This would help prevent brute force attacks and malicious users causing spamming of your server.

* JWT Token verification middleware - Add middleware to verify whether your JWT tokens are secure and allow only access to your private APIs.

* Environment variables protection - Use the dotenv package to secure your database URL, JWT secret keys, SMTP password, API and gateway keys.

* Middleware Security - Use reusable middleware to carry out validations, authentications, sanitizations and error handling for your API.

* Secure Admin Routes - Use role-based access control mechanisms to allow authenticated access to your system administrative functionalities.
---

## # Performance & Scalability

Optimization:

* Bundle Size
* Animations
* Database queries
* API responses
* Images
* Lazy Loading
* Components

Ensure:

* Scalable traffic capacity
* Quick page loads
* SEO optimization
* Accessibility adherence
* Effective caching systems

---

# Error Handling & Documentation

## Error Handling

Properly manage:

* Order failures
* Reservation failures
* Authorization errors
* Payment failures
* Validation errors
* Email sending failures
* Connection failures

Include:

* Well-formatted error messages
* Error logging on the backend
* Error states on the frontend
* Informative user notifications

---

# Documentation Requirement

Document the following:

* Folder organization
* API structure
* Database structure
* Variables environment
* Installation process
* Deployment process
* Authorization process
* Admin dashboard utilization

---

# Tech Stack

## Frontend

Use:

* React.js OR Next.js
* Tailwind CSS
* Framer Motion
* Axios
* Redux Toolkit / Context API

### Backend

Tools:

- Node.js - Node.js will be used for developing the backend of the app through JavaScript.

- Express.js - This is a framework which can help in developing RESTful APIs through routing, middleware, authentications, validations and other business logics.

- JWT - JWT authentication tools will help in authenticating your route and implementing the required authentications.

- Bcrypt - This is a hashing tool that will help in hashing your password and storing them securely in the database.

- Nodemailer - This will be used for sending emails related to your app such as order confirmation, reservation confirmation and other emails.

- Dotenv - This tool helps in managing your environment variables such as database URI, JWT secret key, API keys, SMTP credentials and other required variables.

- Multer - An intermediate layer middleware will help in uploading files including menu, gallery, user profile pictures and other required files.

---

### Database

Database:

- MongoDB - The database in which all data will be stored, such as user details, menu, order details, reviews, contact form entries, reservations and other details.

- Mongoose ODM - You can use Mongoose ODM for schemas, validations, querying and managing relations between models.
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
