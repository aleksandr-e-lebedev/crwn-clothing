import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.scss';

const CustomButton = ({
  children,
  type,
  handleClick,
  isGoogleSignIn,
  inverted,
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
      inverted ? 'inverted' : ''
    } custom-button`}
    type={type}
    onClick={handleClick}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  handleClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

CustomButton.defaultProps = {
  handleClick: () => {},
  isGoogleSignIn: false,
  inverted: false,
};

export default CustomButton;
