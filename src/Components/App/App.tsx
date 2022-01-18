import React, { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../Loader/Loader';
import Login from '../Login/Login';
import { Paths } from '../../contents/routes';
import Registration from '../Registration/Registration';
import Content from '../Content/Content';
import { Box } from '@mui/material';

const App = () => {
  const { auth } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    !setUser && !user && navigate(Paths.LOGIN);
  }, [user, setUser]);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#F6F6F6',
        overflow: 'auto',
      }}
      id={'boxContainer'}
    >
      {setUser ? (
        <Loader />
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
    </Box>
  );
};

export default App;
