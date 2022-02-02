export interface AlertDialogProps {
  alertOpen: boolean;
  setAlertOpen: (open: boolean) => void;
  error: string;
}
