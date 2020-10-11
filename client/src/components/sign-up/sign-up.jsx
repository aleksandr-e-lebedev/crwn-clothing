import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle, SignUpSubtitle } from './sign-up.styles';

// eslint-disable-next-line no-shadow
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

const mapDispatch = {
  signUpStart,
};

export default connect(null, mapDispatch)(SignUp);
