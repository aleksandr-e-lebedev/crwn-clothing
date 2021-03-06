import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// eslint-disable-next-line no-shadow
const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const mapDispatch = {
  fetchCollectionsStart,
};

export default connect(null, mapDispatch)(ShopPage);
