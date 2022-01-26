export interface ChatPostsProps {
  loadingImages: boolean;
  loadingUsers: boolean;
  images: [];
  user: any;
  change: (check: boolean, id: number) => void;
}
