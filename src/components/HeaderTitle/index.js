import React from 'react';
import { HeaderLabelTxt, HeaderTitleContainer, HeaderTitleTxt } from './styles';

const HeaderTitle = ({title, label}) => {
  return (
    <HeaderTitleContainer>
      <HeaderTitleTxt>{title}</HeaderTitleTxt>
      <HeaderLabelTxt>{label}</HeaderLabelTxt>
    </HeaderTitleContainer>
  );
};

export default HeaderTitle;
