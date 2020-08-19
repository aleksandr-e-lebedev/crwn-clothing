import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;

  margin-bottom: 5px;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;

  position: absolute;
  top: 255px;

  display: none;
  opacity: 0.7;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }

    ${AddButton} {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  justify-content: space-between;

  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
