import React, { createContext, useEffect, useState } from 'react'
export const OrderContext=createContext();

const OrderProvider = ({children}) => {
    const [orders,setOrders]=useState(()=>{
        const savedOrders=localStorage.getItem("orders");
        return savedOrders? JSON.parse(savedOrders):[];
    });
    useEffect(()=>{
        localStorage.setItem("orders",JSON.stringify(orders));
    })
  return (
    <OrderContext.Provider value={{orders,setOrders}} >
        {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
