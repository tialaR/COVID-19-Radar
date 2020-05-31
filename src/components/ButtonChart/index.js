import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { colors } from '../../utils/colors';
import { ButtonChartContainer } from './styles';

const ButtonChart = ({click, type, selected}) => {
  function typeName() {
    switch (type) {
      case 'line':
        return 'chart-line';
      case 'area':
        return 'chart-areaspline';
      case 'bar':
        return 'chart-bar';
      default:
        return;
    }
  }

  return (
    <ButtonChartContainer selected={selected} onPress={click}>
      <Icon
        name={typeName()}
        size={24}
        color={selected ? colors.grayVariant : colors.gray}
      />
    </ButtonChartContainer>
  );
};

export default ButtonChart;
