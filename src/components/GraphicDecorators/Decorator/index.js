import React from 'react';
import { Circle } from 'react-native-svg';
import { colors } from '../../../utils/colors';

const Decorator = ({ x, y, data }) => {
  return data.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={3}
        stroke={colors.primary}
        fill={colors.white}
        onPress={() => console.warn(index)}
      />
  ));
};

export default Decorator;
