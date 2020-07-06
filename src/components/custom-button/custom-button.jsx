import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ children, type }) => (
  <button className="custom-button" type={type}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
};

export default CustomButton;
