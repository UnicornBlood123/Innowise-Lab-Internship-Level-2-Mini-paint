export interface ChatPostProps {
  email: string;
  name: string;
  img: string;
  change: (check: boolean, id: number) => void;
  checked: boolean;
  id: number;
}
