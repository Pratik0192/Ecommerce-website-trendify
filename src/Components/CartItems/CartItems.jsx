import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                const quantity = cartItems[e.id] || 0; // Default to 0 if undefined

                if (quantity > 0) { // Use quantity instead of cartItems[e.id]
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>Rs.{e.new_price * quantity}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null; // Don't render anything if quantity is 0
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>cart Totals</h2>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h4>Total</h4>
                            <h4>Rs.{getTotalCartAmount()}</h4>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
