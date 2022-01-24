import React, { useContext, useEffect } from 'react';
import '../../Viers/Canvas/Canvas.css';
import { useDispatch } from 'react-redux';
import { loadImages } from '../../../store/actions';
import ChatPosts from '../../Viers/ChatPosts/ChatPosts';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatPostsContainer = () => {
  const dispatch = useDispatch();
  const { auth, firestore } = useContext<any>(Context);
  const [imagesData, setImagesData] = useCollectionData(firestore.collection('images'));
  const [user, setUser] = useAuthState(auth);
  const loadImagesFromFirestore = () => {
    return new Promise((resolve) => {
      resolve(imagesData);
    });
  };

  const setCheck = (check: boolean) => {
    if (!setImagesData && user) {
    }
  };

  useEffect(() => {
    dispatch(loadImages(loadImagesFromFirestore));
  }, [imagesData]);

  return <ChatPosts loading={setImagesData} images={imagesData} />;
};

export default ChatPostsContainer;
