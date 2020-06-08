import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../utils/colors';

export const RowSpacing = styled.View`
  height: 20px;
`;

export const HeaderImage = styled.Image.attrs({
  source: require('../assets/logo-covid.png'),
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: ${Platform.OS === 'android' ? 'bold' : '900'};
  color: ${colors.white};
  padding-right: 18px;
`;
