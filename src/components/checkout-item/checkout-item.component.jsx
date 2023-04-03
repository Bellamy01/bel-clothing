import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem , clearItem, addItem, removeItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow left" onClick={ ()=> removeItem(cartItem)}>&#10148;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={ () => addItem(cartItem)}>&#10148;</div>
            </span>
            <span className="price">$ {price}</span>
            <span className="remove-button" onClick={ () => clearItem(cartItem) } >&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);