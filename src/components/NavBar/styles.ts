import styled from 'styled-components';

export const Container = styled.div`
  height: 103px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 160px;
  padding-right: 160px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;

      > img {
        padding-left: 12px;
      }
    }
  }
`;

export const Localization = styled.div`
  background-color: ${({ theme }) => theme.COLLORS.PURPLE_LIGHT};
  height: 38px;
  width: 143px;
  display: flex;
  padding: 8px;
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-size: 14px;
  align-items: center;
  color: ${({ theme }) => theme.COLLORS.PURPLE_DARK};
`;
