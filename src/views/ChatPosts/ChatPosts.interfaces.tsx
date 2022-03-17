export interface ChatPostsProps {
  isLoad: boolean;
  images: { name: string; email: string; data: string; id: string }[];
  user: any;
  change: (check: boolean, id: number) => void;
}
