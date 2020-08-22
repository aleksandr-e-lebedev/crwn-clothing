import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
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
  routeName: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default withRouter(CollectionPreview);
