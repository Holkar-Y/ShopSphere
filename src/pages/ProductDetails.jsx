import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../services/productService';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const {id}=useParams();
  const [product,setProduct]=useState(null);

  const [loading, setLoading]=useState(true);
  const [error,setError]=useState("");

  useEffect(()=>{
    const fetchProduct=async()=>{
      try{
        const data=await getProductsById(id);
        setProduct(data);
      }
      catch(error){
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchProduct();
  },[id]);

  const {addToCart}=useContext(CartContext);

  return (
    <div className='product-details-page'>
      {error && <p className='product-details-error'>{error}</p>}
      {!loading && !error && product &&(
      <div className='product-details'>
        <div className='product-details-image'>
          <img src={product.image} alt={product.title} />
        </div>

        <div className='product-details-info'>
          <h2>{product.title}</h2>
          <p className='product-details-rating'>⭐{product.rating.rate}</p>
          <p className='product-details-price'>${product.price}</p>
          <p className='product-details-description'>{product.description}</p>
          <button onClick={()=>addToCart(product)} className='add-cart-btn'>Add to cart</button>
          </div>

      </div>
    )}
    </div>
  )
}

export default ProductDetails
