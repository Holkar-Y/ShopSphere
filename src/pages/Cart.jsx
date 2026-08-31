import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeQuantity,
    totalPrice
  }=useContext(CartContext);
  const navigate= useNavigate();
  return (
  <div className='cart-page'>
    <h1>Shopping Cart</h1>

    {cart.length!==0?(
      <div className='cart-content'>
        <div className="cart-items">

        {cart.map((item)=>(
          <div key={item.id} className='cart-item' >
            
            <img 
            src={item.image} 
            alt={item.title}
            className='cart-item-image'/>

          <div className='cart-item-info'>
            <h2>{item.title}</h2>
            <p className='cart-item-price'>${item.price}</p>
          
            <div className="quantity-control">
              <button onClick={()=>decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>increaseQuantity(item.id)}>+</button>
            </div>

            <button onClick={()=>removeQuantity(item.id)} className='remove-btn' >Remove</button>
            </div>
          </div>
        ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>

            <button onClick={()=>navigate('/checkout')} className='checkout-btn' >Proceed to checkout</button>
          </div>
        </div>
      </div>     
    ):( 
      <div className="empty-cart">
         <h3>Your Cart is empty</h3>
         <p>Add some products to your cart to see them here.</p>
      </div>
    )}

  </div>
  )
}

export default Cart
