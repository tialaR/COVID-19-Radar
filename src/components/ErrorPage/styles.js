import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const ErrorPageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

export const ErrorPageTxt = styled.Text`
  color: ${(props) => (props.button ? colors.primarySolid : colors.gray)};
  text-align: center;
`;
