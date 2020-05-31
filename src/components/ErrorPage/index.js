import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { colors } from '../../utils/colors';
import { ErrorPageContainer, ErrorPageTxt } from './styles';

const ErrorPage = ({ click }) => {
  return (
    <ErrorPageContainer>
      <Icon name="error-outline" size={40} color={colors.gray} />
      <View style={{ marginTop: 10 }}>
        <ErrorPageTxt>Erro ao tentar carregar</ErrorPageTxt>
        <ErrorPageTxt>a lista dos Estados.</ErrorPageTxt>
        <TouchableOpacity
          style={{ marginTop: 4 }}
          activeOpacity={0.8}
          onPress={click}>
          <ErrorPageTxt button>Tentar carregar novamente?</ErrorPageTxt>
        </TouchableOpacity>
      </View>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
