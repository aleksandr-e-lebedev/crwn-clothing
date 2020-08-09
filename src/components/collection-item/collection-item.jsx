import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CustomButton from '../custom-button/custom-button';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';

// eslint-disable-next-line no-shadow
const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton type="button" handleClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatch = {
  addItem,
};

export default connect(null, mapDispatch)(CollectionItem);
