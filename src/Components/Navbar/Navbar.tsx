import React, { useContext } from 'react';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  const { auth } = useContext<any>(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static" sx={{ minWidth: '1120px' }}>
      <Toolbar sx={{ bgcolor: 'white', color: 'black' }}>
        <Typography color="secondary" variant={'h6'} sx={{ flexGrow: 1 }}>
          Mini Paint
        </Typography>
        {user ? (
          <Button color="secondary" variant="contained" onClick={() => auth.signOut()}>
            Exit
          </Button>
        ) : (
          <Button color="secondary" variant="contained">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
