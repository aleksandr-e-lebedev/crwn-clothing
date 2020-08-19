import React from 'react';
import PropTypes from 'prop-types';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
