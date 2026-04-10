import { Link } from 'react-router-dom';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function ContactPage() {
  return (
    <>
      <title>Contact Us - Ultimate Tic-Tac-Toe</title>
      <meta
        name="description"
        content="Get in touch with the Ultimate Tic-Tac-Toe team. Report bugs, suggest features, or share feedback about the game."
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
          Contact Us
        </h1>

        <section className="mb-8">
          <p className="text-slate-400 leading-relaxed mb-3">
            We value your feedback and are happy to hear from you. Whether you have found a bug,
            have a suggestion for improving the game, want to report a problem, or simply want
            to say hello, please do not hesitate to get in touch using any of the methods below.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We do our best to respond to all inquiries in a timely manner. Please note that this
            is a free, community-driven project, so response times may vary depending on the volume
            of messages we receive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Email
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            The best way to reach us is by email. Send your message to:
          </p>
          <p className="mb-3">
            <a
              href="mailto:support@tictactoe9x9.com"
              className="text-blue-400 hover:text-blue-300 underline text-lg"
            >
              support@tictactoe9x9.com
            </a>
          </p>
          <p className="text-slate-400 leading-relaxed">
            When reporting a bug, please include as much detail as possible: what device and
            browser you are using, what you were doing when the issue occurred, and any
            screenshots that might help us understand the problem. This helps us reproduce and
            fix issues faster.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            What We Can Help With
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>Bug reports and technical issues</li>
            <li>Feature requests and game improvement suggestions</li>
            <li>Questions about the game rules or strategy</li>
            <li>Privacy or data-related inquiries</li>
            <li>General feedback and comments</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Other Resources
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Before reaching out, you might find the answer to your question on one of our other
            pages:
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/how-to-play" className="text-blue-400 hover:text-blue-300 underline">
                How to Play
              </Link>{' '}
              <span className="text-slate-500">— Full rules and strategy guide</span>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>{' '}
              <span className="text-slate-500">— How we handle your data</span>
            </li>
            <li>
              <Link to="/terms" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </Link>{' '}
              <span className="text-slate-500">— Usage terms and conditions</span>
            </li>
          </ul>
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
