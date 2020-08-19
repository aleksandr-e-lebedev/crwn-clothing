import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';

// eslint-disable-next-line no-shadow
const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton type="button" handleClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
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
