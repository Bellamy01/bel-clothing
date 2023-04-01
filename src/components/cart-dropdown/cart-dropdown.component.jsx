import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartDropDown = ({ cartItems, dispatch }) => {
    const navigator = useNavigate();
    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) :
                (<span className="empty-cart">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            navigator("/checkout")
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);