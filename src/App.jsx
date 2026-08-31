import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import CartProvider from './context/CartContext'
import AuthProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './pages/Checkout'
import OrderProvider from './context/OrderContext'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <AuthProvider>
      <CartProvider>
      <OrderProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>

        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
          }/>

        <Route path='/orders' element={<ProtectedRoute> 
          <Orders />
         </ProtectedRoute>}/>

        <Route path='/checkout' element={<Checkout />} />

        <Route path='*' element={<NotFound />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
      </OrderProvider>
      </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
