import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <nav className="navbar">

      <h3 className="navlogo">ShopSphere</h3>

      <section className="navsec">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav active" : "nav"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav active" : "nav"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav active" : "nav"
          }
        >
          Cart
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav active" : "nav"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "nav active" : "nav"
          }
        >
          Orders
        </NavLink>

        {user ? (
          <button
            className="logout-btn"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>
        )}

      </section>

    </nav>
  )
}

export default Navbar