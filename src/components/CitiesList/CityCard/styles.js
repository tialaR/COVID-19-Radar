import styled from 'styled-components/native';
import { colors } from '../../../utils/colors';

export const CityContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.surfaceVariant};
  border-radius: 6px;
  overflow: hidden;
`;

export const Decorator = styled.View`
  background-color: ${colors.primary};
  width: 8px;
`;

export const CityDescContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CityTxt = styled.Text`
  color: ${(props) => (props.highlight ? colors.white : colors.gray)};
  font-size: ${(props) => (props.highlight ? '16px' : '12px')};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;
