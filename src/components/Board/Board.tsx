import { Chessboard } from 'react-chessboard';
import { CustomSquareRenderer } from '../Square/Square';
import './Board.css';

const Board = () => {
    return (
          <Chessboard 
              id="board" 
	      boardWidth={800}
	      customSquare={CustomSquareRenderer}
          />
    );
}

export { Board };
