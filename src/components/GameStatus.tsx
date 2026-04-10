import type { Player, BoardResult } from '../types/game';
import { cn } from '../utils/cn';

interface GameStatusProps {
  currentPlayer: Player;
  globalResult: BoardResult;
  onRestart: () => void;
}

export function GameStatus({ currentPlayer, globalResult, onRestart }: GameStatusProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-5">
      <p className="text-lg sm:text-xl font-semibold tracking-tight">
        {globalResult === 'draw' ? (
          <span className="text-gray-400">Game is a Draw!</span>
        ) : globalResult ? (
          <>
            <span className={cn(globalResult === 'X' ? 'text-x' : 'text-o')}>
              {globalResult}
            </span>
            {' '}wins the game!
          </>
        ) : (
          <>
            <span className={cn(currentPlayer === 'X' ? 'text-x' : 'text-o')}>
              {currentPlayer}
            </span>
            {"'s turn"}
          </>
        )}
      </p>
      <button
        type="button"
        onClick={onRestart}
        className={cn(
          'px-5 py-2 rounded-lg text-sm font-semibold',
          'bg-slate-700 hover:bg-slate-600 active:bg-slate-500',
          'transition-colors duration-150 cursor-pointer',
          'border border-slate-600',
        )}
      >
        Restart Game
      </button>
    </div>
  );
}
