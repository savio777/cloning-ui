import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const HeaderPost = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 10px;
`;

export const AvatarImg = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const PostImg = styled.Image<{ ratio: number }>`
  aspect-ratio: ${({ ratio }) => ratio};
  width: 100%;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;
