import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const CasesIndicatorContainer = styled.View`
  flex-direction: column;
  padding: 0 20px 0 20px;
`;
export const CasesIndicatorText = styled.Text`
  color: ${colors.white};
  font-size: 32px;
`;

export const CasesIndicatorDesc = styled.Text`
  color: ${colors.gray};
  font-size: 14px;
`;
