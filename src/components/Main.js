import React from 'react'

export const Main = () => {
  return (
    <main>
        <section>
            <div className='box'>
                <div className='box-item'>
                    <h2 className='title'>Enjoy on your TV.</h2>
                    <h1 className='sub-title'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h1>
                </div>
                <div className='box-item'>
                   <img src='images/frame.png' alt='img' className='tvsub'/>
                </div>
            </div>
        </section>

        <section>
            <div className='box'>
                <div className='box-item'>
                   <img src='images/frame1.png' alt='img' className='tvsub'/>
                </div>
                <div className='box-item'>
                    <h2 className='title'>Download your shows to watch offline.</h2>
                    <h1 className='sub-title'>Save your favorites easily and always have something to watch.</h1>
                </div>
            </div>
        </section>

        <section>
            <div className='box'>
                <div className='box-item'>
                    <h2 className='title'>Watch everywhere.</h2>
                    <h1 className='sub-title'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h1>
                </div>
                <div className='box-item'>
                   <img src='images/frame2.png' alt='img' className='tvsub'/>
                </div>
            </div>
        </section>

        <section>
            <div className='box'>
                <div className='box-item'>
                   <img src='images/frame3.png' alt='img' className='tvsub'/>
                </div>
                <div className='box-item'>
                    <h2 className='title'>Create profiles for kids.</h2>
                    <h1 className='sub-title'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h1>
                </div>
            </div>
        </section>
    
    </main>
  )
}
