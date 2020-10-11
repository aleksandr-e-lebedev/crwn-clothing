import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionPage from './collection';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapState = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
