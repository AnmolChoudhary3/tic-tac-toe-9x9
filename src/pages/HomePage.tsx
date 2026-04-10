import { Link } from 'react-router-dom';
import { useUltimateTicTacToe } from '../hooks/useUltimateTicTacToe';
import { Board } from '../components/Board';
import { GameStatus } from '../components/GameStatus';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function HomePage() {
  const { state, currentPlayer, globalResult, makeMove, restart, isBoardPlayable } =
    useUltimateTicTacToe();

  return (
    <>
      <title>Ultimate Tic-Tac-Toe - Play Free Online</title>
      <meta
        name="description"
        content="Play Ultimate Tic-Tac-Toe online for free. A strategic twist on classic tic-tac-toe where nine interconnected boards create deep, competitive gameplay for two players."
      />

      <div className="flex flex-col items-center">
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

            <p className="text-sm sm:text-base text-slate-400 text-center max-w-lg mb-4 leading-relaxed">
              Welcome to Ultimate Tic-Tac-Toe, the strategic board game that takes classic
              tic-tac-toe to a whole new level. Instead of one 3&times;3 grid, you play across
              nine interconnected boards arranged in a larger 3&times;3 layout. Every move you make
              determines which board your opponent must play in next, creating layers of strategy
              that reward planning and foresight. Whether you are new to the game or a seasoned
              player, each match offers a fresh tactical challenge. Grab a friend and start playing
              right here in your browser — no downloads or sign-ups required.
            </p>

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
              shows where you can play.{' '}
              <Link to="/how-to-play" className="text-blue-400 hover:text-blue-300 underline">
                Learn the full rules
              </Link>
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
    </>
  );
}
