import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound-page'>
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>

        <Link to="/" className='notfound-btn'>Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound
