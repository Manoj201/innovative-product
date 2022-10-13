import React, { useEffect, useRef, useState } from "react";

import "./Canvas.css";

const Canvas = ({ activeTool }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const canvasOffsetX = useRef(null);
  const canvasOffsetY = useRef(null);
  const startX = useRef(null);
  const startY = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.lineWidth = 2;
    contextRef.current = context;

    const canvasOffSet = canvas.getBoundingClientRect();
    canvasOffsetX.current = canvasOffSet.top;
    canvasOffsetY.current = canvasOffSet.left;
  }, []);

  useEffect(() => {
    if (activeTool === "pen") {
      contextRef.current.globalCompositeOperation = "source-over";
      contextRef.current.lineWidth = 2;
    }
    if (activeTool === "eraser") {
      contextRef.current.globalCompositeOperation = "destination-out";
      contextRef.current.lineWidth = 50;
    }
  }, [activeTool]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const startDrawingRectangle = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    startX.current = nativeEvent.clientX - canvasOffsetX.current;
    startY.current = nativeEvent.clientY - canvasOffsetY.current;

    setIsDrawing(true);
  };

  const drawingRectangle = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    const newMouseX = nativeEvent.clientX - canvasOffsetX.current;
    const newMouseY = nativeEvent.clientY - canvasOffsetY.current;

    const rectWidth = newMouseX - startX.current;
    const rectHeight = newMouseY - startY.current;

    contextRef.current.clearRect(
      startX.current - 2,
      startY.current - 2,
      canvasRef.current.width + 2,
      canvasRef.current.height + 2
    );

    contextRef.current.strokeRect(
      startX.current,
      startY.current,
      rectWidth,
      rectHeight
    );
  };

  const stoptDrawingRectangle = ({ nativeEvent }) => {
    setIsDrawing(false);
  };

  return (
    <canvas
      className="canvas"
      ref={canvasRef}
      onMouseDown={activeTool === "rect" ? startDrawingRectangle : startDrawing}
      onMouseMove={activeTool === "rect" ? drawingRectangle : draw}
      onMouseUp={activeTool === "rect" ? stoptDrawingRectangle : stopDrawing}
      onMouseLeave={activeTool === "rect" ? stoptDrawingRectangle : stopDrawing}
    />
  );
};

export default Canvas;
