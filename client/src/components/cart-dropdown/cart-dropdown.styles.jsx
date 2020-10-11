import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
  width: 240px;
  height: 340px;

  border: 1px solid black;
  padding: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;

  position: absolute;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;

export const CartItemsContainer = styled.div`
  height: 240px;

  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
