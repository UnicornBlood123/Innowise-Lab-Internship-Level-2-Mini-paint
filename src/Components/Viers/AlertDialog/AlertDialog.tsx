import React from 'react';

import { Alert, Button, Dialog } from '@mui/material';
import { AlertDialogProps } from './AlertDialog.interfaces';

const AlertDialog = ({ alertOpen, setAlertOpen, error }: AlertDialogProps) => {
  return (
    <Dialog open={alertOpen} aria-labelledby={'form-dialog-title'}>
      <Alert severity="warning">
        <strong>{error}</strong>
        <Button onClick={() => setAlertOpen(false)}>Ok</Button>
      </Alert>
    </Dialog>
  );
};

export default AlertDialog;
