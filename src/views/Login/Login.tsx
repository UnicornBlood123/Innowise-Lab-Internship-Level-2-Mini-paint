import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Paths } from '../App/App.routes';
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

  const changeEmail = (e: any) => setEmail(e.target.value);
  const changePassword = (e: any) => setPassword(e.target.value);
  const onRegisterClick = () => navigate(Paths.REGISTER);

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
            onChange={changeEmail}
          />
          <TextField
            margin={'dense'}
            id={'pass'}
            label={'Password'}
            type={'password'}
            onChange={changePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={entry}>Sign in</Button>
          <Button onClick={onRegisterClick}>Register</Button>
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
