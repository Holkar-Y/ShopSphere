import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ShopSphere</h2>
          <p>Modern Fashion E-Commerce Platform</p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <Link to="/products?category=men">Men</Link>
          <Link to="/products?category=women">Women</Link>
          <Link to="/products?category=accessories">Accessories</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopSphere. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer