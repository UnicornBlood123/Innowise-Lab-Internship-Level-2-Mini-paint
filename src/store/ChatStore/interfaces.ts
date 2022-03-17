export interface chatInterface {
  images: imageInterface[];
  filterImages: imageInterface[];
  users: userInterface[];
  isLoad: boolean;
}

export interface imageInterface {
  name: string;
  email: string;
  data: string;
  id: string;
}

export interface userInterface {
  name: string;
}
