import React from "react";

import {
  Container,
  AvatarImg,
  Description,
  HeaderPost,
  Name,
  PostImg,
} from "./styles";
import LazyLoad from "../LazyLoad";

const PostItem: React.FC<IFeed> = ({
  description,
  image,
  author,
  aspectRatio,
  small,
}) => (
  <Container>
    <HeaderPost>
      <AvatarImg source={{ uri: author.avatar }} />
      <Name>{author.name}</Name>
    </HeaderPost>

    <LazyLoad aspectRatio={aspectRatio} image={image} small={small} />

    <Description>
      {author.name} {description}
    </Description>
  </Container>
);
export default PostItem;
