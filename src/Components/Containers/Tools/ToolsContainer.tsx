import React, { ReactDOM, useContext, useState } from 'react';
import Tools from '../../Viers/Tools/Tools';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrash, selectCircle, selectLine, selectRect } from '../../../store/actions';
import { Box } from '@mui/material';
import Brash from './Brash';
import Rect from './Rect';
import Line from './Line';
import Circle from './Circle';
import SaveLoadImage from '../../Viers/SaveLoadImage/SaveLoadImage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../../index';

const ToolsContainer = () => {
  const dispatch = useDispatch();
  const canvas = useSelector((state: any) => state.canvas);
  const images = useSelector((state: any) => state.images);
  const tools = useSelector((state: any) => state.tools);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { auth, firestore } = useContext<any>(Context);
  const [user, setUser] = useAuthState(auth);
  const [type, setType] = useState('');

  const brushButtonClick = () => {
    dispatch(selectBrash(new Brash(canvas.canvasRef)));
  };

  const rectButtonClick = () => {
    dispatch(selectRect(new Rect(canvas.canvasRef)));
  };

  const lineButtonClick = () => {
    dispatch(selectLine(new Line(canvas.canvasRef)));
  };

  const circleButtonClick = () => {
    dispatch(selectCircle(new Circle(canvas.canvasRef)));
  };

  const changeColorClick = (color: string) => {
    tools.selectTool.strokeColor = color;
    tools.selectTool.fillColor = color;
  };

  const changeLineWidthClick = (width: number) => {
    tools.selectTool.lineWidth = width;
  };

  const saveImageClick = (type: string) => {
    setType(type);
    setModalOpen(true);
  };

  const loadImageClick = (type: string) => {
    setType(type);
    setModalOpen(true);
  };

  const saveImageToFirebase = (name: string) => {
    if (!setUser) {
      firestore
        .collection('images')
        .doc((images.allImages.length + 1).toString())
        .set({
          id: (images.allImages.length + 1).toString(),
          uId: user?.uid,
          data: canvas.canvasRef.toDataURL(),
          name: name,
          email: user?.email,
        });
    }
  };

  const loadImageToCanvas = (name: string) => {
    tools.selectTool.dataCanvas =
      images.allImages.find((image: any) => image.name === name)?.data ?? alert('not found');
  };
  const clearCanvasClick = () => {
    tools.selectTool.clearCanvas();
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'white',
          border: '1px solid black',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px',
          gap: '10px',
        }}
      >
        <Tools
          onBrushClick={brushButtonClick}
          onRectClick={rectButtonClick}
          toolActive={tools.toolName}
          onChangeColor={changeColorClick}
          onChangeLineWidth={changeLineWidthClick}
          onLineClick={lineButtonClick}
          onCircleClick={circleButtonClick}
          onSaveImageClick={saveImageClick}
          onLoadImageClick={loadImageClick}
          onClearCanvasClick={clearCanvasClick}
        />
      </Box>
      <SaveLoadImage
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        save={saveImageToFirebase}
        load={loadImageToCanvas}
        type={type}
      />
    </>
  );
};

export default ToolsContainer;
