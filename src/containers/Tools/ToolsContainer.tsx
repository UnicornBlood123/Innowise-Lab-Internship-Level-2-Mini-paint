import React, { ChangeEvent, useContext, useState } from 'react';
import Tools from '../../views/Tools/Tools';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrash, selectCircle, selectLine, selectRect } from '../../store/ToolStore/actions';
import { Box } from '@mui/material';
import Brash from './Brash';
import Rect from './Rect';
import Line from './Line';
import Circle from './Circle';
import SaveLoadImage from '../../views/SaveLoadImage/SaveLoadImage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index';
import AlertDialog from '../../views/AlertDialog/AlertDialog';

const ToolsContainer = () => {
  const dispatch = useDispatch();
  const canvas = useSelector((state: any) => state.canvas);
  const images = useSelector((state: any) => state.chat.images);
  const tools = useSelector((state: any) => state.tools);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const { auth, firestore } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const [type, setType] = useState('');

  const onToolClick = (buttonType: string, e: ChangeEvent<HTMLInputElement>) => {
    switch (buttonType) {
      case 'BRASH':
        dispatch(selectBrash(new Brash(canvas.canvasRef)));
        break;
      case 'RECT':
        dispatch(selectRect(new Rect(canvas.canvasRef)));
        break;
      case 'LINE':
        dispatch(selectLine(new Line(canvas.canvasRef)));
        break;
      case 'CIRCLE':
        dispatch(selectCircle(new Circle(canvas.canvasRef)));
        break;
      case 'SAVE':
        setType(type);
        setModalOpen(true);
        break;
      case 'LOAD':
        setType(type);
        setModalOpen(true);
        break;
      case 'CLEAR':
        tools.selectTool.clearCanvas();
        break;
      case 'COLOR':
        tools.selectTool.strokeColor = e.target.value;
        tools.selectTool.fillColor = e.target.value;
        break;
      case 'WIDTH':
        tools.selectTool.lineWidth = Number(e.target.value);
        break;
      default:
        break;
    }
  };

  const saveImageToFirebase = (name: string) => {
    if (!setUser) {
      firestore
        .collection('images')
        .doc(user?.email + '_' + name)
        .set({
          id: (images.length + 1).toString(),
          data: canvas.canvasRef.toDataURL(),
          name: name,
          email: user?.email,
        });
    }
  };

  const loadImageToCanvas = (name: string) => {
    tools.selectTool.dataCanvas =
      images.find((image: any) => image.name === name)?.data ?? setAlertOpen(true);
    images.find((image: any) => image.name === name)?.data === undefined
      ? setModalOpen(true)
      : setModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'white',
          boxShadow: '-1px -1px 3px rgb(0 0 0 / 24%) inset',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px',
          gap: '10px',
        }}
      >
        <Tools onToolClick={onToolClick} toolActive={tools.toolName} />
      </Box>
      <SaveLoadImage
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        save={saveImageToFirebase}
        load={loadImageToCanvas}
        type={type}
      />
      <AlertDialog alertOpen={alertOpen} setAlertOpen={setAlertOpen} error={'Not Found'} />
    </>
  );
};

export default ToolsContainer;
