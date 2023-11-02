interface IAuthor {
  id: number;
  name: string;
  avatar: string;
}

interface IFeed {
  id: number;
  image: string;
  small: string;
  aspectRatio: number;
  description: string;
  authorId: number;
  author: IAuthor;
}
