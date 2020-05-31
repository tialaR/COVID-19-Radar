import React, { useState } from 'react';
import { View } from 'react-native';
import AreaChartComponent from '../../components/AreaChartComponent';
import BarChartComponent from '../../components/BarChartComponent';
import ButtonChart from '../../components/ButtonChart';
import LineChartComponent from '../../components/LineChartComponent';
import { chartsTypes } from '../../utils/arrays';
import numberToRealFormat from '../../utils/numberToRealFormat';
import CasesIndicator from '../CasesIndicator';
import { CasesDescContainer, CasesDescText } from './styles';

const ChartsBox = ({ list, dates, numberOfCases, desc }) => {
  const [chartType, setChartType] = useState('line');
  const types = chartsTypes;

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CasesIndicator
          numberOfCases={numberToRealFormat(numberOfCases)}
          desc={desc}
        />
        <CasesDescContainer>
          <CasesDescText>Índice de crescimento</CasesDescText>
          <CasesDescText>nos últimos 14 dias</CasesDescText>
        </CasesDescContainer>
      </View>

      {chartType === 'line' && <LineChartComponent list={list} dates={dates} />}
      {chartType === 'area' && <AreaChartComponent list={list} dates={dates} />}
      {chartType === 'bar' && <BarChartComponent list={list} dates={dates} />}

      <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
        {types.map((type) => (
          <ButtonChart
            key={type.key}
            selected={chartType === type.key ? true : false}
            click={() => setChartType(type.value)}
            type={type.value}
          />
        ))}
      </View>
    </View>
  );
};

export default ChartsBox;
