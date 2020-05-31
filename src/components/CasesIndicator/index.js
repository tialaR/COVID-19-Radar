import React from 'react';
import { CasesIndicatorContainer, CasesIndicatorDesc, CasesIndicatorText } from './styles';

const CasesIndicator = ({numberOfCases, desc}) => {
  return (
    <CasesIndicatorContainer>
      <CasesIndicatorText>{numberOfCases}</CasesIndicatorText>
      <CasesIndicatorDesc>{desc}</CasesIndicatorDesc>
    </CasesIndicatorContainer>
  );
};

export default CasesIndicator;
