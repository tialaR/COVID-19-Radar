import * as scale from 'd3-scale';
import React from 'react';
import { Text } from 'react-native-svg';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { colors } from '../../utils/colors';
import dateFormatMonth from '../../utils/dateFormatMonth';
import CustomGrid from '../GraphicDecorators/CustomGrid';
import Gradient from '../GraphicDecorators/Gradient';

const BarChartComponent = ({ list, dates }) => {
  const CUT_OFF = 20;
  const Labels = ({ x, y, bandwidth, data }) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(value) + 14}
        fontSize={12}
        fill={colors.gray}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {value}
      </Text>
    ));

  return (
    <>
      <BarChart
        style={{ height: 270, paddingHorizontal: 10, paddingTop: 10 }}
        data={list}
        gridMin={0}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        svg={{ fill: 'url(#gradient)' }}>
        <CustomGrid belowChart={true} />
        <Labels />
        <Gradient />
      </BarChart>
      <XAxis
        style={{ marginBottom: 10, height: 40, marginTop: -8 }}
        data={dates}
        scale={scale.scaleBand}
        formatLabel={(_, index) => dateFormatMonth(dates[index])}
        svg={{
          fontSize: 10,
          fill: colors.white,
          rotation: 40,
          originY: 24,
          y: 18,
        }}
      />
    </>
  );
};

export default BarChartComponent;
