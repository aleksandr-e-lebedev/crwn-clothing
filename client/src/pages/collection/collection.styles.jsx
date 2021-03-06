import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  margin: 0 auto 30px;
  font-size: 38px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
