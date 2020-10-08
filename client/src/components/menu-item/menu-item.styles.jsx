import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: white;
  opacity: 0.7;
`;

export const ContentTitle = styled.h2`
  margin: 0 6px 0;

  font-size: 22px;
  font-weight: bold;

  color: #4a4a4a;
`;

export const ContentSubtitle = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: lighter;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size === 'large' ? '380px' : '240px')};

  margin: 0 7.5px 15px;

  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ContentContainer} {
      opacity: 0.9;
    }
  }
`;
