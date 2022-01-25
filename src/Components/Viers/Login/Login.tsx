import React, { useContext, useState } from 'react';
import { Context } from '../../../index';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Paths } from '../../../contents/routes';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import AlertDialog from '../AlertDialog/AlertDialog';

const Login = () => {
  const { auth } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  React.useEffect(() => {
    !setUser && user && navigate(Paths.ROOT);
  }, [user, navigate, setUser]);

  const entry = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      setAlertOpen(true);
    });
  };

  return (
    <>
      <Dialog open={true} aria-labelledby={'form-dialog-title'}>
        <DialogTitle id={'form-dialog-title'}>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin={'dense'}
            id={'email'}
            label={'Email adress'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin={'dense'}
            id={'pass'}
            label={'Password'}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={entry}>Sign in</Button>
          <Button onClick={() => navigate(Paths.REGISTER)}>Register</Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
        error={'Incorrect login or password'}
      />
    </>
  );
};

export default Login;
