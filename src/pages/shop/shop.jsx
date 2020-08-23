import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionsFetching}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  isCollectionsFetching: PropTypes.bool.isRequired,
  isCollectionsLoaded: PropTypes.bool.isRequired,
  fetchCollectionsStartAsync: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const mapState = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatch = {
  fetchCollectionsStartAsync,
};

export default connect(mapState, mapDispatch)(ShopPage);
