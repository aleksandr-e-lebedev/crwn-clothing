import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HG3RrDBKwkoPncPS93I2ld1zqAHgMfApzvHDbY28BZ5Rcubj14OpzlEJrAtILZsOhkflaiRIoIPnglNCgohlsK200XYgTMPI1';

  const onToken = (token) => {
    // eslint-disable-next-line no-console
    console.log(token);
    // eslint-disable-next-line no-alert
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeButton;
