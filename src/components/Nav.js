import React from 'react'
export const Nav = () => {
  return (
    <nav>
        <img src='images/logo.png' alt='logo' className='logo'/>
        <div className='btn-container'>
            <button className='btn-signIn'>Sign In</button>
        </div>
    </nav>
  )
}
