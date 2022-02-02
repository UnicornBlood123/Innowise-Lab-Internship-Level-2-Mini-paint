export interface SaveLoadImageProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  save: (name: string) => void;
  load: (name: string) => void;
  type: string;
}
