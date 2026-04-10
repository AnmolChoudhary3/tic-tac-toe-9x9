import { useUltimateTicTacToe } from './hooks/useUltimateTicTacToe';
import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { GoogleAd } from './components/GoogleAd';

const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';

function App() {
  const { state, currentPlayer, globalResult, makeMove, restart, isBoardPlayable } =
    useUltimateTicTacToe();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center">
      {/* Top leaderboard ad */}
      <div className="w-full flex justify-center py-2 px-4">
        <GoogleAd
          client={AD_CLIENT}
          slot="top-leaderboard"
          className="h-[90px] w-full max-w-[728px]"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col xl:flex-row items-center justify-center gap-4 px-4 py-4 w-full">
        {/* Left sidebar ad — desktop only */}
        <div className="hidden xl:flex shrink-0">
          <GoogleAd
            client={AD_CLIENT}
            slot="left-sidebar"
            className="h-[600px] w-[160px]"
          />
        </div>

        {/* Game area */}
        <div className="flex flex-col items-center w-full max-w-[600px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Ultimate Tic-Tac-Toe
          </h1>

          <GameStatus
            currentPlayer={currentPlayer}
            globalResult={globalResult}
            onRestart={restart}
          />

          <Board
            gameState={state}
            isBoardPlayable={isBoardPlayable}
            onCellClick={makeMove}
          />

          {/* Rules hint */}
          <p className="mt-4 text-xs sm:text-sm text-slate-400 text-center max-w-md leading-relaxed">
            Win 3 small boards in a row to win. Your cell position determines which
            board your opponent plays next. A{' '}
            <span className="text-active font-semibold">yellow border</span>{' '}
            shows where you can play.
          </p>
        </div>

        {/* Right sidebar ad — desktop only */}
        <div className="hidden xl:flex shrink-0">
          <GoogleAd
            client={AD_CLIENT}
            slot="right-sidebar"
            className="h-[600px] w-[160px]"
          />
        </div>
      </div>

      {/* Bottom leaderboard ad */}
      <div className="w-full flex justify-center py-2 px-4">
        <GoogleAd
          client={AD_CLIENT}
          slot="bottom-leaderboard"
          className="h-[90px] w-full max-w-[728px]"
        />
      </div>
    </div>
  );
}

export default App;
