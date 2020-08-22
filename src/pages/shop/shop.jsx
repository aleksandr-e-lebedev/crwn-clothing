import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import {
  firestore,
  convertCollectionsShapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsShapshotToMap(snapshot);

      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  updateCollections: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

const mapDispatch = { updateCollections };

export default connect(null, mapDispatch)(ShopPage);
