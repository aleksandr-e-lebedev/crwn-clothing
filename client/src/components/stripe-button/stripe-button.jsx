import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import PropTypes from 'prop-types';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HG3RrDBKwkoPncPS93I2ld1zqAHgMfApzvHDbY28BZ5Rcubj14OpzlEJrAtILZsOhkflaiRIoIPnglNCgohlsK200XYgTMPI1';

  const onToken = async (token) => {
    try {
      await axios({
        url: '/api/payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });

      // eslint-disable-next-line no-alert
      alert('Payment Successful');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Payment Error: ', error);

      // eslint-disable-next-line no-alert
      alert(
        'There was an issue with your payment! Please make sure you use the provided credit card.'
      );
    }
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
