import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({
  className,
  children,
  type,
  handleClick,
  isGoogleSignIn,
  inverted,
}) => (
  <CustomButtonContainer
    className={className}
    type={type}
    onClick={handleClick}
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
  >
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  handleClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

CustomButton.defaultProps = {
  className: '',
  handleClick: () => {},
  isGoogleSignIn: false,
  inverted: false,
};

export default CustomButton;
