import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useLoadCasesStateCities } from '../../service/service';
import { colors } from '../../utils/colors';
import CasesIndicator from '../CasesIndicator';
import { CasesContainer, DropDownContainer, styles } from './styles';

const DropDown = ({ state }) => {
  const casesStateCities = useLoadCasesStateCities(state);
  const [city, setCity] = useState('');
  const [casesOfSelectedCity, setCasesOfSelectedCity] = useState({
    confirmedCases: 0,
    deathCases: 0,
  });

  //Pegar objeto referente a cidade selecionada:
  function loadDatasOfSelectedCity() {
    for (var i in casesStateCities.citiesCases) {
      if (
        casesStateCities.citiesNames[city] ===
        casesStateCities.citiesCases[i].city
      ) {
        setCasesOfSelectedCity({
          confirmedCases: casesStateCities.citiesCases[i].confirmed,
          deathCases: casesStateCities.citiesCases[i].deaths,
        });
      }
    }
  }

  useEffect(() => {
    if (city !== '') {
      setTimeout(() => loadDatasOfSelectedCity(), 1000);
    } else {
      return () => null;
    }
  }, [city]);

  return (
    <View>
      <DropDownContainer>
        <ModalDropdown
          defaultValue="Selecione os indicadores pela cidade"
          options={casesStateCities.citiesNames}
          onSelect={(value) => setCity(value)}
          style={styles.container}
          textStyle={styles.text}
          dropdownStyle={styles.dropDownContainer}
          dropdownTextStyle={styles.dropDownText}
          dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
        />
        <MaterialCommunityIcons
          name="chevron-down"
          size={30}
          color={colors.gray}
        />
      </DropDownContainer>
      {city !== '' && (
        <CasesContainer>
          <CasesIndicator
            numberOfCases={casesOfSelectedCity.confirmedCases}
            desc="Casos confirmados"
          />
          <CasesIndicator
            numberOfCases={casesOfSelectedCity.deathCases}
            desc="Mortes confirmadas"
          />
        </CasesContainer>
      )}
    </View>
  );
};

export default DropDown;
