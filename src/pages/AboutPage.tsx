import { Link } from 'react-router-dom';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function AboutPage() {
  return (
    <>
      <title>About - Ultimate Tic-Tac-Toe</title>
      <meta
        name="description"
        content="Learn about Ultimate Tic-Tac-Toe, a free online strategy game built with modern web technologies. Discover the story behind the game and what makes it special."
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
          About Ultimate Tic-Tac-Toe
        </h1>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            About This Game
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Ultimate Tic-Tac-Toe is a free, browser-based strategy game designed for two players
            who want more depth than traditional tic-tac-toe offers. Our goal is to provide a
            clean, fast, and enjoyable experience with no downloads, no account creation, and no
            barriers to playing.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The game runs entirely in your browser. There are no servers tracking your moves, no
            accounts to manage, and no data stored about your gameplay. Just open the page, share
            it with a friend, and play. It is designed to load instantly on any device, whether
            you are on a desktop computer, a tablet, or a smartphone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Why Ultimate Tic-Tac-Toe?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Regular tic-tac-toe is a solved game. With optimal play from both sides, every game
            ends in a draw, which means it quickly loses its appeal for anyone older than
            elementary school age. Ultimate Tic-Tac-Toe fixes this by introducing a mechanic
            where each move you make determines where your opponent must play next.
          </p>
          <p className="text-slate-400 leading-relaxed mb-3">
            This single rule change transforms a trivial game into one with genuine strategic
            depth. You have to think about not just your immediate position but also what board
            you are sending your opponent to and what threats they might build from there. Games
            can swing dramatically based on a single misplaced move, and unlike regular
            tic-tac-toe, draws are the exception rather than the rule.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The result is a game that is easy to learn in minutes but takes much longer to master.
            It is an excellent way to pass time with a friend, sharpen your strategic thinking,
            or simply enjoy a quick mental challenge during a break.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            How It Was Built
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            This game was built using modern web technologies with a focus on performance and
            accessibility. The front end is built with React and TypeScript, ensuring a smooth,
            type-safe codebase. Styling is handled through Tailwind CSS, which provides a
            responsive design that adapts seamlessly to any screen size. The development and
            build pipeline is powered by Vite, giving near-instant hot reloading during
            development and optimized production bundles.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Accessibility was considered from the start. Interactive elements use semantic HTML,
            cells have descriptive labels for screen readers, and the interface is fully navigable
            via keyboard. The active board indicator uses both color and a glow effect for
            visibility, ensuring the game is playable even for users with color vision differences.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Get in Touch
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Have a question, found a bug, or just want to share feedback? Visit our{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact page
            </Link>{' '}
            to reach out. We appreciate hearing from players and are always looking for ways to
            improve the experience.
          </p>
        </section>
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
