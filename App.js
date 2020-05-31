import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './src/routes';
import { useLoadCasesStateCities, useLoadCasesStates } from './src/service/service';
import { colors } from './src/utils/colors';

console.disableYellowBox = true;

Icon.loadFont();
Icon2.loadFont();

const App = () => {
  const [loadCases] = useLoadCasesStates();
  const [loadCasesCities] = useLoadCasesStateCities();

  useEffect(() => {
    loadCases();
    loadCasesCities();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <Routes />
    </>
  );
};

export default App;
