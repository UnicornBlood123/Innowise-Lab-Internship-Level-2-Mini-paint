export interface ChatPostsProps {
  isFetching: boolean;
  images: [];
  user: any;
  change: (check: boolean, id: number) => void;
}
