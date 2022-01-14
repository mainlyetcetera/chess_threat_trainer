import React, { useState, FC, ReactElement } from "react"
import { Chessboard } from "react-chessboard"
import Info from "../Info/Info"

type BoardProps = {
  infoToStart: boolean;
}

const Board = ({ infoToStart }: BoardProps): JSX.Element =>  {
  const [showInfo, setShowInfo] = useState(infoToStart)

  return (
    <div>
      <Chessboard />
      { showInfo && <Info info={'anime cat girl'}/> }
    </div>
  )
}

export default Board
