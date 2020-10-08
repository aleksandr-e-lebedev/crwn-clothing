import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ type, name, value, required, handleChange, label }) => (
  <GroupContainer>
    <FormInputContainer
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={handleChange}
    />
    {label ? <FormInputLabel value={value}>{label}</FormInputLabel> : null}
  </GroupContainer>
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
