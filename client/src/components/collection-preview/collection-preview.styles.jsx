import styled from 'styled-components';

export const CollectionPreviewContainer = styled.section`
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  margin-bottom: 25px;
  align-self: flex-start;

  font-size: 28px;
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
