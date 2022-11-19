import styled from 'styled-components';

export const Title = styled.h1`
  font-family: '${({ theme }) => theme.FONT_FAMILY.BALLO2}';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_BOLD};
  font-size: 32px;
  line-height: 41.4px;
  color: ${({ theme }) => theme.COLLORS.BASE_SUBTITLE};
`;

export const AllCoffes = styled.div`
  padding-left: 160px;
  padding-right: 160px;
  margin-top: 25px;
`;
