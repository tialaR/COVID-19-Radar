import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const CasesDescContainer = styled.View`
  justify-content: flex-end;
  padding: 0 20px 0 20px;
`
export const CasesDescText = styled.Text`
  color: ${ colors.gray };
  font-size: 14px;
  text-align: right;
`;
