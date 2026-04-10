import type { CellValue, BoardResult } from '../types/game';
import { Cell } from './Cell';
import { cn } from '../utils/cn';

interface SmallBoardProps {
  cells: CellValue[];
  boardIndex: number;
  isActive: boolean;
  isPlayable: boolean;
  result: BoardResult;
  onCellClick: (boardIndex: number, cellIndex: number) => void;
}

export function SmallBoard({
  cells,
  boardIndex,
  isActive,
  isPlayable,
  result,
  onCellClick,
}: SmallBoardProps) {
  const resolved = result !== null;

  return (
    <div
      className={cn(
        'relative rounded-lg p-1 sm:p-1.5 transition-all duration-200',
        'bg-board',
        isActive && !resolved && 'ring-2 ring-active shadow-[0_0_12px_rgba(250,204,21,0.3)]',
        !isPlayable && !resolved && 'opacity-30',
      )}
    >
      {/* 3×3 cell grid */}
      <div
        className={cn(
          'grid grid-cols-3 gap-[2px] sm:gap-1',
          !isPlayable && 'pointer-events-none',
        )}
      >
        {cells.map((cell, i) => (
          <Cell
            key={i}
            value={cell}
            onClick={() => onCellClick(boardIndex, i)}
            disabled={!isPlayable || cell !== null}
          />
        ))}
      </div>

      {/* Win / Draw overlay */}
      {resolved && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center rounded-lg',
            'text-5xl sm:text-6xl md:text-7xl font-black',
            'pointer-events-none',
            result === 'X' && 'bg-blue-500/25 text-x',
            result === 'O' && 'bg-red-500/25 text-o',
            result === 'draw' && 'bg-gray-600/30 text-gray-400',
          )}
        >
          {result === 'draw' ? '=' : result}
        </div>
      )}
    </div>
  );
}
