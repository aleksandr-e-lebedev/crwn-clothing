import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item/menu-item';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory-menu.scss';

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
      <MenuItem key={id} {...{ title, imageUrl, linkUrl, size }} />
    ))}
  </div>
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
