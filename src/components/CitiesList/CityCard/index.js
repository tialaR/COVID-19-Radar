import React from 'react';
import { View } from 'react-native';
import numberToRealFormat from '../../../utils/numberToRealFormat';
import { CityContainer, CityDescContainer, CityTxt, Decorator } from './styles';

const CityCard = ({ city, confirmed, deaths }) => {
  return (
    <CityContainer>
      <Decorator />
      <View style={{ flex: 1, padding: 16 }}>
        <CityTxt highlight>{city}</CityTxt>
        <CityDescContainer>
          <View>
            <CityTxt>{numberToRealFormat(confirmed)}</CityTxt>
            <CityTxt style={{ paddingTop: 4 }}>Casos confirmados</CityTxt>
          </View>
          <View>
            <CityTxt right>{numberToRealFormat(deaths)}</CityTxt>
            <CityTxt right style={{ paddingTop: 4 }}>
              Óbitos
            </CityTxt>
          </View>
        </CityDescContainer>
      </View>
    </CityContainer>
  );
};

export default CityCard;
