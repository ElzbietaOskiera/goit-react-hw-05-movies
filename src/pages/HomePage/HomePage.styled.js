import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const TitleStyled = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgba(191, 122, 158, 0.8)
`;
