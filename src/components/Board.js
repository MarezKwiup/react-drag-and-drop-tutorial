import React from "react";
import Knight from "./Knight";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSqaure from "./BoardSqaure";
import Tutorial from "./Tutorial"; // Assuming Tutorial component is in a separate file

function renderSquare(i, [knightx, knighty]) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: "12.5%", aspectRatio: 1 }}>
      <BoardSqaure x={x} y={y}>
        {renderPiece(x, y, [knightx, knighty])}
      </BoardSqaure>
    </div>
  );
}

function renderPiece(x, y, [knightx, knighty]) {
  if (x === knightx && y === knighty) {
    return <Knight />;
  } else {
    return <p style={{width:'100%',height:'100%'}}></p>;
  }
}

const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', width: "100%" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "750px",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {squares}
        </div>
      <Tutorial />
      </div>
    </DndProvider>
  );
};

export default Board;
