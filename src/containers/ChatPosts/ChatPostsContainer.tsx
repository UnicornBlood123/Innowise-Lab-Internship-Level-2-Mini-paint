import React, { useContext, useEffect, useState } from 'react';
import '../../views/Canvas/Canvas.css';
import { useDispatch, useSelector } from 'react-redux';
import { emailFilter } from '../../store/ChatStore/actions';
import ChatPosts from '../../views/ChatPosts/ChatPosts';
import { Context } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatFilter from '../../views/ChatFilter/ChatFilter';
import { Stack } from '@mui/material';

const ChatPostsContainer = () => {
  const dispatch = useDispatch();
  const { auth, firestore } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const allImages = useSelector((state: any) => state.chat.images);
  const filterImages = useSelector((state: any) => state.chat.filterImages);
  const allUsers = useSelector((state: any) => state.chat.users);
  const isLoad = useSelector((state: any) => state.chat.isLoad);
  const [filter, setFilter] = useState('');

  const getUser = () => {
    if (allUsers && user) {
      return allUsers.filter((u: any) => {
        if (u?.name === user?.email) return u;
      });
    }
  };

  const setCheck = (check: boolean, id: number) => {
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
  };

  const filterPosts = () => {
    filter.length > 0
      ? dispatch(emailFilter(allImages?.filter((image: any) => image.email === filter)))
      : dispatch(emailFilter(allImages));
  };

  useEffect(() => {
    !isLoad && filterPosts();
  }, [isLoad]);

  useEffect(() => {
    filterPosts();
  }, [filter]);

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
      <ChatFilter filter={filter} setFilter={setFilter} />
      <ChatPosts isLoad={isLoad} images={filterImages} user={getUser()} change={setCheck} />
    </Stack>
  );
};

export default ChatPostsContainer;
