import React from 'react';

import { Alert, Button, Dialog } from '@mui/material';
import { AlertDialogProps } from './AlertDialog.interfaces';

const AlertDialog = ({ alertOpen, setAlertOpen, error }: AlertDialogProps) => {
  const alertDialogClose = () => {
    setAlertOpen(false);
  };

  return (
    <Dialog open={alertOpen} aria-labelledby="form-dialog-title">
      <Alert severity="warning">
        <strong>{error}</strong>
        <Button onClick={alertDialogClose}>Ok</Button>
      </Alert>
    </Dialog>
  );
};

export default AlertDialog;
