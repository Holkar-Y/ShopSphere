import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

const Orders = () => {
  const {orders}= useContext(OrderContext);
  return (
    <div className='orders-page'>
      <h1 className='orders-title'>Orders</h1>

      {orders.length===0?(<div className='no-orders'>
        <h3>No orders yet</h3>
        <p>Your placed orders will appear here.</p>
        </div>
        ):(
        <div className="orders-list">
        {orders.map((order)=>(
          <div className='order-card' key={order.id}>
            <div className='order-header'>
              <h3>Order #{order.id}</h3>
            </div>

            <div className='order-items'>
              {order.items.map((item)=>(<div className='
              order-item' key={item.id}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='order-item-image'
                />

                <div className="order-item-info">
                  <h4>{item.title}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
            </div>

            <div className="order-total">
              <span>Total</span>
              <strong>${order.total.toFixed(2)}</strong>
            </div>

          </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default Orders
