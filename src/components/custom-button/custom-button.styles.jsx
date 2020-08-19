import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  background-color: black;
  color: white;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid black;
  background-color: white;
  color: black;

  &:hover {
    border: none;
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  border: none;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

// eslint-disable-next-line import/prefer-default-export
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;

  padding: 0 35px 0 35px;

  display: flex;
  justify-content: center;

  cursor: pointer;

  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;

  line-height: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: white;

  ${getButtonStyles}
`;
