import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { SaveLoadImageProps } from './SaveLoadImage.interfaces';

const SaveLoadImage = ({ modalOpen, setModalOpen, save, load, type }: SaveLoadImageProps) => {
  const [imageName, setImageName] = useState('');

  const saveButtonClick = () => {
    setModalOpen(false);
    save(imageName);
  };

  const loadButtonClick = () => {
    load(imageName);
  };

  const click = () => {
    type === 'Save' ? saveButtonClick() : loadButtonClick();
  };

  return (
    <Dialog open={modalOpen} aria-labelledby={'form-dialog-title'}>
      <DialogTitle id={'form-dialog-title'}>{type}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin={'dense'}
          id={'imageName'}
          label={'Image name'}
          type={'text'}
          onChange={(e) => setImageName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        <Button onClick={click}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveLoadImage;