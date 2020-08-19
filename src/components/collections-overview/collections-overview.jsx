import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} {...{ title, items }} />
    ))}
  </CollectionsOverviewContainer>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      routeName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          imageUrl: PropTypes.string,
          price: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapState)(CollectionsOverview);
