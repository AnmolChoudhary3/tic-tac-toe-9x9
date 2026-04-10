import { Link } from 'react-router-dom';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function TermsPage() {
  return (
    <>
      <title>Terms of Service - Ultimate Tic-Tac-Toe</title>
      <meta
        name="description"
        content="Read the terms of service for Ultimate Tic-Tac-Toe. Understand the conditions for using our free online strategy game."
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: April 10, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Acceptance of Terms
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            By accessing and using Ultimate Tic-Tac-Toe ("the Website"), you acknowledge that you
            have read, understood, and agree to be bound by these Terms of Service ("Terms"). If
            you do not agree with any part of these Terms, you must discontinue use of the
            Website immediately.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the Website. Your continued use of the Website after any
            changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Description of Service
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Ultimate Tic-Tac-Toe provides a free, browser-based implementation of the Ultimate
            Tic-Tac-Toe strategy game. The game is provided for entertainment and educational
            purposes and allows two players to compete against each other on the same device.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The service is provided "as is" and is accessible through any modern web browser
            without the need for downloads, installations, or account registration. We make no
            guarantees regarding the continuous availability of the Website, and we reserve the
            right to modify, suspend, or discontinue the service at any time without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            User Conduct
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            When using the Website, you agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>Attempt to interfere with, disrupt, or compromise the integrity of the Website or its underlying infrastructure</li>
            <li>Use automated tools, bots, or scripts to interact with the Website in a manner that is not intended by its design</li>
            <li>Attempt to gain unauthorized access to any part of the Website, its servers, or any connected systems</li>
            <li>Use the Website for any unlawful purpose or in violation of any applicable local, national, or international law</li>
            <li>Reproduce, distribute, or create derivative works from the Website's content without prior written consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Intellectual Property
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            The Website's design, code, graphics, layout, and other visual or functional
            elements are the intellectual property of Ultimate Tic-Tac-Toe and are protected by
            applicable copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The game concept of Ultimate Tic-Tac-Toe (also known as Super Tic-Tac-Toe) is a
            well-known public domain game. Our implementation, including its specific design,
            user interface, and codebase, is proprietary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Advertising
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            The Website displays third-party advertisements through Google AdSense. These
            advertisements help support the free operation of the Website. By using the Website,
            you acknowledge that advertisements will be displayed alongside the game content.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We are not responsible for the content of third-party advertisements. Any interaction
            you have with advertisers, including clicking on ads or purchasing products or
            services, is solely between you and the advertiser. Please review our{' '}
            <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </Link>{' '}
            for more information about how advertising cookies and data are handled.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Disclaimer of Warranties
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            The Website and all content, features, and services provided through it are offered on
            an "as is" and "as available" basis without any warranties of any kind, either express
            or implied. We do not warrant that the Website will be uninterrupted, error-free,
            secure, or free from viruses or other harmful components.
          </p>
          <p className="text-slate-400 leading-relaxed">
            To the fullest extent permitted by applicable law, we disclaim all warranties,
            including but not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Limitation of Liability
          </h2>
          <p className="text-slate-400 leading-relaxed">
            To the maximum extent permitted by law, Ultimate Tic-Tac-Toe and its operators shall
            not be liable for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred directly or indirectly,
            or any loss of data, use, goodwill, or other intangible losses resulting from your
            access to or use of (or inability to access or use) the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Governing Law
          </h2>
          <p className="text-slate-400 leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles. Any disputes arising from or related to
            these Terms or the use of the Website shall be resolved through good-faith
            negotiation, or if necessary, through binding arbitration or in the courts of the
            applicable jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Contact Us
          </h2>
          <p className="text-slate-400 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us through
            our{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              Contact page
            </Link>
            .
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
