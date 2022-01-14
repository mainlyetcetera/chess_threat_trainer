import React, { useState, FC, ReactElement } from "react"
import { Chessboard } from "react-chessboard"
import Info from "../Info/Info"

type BoardProps = {
  infoToStart: boolean;
}

// class Board extends Component<BoardProps, BoardState> {
const Board = ({ infoToStart }: BoardProps): JSX.Element =>  {
  const [showInfo, setShowInfo] = useState(infoToStart)

  return (
    <div>
      <Chessboard />
      { showInfo && <Info /> }
    </div>
  )
}

export default Board
