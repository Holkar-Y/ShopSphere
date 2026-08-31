import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({img,name, alt, category}) => {
  return (
    <Link to={`/products?category=${category}`} >
      <div className='fullCat'>
        <img src={img} alt={alt} />
        <p>{name}</p>
      </div>
    </Link>
    
  )
}

export default CategoryCard
