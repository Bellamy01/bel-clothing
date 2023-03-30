import React from "react";

import Cart from "../../assets/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => (
    <div className="cart-icon">
        <img className='shopping-icon' src={Cart} />
        <span className="item-count">0</span>
    </div>
)

export default CartIcon;