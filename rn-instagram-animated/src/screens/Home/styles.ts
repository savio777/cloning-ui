import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const FooterLoading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#999",
})`
  margin: 30px 0;
`;
