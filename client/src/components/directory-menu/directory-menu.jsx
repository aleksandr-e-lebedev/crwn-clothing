import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item/menu-item';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory-menu.styles';

const DirectoryMenu = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
      <MenuItem key={id} {...{ title, imageUrl, linkUrl, size }} />
    ))}
  </DirectoryMenuContainer>
);

DirectoryMenu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      linkUrl: PropTypes.string,
      size: PropTypes.string,
    })
  ).isRequired,
};

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapState)(DirectoryMenu);
