import s from "./Figure.module.css";
import Draggable from "react-draggable";
import { useState } from "react";

const Figure = ({ getDataOnDrop, color, handleColor }) => {
  return (
    <div className={s.root}>
      <SmallSquare
        getDataOnDrop={getDataOnDrop}
        color={color}
        handleColor={handleColor}
      />
    </div>
  );
};

const dragOver = (e) => {
  e.stopPropagation();
};

const SmallSquare = ({ color, handleColor }) => {
  return (
    <div
      draggable="true"
      className={s.smallSquare}
      onDragOver={() => handleColor(color)}
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};
const Angle = ({ getDataOnDrop }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStop = (e, data) => {
    getDataOnDrop({ x: data.x, y: data.y });
  };

  return (
    <Draggable onDrag={(e, data) => trackPos(data)} onStop={handleStop}>
      <div className={s.angle} onDragOver={dragOver}></div>
    </Draggable>
  );
};

const LineTwo = ({ getDataOnDrop }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStop = (e, data) => {
    getDataOnDrop({ x: data.x, y: data.y });
  };

  return (
    <Draggable onDrag={(e, data) => trackPos(data)} onStop={handleStop}>
      <div className={s.lineTwo} onDragOver={dragOver}></div>
    </Draggable>
  );
};
const LineThree = ({ getDataOnDrop }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleDrag = (e, data) => {
    trackPos(data);
    e.target.style.zIndex = "auto";
  };
  const handleStop = (e, data) => {
    let { x, y } = e.target.getBoundingClientRect();
    getDataOnDrop({ x, y });
  };

  return (
    <Draggable onDrag={handleDrag} onStop={handleStop}>
      <div className={s.lineThree} onDragOver={dragOver}></div>
    </Draggable>
  );
};

export default Figure;
