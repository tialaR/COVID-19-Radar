import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';
import { LoadingPageContainer, LoadingPageTxt } from './styles';

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <LoadingPageTxt>Carregando Estados...</LoadingPageTxt>
      <ActivityIndicator size="small" color={colors.primarySolid} />
    </LoadingPageContainer>
  );
};

export default LoadingPage;
