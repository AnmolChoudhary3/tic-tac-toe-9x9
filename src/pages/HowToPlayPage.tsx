import { Link } from 'react-router-dom';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function HowToPlayPage() {
  return (
    <>
      <title>How to Play Ultimate Tic-Tac-Toe - Rules & Strategy Guide</title>
      <meta
        name="description"
        content="Learn the rules, strategies, and tips for Ultimate Tic-Tac-Toe. Master the game with our comprehensive guide covering board mechanics, winning tactics, and common mistakes."
      />

      {/* Top leaderboard ad */}
      <div className="w-full flex justify-center py-2 px-4">
        <GoogleAd
          client={AD_CLIENT}
          slot="top-leaderboard"
          className="h-[90px] w-full max-w-[728px]"
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
          How to Play Ultimate Tic-Tac-Toe
        </h1>

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            What Is Ultimate Tic-Tac-Toe?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Ultimate Tic-Tac-Toe (also known as Super Tic-Tac-Toe or Meta Tic-Tac-Toe) is a
            two-player strategy game that transforms the simplicity of classic tic-tac-toe into a
            deeply tactical experience. The game was popularized in the early 2000s as a way to
            eliminate the "solved" nature of regular tic-tac-toe, where perfect play always leads
            to a draw.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Instead of playing on a single 3&times;3 grid, you play on nine smaller 3&times;3
            boards that are arranged in a larger 3&times;3 layout, creating a total of 81 cells.
            The twist that makes this game special is that each move you make dictates where your
            opponent must play next, adding a layer of strategy that is absent from the original
            game.
          </p>
        </section>

        {/* Basic rules */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Basic Rules
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-400 leading-relaxed">
            <li>
              <strong className="text-slate-300">The board</strong> consists of nine smaller
              3&times;3 tic-tac-toe boards arranged in a 3&times;3 grid. Think of it as a
              tic-tac-toe game within a tic-tac-toe game.
            </li>
            <li>
              <strong className="text-slate-300">Players take turns</strong> placing their mark
              (X or O) on any empty cell within the board they are directed to play in. The first
              player always plays X.
            </li>
            <li>
              <strong className="text-slate-300">Your move determines your opponent's board.</strong>{' '}
              When you place your mark in a cell, the position of that cell within its small board
              corresponds to the small board your opponent must play in next. For example, if you
              play in the top-right cell of any small board, your opponent must play in the
              top-right small board.
            </li>
            <li>
              <strong className="text-slate-300">Free moves.</strong> If the target board is
              already won or drawn (fully played out), your opponent gets a free move and can
              play in any board that is still in play.
            </li>
            <li>
              <strong className="text-slate-300">Winning a small board</strong> works exactly
              like regular tic-tac-toe: get three of your marks in a row, column, or diagonal
              within that small board.
            </li>
            <li>
              <strong className="text-slate-300">Winning the game.</strong> To win Ultimate
              Tic-Tac-Toe, you must win three small boards in a row, column, or diagonal on the
              larger 3&times;3 grid. If all nine small boards are resolved without either player
              achieving this, the game ends in a draw.
            </li>
          </ol>
          <p className="mt-3 text-slate-400 leading-relaxed">
            On this site, the board you are allowed to play in is highlighted with a{' '}
            <span className="text-yellow-400 font-semibold">yellow border</span>, so you
            always know where your next move should go.
          </p>
        </section>

        {/* Strategy tips */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Strategy Tips
          </h2>

          <h3 className="text-lg font-medium mb-2 text-slate-300">Control the Center</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Just like in regular tic-tac-toe, the center board holds significant strategic value.
            Winning the center small board gives you the most opportunities to form a three-in-a-row
            on the larger grid, since it is part of four possible winning lines (one row, one
            column, and two diagonals). Try to play moves that send your opponent to boards where
            they cannot easily threaten you, while keeping the center board in your control.
          </p>

          <h3 className="text-lg font-medium mb-2 text-slate-300">Think Two Moves Ahead</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Because your cell placement determines where your opponent plays next, every move has a
            double consequence. Before placing your mark, consider not just the small board you are
            playing in, but also which board you are sending your opponent to. Sending your opponent
            to a board where they can win might cost you the game, even if your immediate move seems
            strong.
          </p>

          <h3 className="text-lg font-medium mb-2 text-slate-300">Use Won Boards to Your Advantage</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            When a small board is resolved (won by either player or drawn), any move that would
            send an opponent there instead grants them a free move. This can be both a tool and a
            trap. Sometimes winning a board early means your opponent can never be forced into it
            again, giving them more freedom. Other times, closing off a board can limit your
            opponent's options. Evaluate each situation carefully.
          </p>

          <h3 className="text-lg font-medium mb-2 text-slate-300">Force Your Opponent</h3>
          <p className="text-slate-400 leading-relaxed">
            One of the strongest strategies is to create positions where your opponent is forced
            to play in a board that benefits you. If you can set up a situation where multiple
            boards contain threats, your opponent will struggle to defend on all fronts. This
            kind of multi-board pressure is the hallmark of advanced Ultimate Tic-Tac-Toe play.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>
              <strong className="text-slate-300">Ignoring where you send your opponent.</strong>{' '}
              Focusing only on winning the current small board without considering the next move
              is the most common beginner error.
            </li>
            <li>
              <strong className="text-slate-300">Neglecting defensive play.</strong> It is easy
              to chase offensive wins and forget that your opponent is building their own
              three-in-a-row on the larger grid.
            </li>
            <li>
              <strong className="text-slate-300">Giving away free moves carelessly.</strong>{' '}
              Sending your opponent to a resolved board gives them complete freedom to play
              anywhere, which can be devastating if they have multiple threats.
            </li>
            <li>
              <strong className="text-slate-300">Tunnel vision on a single board.</strong>{' '}
              Winning one small board is only useful if it contributes to a winning line on the
              larger grid. Always keep the big picture in mind.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-slate-400 mb-4">Ready to put these strategies to the test?</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
          >
            Start Playing Now
          </Link>
        </div>
      </article>

      {/* Bottom leaderboard ad */}
      <div className="w-full flex justify-center py-2 px-4">
        <GoogleAd
          client={AD_CLIENT}
          slot="bottom-leaderboard"
          className="h-[90px] w-full max-w-[728px]"
        />
      </div>
    </>
  );
}
