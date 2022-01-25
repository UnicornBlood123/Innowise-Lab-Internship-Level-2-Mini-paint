import React, { useContext, useEffect } from 'react';
import '../../Viers/Canvas/Canvas.css';
import { useDispatch, useSelector } from 'react-redux';
import { emailFilter, loadImages, loadUsers } from '../../../store/actions';
import ChatPosts from '../../Viers/ChatPosts/ChatPosts';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatFilter from '../../Viers/ChatFilter/ChatFilter';
import { Stack } from '@mui/material';

const ChatPostsContainer = () => {
  const dispatch = useDispatch();
  const { auth, firestore } = useContext<any>(Context);
  const [imagesData, setImagesData] = useCollectionData(
    firestore.collection('images').orderBy('id', 'asc')
  );
  const [usersData, setUsersData] = useCollectionData(firestore.collection('users'));
  const [user, setUser] = useAuthState(auth);

  const images = useSelector((state: any) => state.chat.images);
  const users = useSelector((state: any) => state.chat.users);

  const loadImagesFromFirestore = () => {
    return new Promise((resolve) => {
      resolve(imagesData);
    });
  };

  const loadUsersFromFirestore = () => {
    return new Promise((resolve) => {
      resolve(usersData);
    });
  };

  const getUser = () => {
    if (usersData && user) {
      return usersData.filter((us: any) => {
        if (us?.name === user?.email) return us;
      });
    }
  };

  const setCheck = (check: boolean, id: number) => {
    if (!setImagesData && !setUsersData && user) {
      firestore
        .collection('users')
        .doc(user?.email)
        .update({ [id]: check })
        .catch(() => {
          firestore.collection('users').doc(user?.email).set({ name: user?.email });
          firestore
            .collection('users')
            .doc(user?.email)
            ?.update({ [id]: check });
        });
    }
  };

  const filterPosts = (email = '') => {
    email.length > 0
      ? dispatch(
          emailFilter(
            imagesData?.filter((image: any) => image.email === email),
            getUser()
          )
        )
      : dispatch(emailFilter(imagesData, getUser()));
  };

  useEffect(() => {
    dispatch(loadImages(loadImagesFromFirestore));
  }, [imagesData]);

  useEffect(() => {
    dispatch(loadUsers(loadUsersFromFirestore));
  }, [usersData]);

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        boxShadow: '-1px -1px 3px rgb(0 0 0 / 24%) inset',
        padding: '10px',
        gap: '10px',
      }}
    >
      <ChatFilter emailFilter={filterPosts} />
      <ChatPosts
        loadingImages={setImagesData}
        loadingUsers={setImagesData}
        images={images}
        user={getUser()}
        change={setCheck}
      />
    </Stack>
  );
};

export default ChatPostsContainer;
