import React, { useState } from "react";
import { Button } from "./Button";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const slice = square.slice();
    if (xIsNext) {
      slice[i] = "X";
    } else {
      slice[i] = "O";
    }
    setSquare(slice);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner : " + winner
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
          return square[a];
        }
      }
      
    return null;
  }

  function handleRestart() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="shadow-md shadow-white p-6 rounded-lg flex flex-col items-center justify-center">
    <div className="p-4 bg-transparent border-2 mb-4 text-2xl rounded-lg">{status}</div>
      <div className="flex flex-col w-fit">
        <div className="flex">
          <Button value={square[0]} clickFunc={() => handleClick(0)} />
          <Button value={square[1]} clickFunc={() => handleClick(1)} />
          <Button value={square[2]} clickFunc={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Button value={square[3]} clickFunc={() => handleClick(3)} />
          <Button value={square[4]} clickFunc={() => handleClick(4)} />
          <Button value={square[5]} clickFunc={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Button value={square[6]} clickFunc={() => handleClick(6)} />
          <Button value={square[7]} clickFunc={() => handleClick(7)} />
          <Button value={square[8]} clickFunc={() => handleClick(8)} />
        </div>
      </div>
      {winner ? (<button className="mt-4 bg-slate-500 p-4 rounded-lg text-black" onClick={handleRestart}>Restart</button>) : ""}
    </div>
  );
};
