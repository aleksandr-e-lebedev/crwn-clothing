import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

MenuItem.defaultProps = {
  size: '',
};

export default withRouter(MenuItem);
