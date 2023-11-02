import React from "react";

import { Container, AvatarImg, Description, HeaderPost, Name } from "./styles";
import LazyLoad from "../LazyLoad";

interface IPostItemProps {
  data: IFeed;
  shouldLoadImg: boolean;
}

const PostItem: React.FC<IPostItemProps> = ({
  data: { description, image, author, aspectRatio, small },
  shouldLoadImg,
}) => (
  <Container>
    <HeaderPost>
      <AvatarImg source={{ uri: author.avatar }} />
      <Name>{author.name}</Name>
    </HeaderPost>

    <LazyLoad
      data={{ aspectRatio, image, small }}
      shouldLoadImg={shouldLoadImg}
    />

    <Description>
      {author.name} {description}
    </Description>
  </Container>
);
export default PostItem;
