import styled from 'styled-components';
import background from '@app/assets/header/Background.png';

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 544px;
  width: 100%;
  display: flex;
  align-items: center;

  padding-left: 160px;
  padding-right: 160px;

  > div {
    width: 588px;
  }

  > img {
    height: 360px;
  }
`;

export const Title = styled.h1`
  font-family: '${({ theme }) => theme.FONT_FAMILY.BALLO2}';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_BOLD};
  font-size: 48px;
  line-height: 62.4px;
  color: ${({ theme }) => theme.COLLORS.BASE_TITLE};
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.COLLORS.BASE_SUBTITLE};
  margin-top: 16px;
`;

export const Legend = styled.div`
  display: grid;
  grid-template-columns: 240px 294px;
  row-gap: 20px;
  column-gap: 30px;
  margin-top: 66px;
  > div {
    max-width: 294px;
    display: flex;
    align-items: center;
  }

  p {
    padding-left: 12px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    font-size: 16px;
  }
`;
