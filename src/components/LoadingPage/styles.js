import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const LoadingPageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

export const LoadingPageTxt = styled.Text`
  color: ${colors.gray};
  margin-bottom: 10px;
`;
