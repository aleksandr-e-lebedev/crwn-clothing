import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapState = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
