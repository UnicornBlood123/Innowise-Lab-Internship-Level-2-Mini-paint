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

  const modalClose = () => {
    setModalOpen(false);
  };

  const saveButtonClick = () => {
    modalClose();
    save(imageName);
  };

  const loadButtonClick = () => {
    load(imageName);
  };

  const onButtonApplyClick = () => {
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
        <Button onClick={modalClose}>Cancel</Button>
        <Button onClick={onButtonApplyClick}>Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveLoadImage;
