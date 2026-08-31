import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  const {user, setUser}= useContext(AuthContext);
  return (
    <div className='profile-page'>
      <div className='profile-card'>

        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">
          <div>
            <span>Name</span>
            <p>{user.name}</p>
          </div>
          <div>
            <span>Email</span>
            <p>{user.email}</p>
          </div>
        </div>

        <button 
        onClick={()=>setUser(null)}
        className='profile-logout-btn'
        >Logout</button>

      </div>
    </div>
  )
}

export default Profile
