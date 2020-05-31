import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const HeaderTitleContainer = styled.View`
  padding: 20px 20px 14px 20px;
  flex-direction: row;
  align-items: flex-end;
`

export const HeaderLabelTxt = styled.Text`
  font-size: 34px;
  color: ${colors.gray};
  padding-left: 8px;
  font-weight: 600;
`;

export const HeaderTitleTxt = styled.Text`
  color: ${ colors.white };
  font-weight: 700;
  font-size: 38px;
`;
