import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  SignInSubtitle,
  ButtonsBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-shadow
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({ email, password });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { googleSignInStart } = this.props;
    const { email, password } = this.state;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubtitle>Sing in with your email and password</SignInSubtitle>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              handleClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired,
};

const mapDispatch = {
  googleSignInStart,
  emailSignInStart,
};

export default connect(null, mapDispatch)(SignIn);
