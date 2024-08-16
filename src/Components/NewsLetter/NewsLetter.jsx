import React from 'react'
import './NewsLetter.css'
const NewsLetter = () =>{
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers in your email</h1>
        <p>Subcribe to our newsletter and stay updated</p>
        <div>
            <input type="email" name="" id="" placeholder='Your email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter