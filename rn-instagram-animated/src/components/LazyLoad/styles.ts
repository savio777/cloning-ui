import { Animated } from "react-native";
import styled from "styled-components/native";

export const PostImg = styled(Animated.Image).attrs({
  resizeMode: "contain",
})<{ ratio: number }>`
  aspect-ratio: ${({ ratio }) => ratio};
  width: 100%;
`;

export const Small = styled.ImageBackground.attrs({
  resizeMode: "contain",
  blurRadius: 2,
})<{
  ratio: number;
}>`
  width: 100%;
  aspect-ratio: ${({ ratio }) => ratio};
`;
