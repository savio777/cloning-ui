import styled, { css } from "styled-components/native";

import LogoImg from "../../assets/instagram.png";

export const Container = styled.View`
  background-color: #f5f5f5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 34px 16px 16px;
  elevation: 1;
`;

export const Content = styled.View<{ center?: boolean }>`
  flex: 1;

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

export const LogoHeader = styled.Image.attrs({ source: LogoImg })``;
