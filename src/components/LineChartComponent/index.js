import * as scale from 'd3-scale';
import React, { useState } from 'react';
import { Circle, G, Line, Rect, Text } from 'react-native-svg';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { colors } from '../../utils/colors';
import dateFormatMonth from '../../utils/dateFormatMonth';
import numberToRealFormat from '../../utils/numberToRealFormat';
import CustomGrid from '../GraphicDecorators/CustomGrid';
import Gradient from '../GraphicDecorators/Gradient';

const LineChartComponent = ({ list, dates }) => {
  const [position, setPosition] = useState(4);

  function changePosition(index) {
    setPosition(index);
  }

  const Decorator = ({ x, y, data }) => {
    return data.map((value, index) => (
      <>
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={18}
          stroke={'transparent'}
          fill={'transparent'}
          onPress={() => changePosition(index)}
        />
        <Circle
          key={value}
          cx={x(index)}
          cy={y(value)}
          r={3}
          stroke={colors.primary}
          fill={colors.white}
        />
      </>
    ));
  };

  const Tooltip = ({ x, y }) => (
    <G
      x={x(position) - 75 / 2}
      key={'tooltip'}
      onPress={() => console.warn('tooltip clicked')}>
      <G y={2}>
        <Rect
          height={40}
          width={70}
          stroke={'grey'}
          fill={'rgba(0, 0, 0, 0.4)'}
          ry={2}
          rx={2}
          x={3}
        />
        <Text
          x={75 / 2}
          dy={20}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}
          stroke={colors.primarySolid}>
          {`${numberToRealFormat(list[position])}`}
        </Text>
      </G>
      <G x={75 / 2}>
        <Line y1={42} y2={y(list[position])} stroke={'grey'} strokeWidth={2} />
        <Circle
          cy={y(list[position])}
          r={4}
          stroke={colors.primaryVariantSolid}
          strokeWidth={2}
          fill={'white'}
        />
      </G>
    </G>
  );

  return (
    <>
      <LineChart
        style={{ height: 270, paddingHorizontal: 10, paddingTop: 10 }}
        data={list}
        // curve={shape.curveNatural}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{
          stroke: 'url(#gradient)',
          strokeWidth: 2,
        }}>
        <CustomGrid belowChart={true} />
        <Decorator />
        <Tooltip />
        <Gradient />
      </LineChart>
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

export default LineChartComponent;
