import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.scss';

// eslint-disable-next-line no-shadow
const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

const mapDispatch = {
  addItem,
  removeItem,
  clearItem,
};

export default connect(null, mapDispatch)(CheckoutItem);
