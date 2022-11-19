import styled from 'styled-components';

export const CoffeContainer = styled.div`
  width: 256px;
  height: 310px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${({ theme }) => theme.COLLORS.BASE_CARD};
`;
