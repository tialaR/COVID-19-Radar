import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const DropDownContainer = styled.View`
  background-color: ${colors.surface};
  margin: 0 20px 0 20px;
  padding: 0 20px 0 20px;
  height: 70px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CasesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
`;

export const styles = StyleSheet.create({
  container: {
    height: 70,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.gray,
    fontSize: 14,
  },
  dropDownContainer: {
    backgroundColor: colors.surfaceVariant,
    borderWidth: 0,
    borderRadius: 6,
    width: "80%",
  },
  dropDownText: {
    backgroundColor: colors.surfaceVariant,
    color: colors.gray,
    fontSize: 14,
  },
  dropdownTextHighlightStyle: {
    color: colors.white,
    fontSize: 16,
  },
});
