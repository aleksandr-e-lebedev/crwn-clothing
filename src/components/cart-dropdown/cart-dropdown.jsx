import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

// eslint-disable-next-line no-shadow
const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      type="button"
      handleClick={() => {
        toggleCartHidden();
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatch = {
  toggleCartHidden,
};

export default withRouter(connect(mapState, mapDispatch)(CartDropdown));
