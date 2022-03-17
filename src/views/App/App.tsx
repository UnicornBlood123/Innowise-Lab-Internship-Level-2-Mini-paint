import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../Login/Login';
import { Paths } from './App.routes';
import Registration from '../Registration/Registration';
import Content from '../Content/Content';
import { Box, CircularProgress, Stack } from '@mui/material';

const App = () => {
  const { auth } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    !setUser && !user && navigate(Paths.LOGIN);
    !setUser && setIsFetching(false);
    setUser && setIsFetching(true);
  }, [user, setUser]);

  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#F6F6F6',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
      id={'boxContainer'}
    >
      {isFetching ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          id="boxContainer"
        >
          <CircularProgress sx={{ alignSelf: 'center' }} />
        </Box>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path={Paths.OTHER} element={<Content />} />
            <Route path={Paths.LOGIN} element={<Login />} />
            <Route path={Paths.REGISTER} element={<Registration />} />
          </Routes>
        </>
      )}
    </Stack>
  );
};

export default App;
