import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51N678WHHnM1b0HZQnfchNXQK7yATgBhSrbOXk2qN3boiD7svdDT6MoDHZw4KgseWHfa6FxwWXgFYiZR85VqQOOF000HhOlEUdI';
    
    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }
    return (
        <StripeCheckout
            name="Bel Clothing LTD"
            label="Pay with 💳"
            panelLabel="Pay Now"
            currency="USD"
            stripeKey={publishableKey}
            token={onToken}
            image="http://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            billingAddress
            shippingAddress
        />
    )
}

export default StripeCheckoutButton;