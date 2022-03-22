import React from 'react'
import { useNavigate } from 'react-router'

function Logout_page() {
    let navigate = useNavigate()
  return (
    <div>
      <div className='logout_page'>
          <h1>Welcome <span>User</span></h1>
      </div>
      <button className='logout_btn' onClick={() => {navigate('/')

      }}>Log-Out</button>
    </div>
  )
}

export default Logout_page
