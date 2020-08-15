import React from 'react';
import PropTypes from 'prop-types';

import './form-input.scss';

const FormInput = ({ type, name, value, required, handleChange, label }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...{ type, name, value, required }}
    />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

FormInput.defaultProps = {
  required: false,
  label: '',
};

export default FormInput;
