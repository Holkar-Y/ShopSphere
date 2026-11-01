# 🛍️ ShopSphere – React E-commerce Web Application

ShopSphere is a responsive e-commerce web application built with **React.js**. It provides a simple online shopping experience where users can browse products, search and filter items, view product details, manage their shopping cart, and place orders.

The project was developed to gain practical experience with React concepts such as component-based architecture, state management, routing, API integration, and Local Storage.

### 🔗 Live Demo
[View Live Demo](shopsphere-three-phi.vercel.app)

### 📌 GitHub Repository
[View Source Code]([YOUR_GITHUB_REPOSITORY_URL](https://github.com/Holkar-Y/ShopSphere))

## ✨ Features

- **Product Listing:** Fetch and display products dynamically from the Fake Store API.
- **Product Details:** View individual product information, including images, descriptions, prices, and ratings.
- **Search Functionality:** Search products by their names.
- **Category Filtering:** Filter products based on selected categories.
- **Sorting:** Sort products by price (low to high and high to low).
- **Shopping Cart:** Add and remove products and manage item quantities.
- **Price Calculation:** Automatically calculate the cart's total price.
- **User Authentication:** Basic frontend login functionality.
- **Protected Routes:** Restrict access to Profile and Orders pages based on login state.
- **Checkout:** Place orders using the current cart items.
- **Order Management:** View placed orders and their details.
- **Data Persistence:** Use Local Storage to preserve selected application data across page refreshes.
- **Responsive Design:** User-friendly interface for different screen sizes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic and functionality |
| React Router | Navigation and protected routes |
| Context API | Global state management |
| React Hooks | Managing state and component side effects |
| Fake Store API | Fetching product data |
| Local Storage | Persisting frontend data |
| CSS3 | Styling and responsive layouts |

## 📂 Project Structure

```text
ShopSphere/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   │   └── CategoryCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Checkout.jsx
│   │   ├── Orders.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── OrderContext.jsx
|   |
│   ├── services/
│   │   ├── productService.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```


## 🌐 API Integration

ShopSphere uses the [Fake Store API](https://fakestoreapi.com/) to retrieve product information.

**API Endpoints:**

- Get all products: `https://fakestoreapi.com/products`
- Get a single product: `https://fakestoreapi.com/products/1`

Product data is fetched using the Fetch API and displayed dynamically in the application.

## 🧠 React Concepts Practiced

While developing ShopSphere, I gained practical experience with:

- Functional Components and JSX
- Props and Component Reusability
- State Management using `useState`
- Side Effects using `useEffect`
- Context API for global state management
- `useReducer` and Custom Hooks
- React Router and Dynamic Routing
- Protected Routes
- Conditional Rendering
- API Integration using Fetch API
- Forms and Input Validation
- Local Storage
- Search, Filtering, and Sorting

## 🔮 Future Improvements

- Develop a backend using Node.js and Express.js.
- Integrate MongoDB for persistent data storage.
- Implement secure server-side user authentication.
- Add a real payment gateway.
- Build an admin dashboard for product and order management.
- Improve application security and scalability.

## ⚠️ Project Scope

ShopSphere is currently a **frontend-focused learning project**. It uses the Fake Store API for product data and browser Local Storage for frontend persistence. The login functionality is a basic frontend demonstration, not production-grade authentication. Checkout and order management are also handled on the client side; no real payment is processed.

## 👩‍💻 Developer

**Yashasvi Holkar**

Frontend Developer | React.js | JavaScript

- GitHub: https://github.com/Holkar-Y
- LinkedIn: https://www.linkedin.com/in/yashasvi-holkar-3b4443303

---

⭐ If you find this project useful, feel free to explore the repository!
