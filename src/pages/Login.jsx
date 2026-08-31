import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const {setUser}=useContext(AuthContext);

  const handleLogin=(e)=>{
    e.preventDefault();
    
    if(email.trim()==="" || password.trim()==="" || name.trim()===""){
      setError("You must fill the inputs");
      return;
    }
    setError("");
    setUser({name,email});
  }
  return (
    <div className='login-page'>
      <div className="login-card">

        <h1>Welcome Back</h1>
        <p className="login-subtitle">Login to your ShopSphere account</p>

      <form onSubmit={handleLogin}>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text"
          placeholder='Enter your name' 
          value={name} 
          id='name'
          onChange={(e)=>setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          placeholder='Enter your email' 
          value={email} 
          id='email'
          onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password</label>
          <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          id='password'
          onChange={(e)=>setPassword(e.target.value)} />
        </div>

        {error && <p className='login-error'>{error}</p>}

        <button className='login-btn' type='submit'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
