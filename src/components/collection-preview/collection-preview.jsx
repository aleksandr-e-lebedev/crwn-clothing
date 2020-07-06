import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, name, imageUrl, price }) => (
          <CollectionItem key={id} {...{ name, imageUrl, price }} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CollectionPreview;
