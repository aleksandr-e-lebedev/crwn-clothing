import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

// eslint-disable-next-line no-shadow
const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
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
