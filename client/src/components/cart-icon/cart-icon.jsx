import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

// eslint-disable-next-line no-shadow
const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
};

const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatch = {
  toggleCartHidden,
};

export default connect(mapState, mapDispatch)(CartIcon);
