import React from "react";

import {
  Container,
  AvatarImg,
  Description,
  HeaderPost,
  Name,
  PostImg,
} from "./styles";

const PostItem: React.FC<IFeed> = ({
  description,
  image,
  author,
  aspectRatio,
}) => (
  <Container>
    <HeaderPost>
      <AvatarImg source={{ uri: author.avatar }} />
      <Name>{author.name}</Name>
    </HeaderPost>

    <PostImg ratio={aspectRatio} source={{ uri: image }} />

    <Description>
      {author.name} {description}
    </Description>
  </Container>
);
export default PostItem;
