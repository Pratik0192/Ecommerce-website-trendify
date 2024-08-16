import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () =>{
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="decriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae reiciendis 
                at dolor sequi atque error sint provident maiores architecto. Quam qui minus sunt, 
                perspiciatis molestias cumque temporibus laudantium, totam fugiat, possimus aliquid 
                iste. Dolore ex odit aliquid sint omnis aperiam deserunt harum eos reiciendis voluptatum </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur porro cumque ab 
                    consequatur, nihil quaerat? Doloremque porro incidunt, ex reprehenderit ipsa aperiam rem
                </p>
        </div>
    </div>
  )
}

export default DescriptionBox