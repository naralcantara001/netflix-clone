import React from 'react'

export const Faq = () => {
  return (
    <section className='faq-container'>
        <h2 className='faq-title'>Frequently Asked Questions</h2>
        <button>
            <span>What is Netflix?</span>
            <span>
                <img src='images/plus.png' alt='img' className='plus'/>
            </span>
        </button>
        <button>
            <span>How much does Netflix cost?</span>
            <span>
                <img src='images/plus.png' alt='img' className='plus'/>
            </span>
        </button>
        <button>
            <span>Where can I watch?</span>
            <span>
                <img src='images/plus.png' alt='img' className='plus'/>
            </span>
        </button>
        <button>
            <span>How do I cancel?</span>
            <span>
                <img src='images/plus.png' alt='img'className='plus'/>
            </span>
        </button>
        <button>
            <span>What can I watch on Netflix?</span>
            <span>
                <img src='images/plus.png' alt='img'className='plus'/>
            </span>
        </button>
        <button>
            <span>Is Netflix good for kids?</span>
            <span>
                <img src='images/plus.png' alt='img' className='plus'/>
            </span>
        </button>

        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='search'>
            <input className='input-search'  placeholder='Email address' type='search'/>
            <button className='btn-search'>Get Started &#62; </button>
        </div>

    </section>
  )
}
