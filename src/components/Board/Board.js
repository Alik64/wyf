import { useState } from "react";
import Figure from "../Figure/Figure";
import s from "./Board.module.css";

const Board = () => {
  const [state, setState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [color, setColor] = useState(null);
  console.log("color ==>", color);

  const handleDrop = (e) => {
    e.preventDefault();

    const coordinate = e.target.id.split("-").map((el) => Number(el)); //[1,1]
    console.log(coordinate);
    setState((prev) => {
      let newState = [...prev];
      newState[coordinate[0]][coordinate[1]] = 1;

      e.target.style.backgroundColor = color;
      return newState;
    });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const handleColor = (color) => {
    setColor(color);
  };
  const red = "red";
  return (
    <div className={s.root}>
      <Figure color="blue" handleColor={handleColor} />
      <Figure color="red" handleColor={handleColor} />
      <div className={s.board}>
        <div className={s.board_grid} onDrop={handleDrop} onDragOver={dragOver}>
          <div id="0-0" className={s.board__cell}></div>
          <div id="0-1" className={s.board__cell}></div>
          <div id="0-2" className={s.board__cell}></div>
          <div id="1-0" className={s.board__cell}></div>
          <div id="1-1" className={s.board__cell}></div>
          <div id="1-2" className={s.board__cell}></div>
          <div id="2-0" className={s.board__cell}></div>
          <div id="2-1" className={s.board__cell}></div>
          <div id="2-2" className={s.board__cell}></div>
        </div>
      </div>
    </div>
  );
};

export default Board;
