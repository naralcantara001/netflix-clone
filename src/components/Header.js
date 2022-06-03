import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className='frame'>
        <h1>Unlimited movies, TV <br/> shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p className='sub-title'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='search'>
            <input className='input-search'  placeholder='Email address' type='search'/>
            <button className='btn-search'>Get Started &#62; </button>
        </div>
      </div>
    </header>
  )
}
