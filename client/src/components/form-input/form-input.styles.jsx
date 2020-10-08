import styled, { css } from 'styled-components';

const mainColor = 'black';
const subColor = 'grey';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  margin: 45px 0;
  position: relative;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  width: 100%;

  margin: 25px 0;
  padding: 10px 10px 10px 5px;

  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  display: block;

  background: none;
  background-color: white;

  font-size: 18px;
  color: ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 5px;

  pointer-events: none;

  font-size: 16px;
  font-weight: normal;
  color: ${subColor};

  transition: all 0.3s;

  ${({ value }) => value.length && shrinkLabelStyles}
`;
