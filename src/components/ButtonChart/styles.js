import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const ButtonChartContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding: 20px;
  border-radius: 6px;
  margin-right: 20px;
  background-color: ${(props) =>
    props.selected ? colors.surfaceVariant : colors.surface};
`;
