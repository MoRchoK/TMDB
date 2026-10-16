export type MoviesListItemType = {
  title: string;
  imageUrl: string;
  rating: number;
  onLikeHandler: ()=>void;
  isLiked: boolean;
}