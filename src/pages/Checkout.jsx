import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const {totalPrice,cart,setCart} = useContext(CartContext);
    const {orders,setOrders}=useContext(OrderContext);
    const navigate=useNavigate();

    const handlePlaceOrder=()=>{
      const newOrder={
        id:Date.now(),
        items:cart,
        total:totalPrice
      }
      setOrders(prevOrders=>[...prevOrders,newOrder])
      setCart([])
      navigate('/orders')
    }
  return (
    <div className='checkout-page'>
      <h1 className='checkout-title'>Checkout</h1>

      <div className="checkout-container">
        <div className="checkout-items">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className='checkout-item'>
              <img 
              src={item.image} 
              alt={item.title} 
              className='checkout-item-image'/>

              <div className="checkout-item-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>

            </div>
          ))}
        </div>

      
        <div className="cheeckout-summary">
          <h2>Order Total</h2>

          <div className="checkout-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button onClick={handlePlaceOrder} className='place-order-btn'>Plcae order</button>

        </div>
      </div>
    </div>
  )
}

export default Checkout
