import type { GameState } from '../types/game';
import { SmallBoard } from './SmallBoard';

interface BoardProps {
  gameState: GameState;
  isBoardPlayable: (boardIndex: number) => boolean;
  onCellClick: (boardIndex: number, cellIndex: number) => void;
}

export function Board({ gameState, isBoardPlayable, onCellClick }: BoardProps) {
  const { boards, activeBoardIndex, localResults, globalResult } = gameState;

  return (
    <section
      aria-label="Game Board"
      className="grid grid-cols-3 gap-1.5 sm:gap-2.5 md:gap-3 w-full mx-auto"
      style={{ maxWidth: 'min(95vw, 560px)' }}
    >
      {boards.map((cells, i) => {
        const playable = isBoardPlayable(i);
        // A board is "active" (highlighted) when:
        // - it is the specifically targeted board, OR
        // - it's a free move and the board isn't resolved
        // ...but never when the game is over.
        const isActive =
          !globalResult &&
          (activeBoardIndex === i ||
            (activeBoardIndex === null && localResults[i] === null));

        return (
          <SmallBoard
            key={i}
            cells={cells}
            boardIndex={i}
            isActive={isActive}
            isPlayable={playable}
            result={localResults[i]}
            onCellClick={onCellClick}
          />
        );
      })}
    </section>
  );
}
