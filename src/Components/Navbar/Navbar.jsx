import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/nav_dropdown.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'


const Navbar = () => {

    const  [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("home&living")}}><Link style={{textDecoration: 'none'}} to='/home&living'>Home & Living</Link>{menu==="home&living"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("laptop")}}><Link style={{textDecoration: 'none'}} to='/laptop'>Laptops</Link>{menu==="laptop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mobile&tablet")}}><Link style={{textDecoration: 'none'}} to='/mobile&tablet'>Mobile & Tablets</Link>{menu==="mobile&tablet"?<hr/>:<></>}</li>
        </ul>
        <div className="search">
            <BiSearch className='search-icon'/>
            <input type="text" placeholder='search for product, brands and more' />
        </div>
        <div className="nav-login-cart">
            <Link to='/login'>
                <BiUser className='nav-icon'/>
            </Link>
            <AiOutlineHeart className='nav-icon'/>
            <Link to='/cart'>
            <BsBag className='nav-icon'/>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;