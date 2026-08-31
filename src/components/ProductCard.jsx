import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <Link to={`/products/${product.id}`}>
        <img className='product-image' src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>⭐{product.rating.rate}</p>
      </Link>
    </div>
  )
}

export default ProductCard
