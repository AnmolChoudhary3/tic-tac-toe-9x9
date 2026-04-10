import { Link } from 'react-router-dom';
import { GoogleAd } from '../components/GoogleAd';
import { AD_CLIENT } from '../config';

export function PrivacyPolicyPage() {
  return (
    <>
      <title>Privacy Policy - Ultimate Tic-Tac-Toe</title>
      <meta
        name="description"
        content="Read the privacy policy for Ultimate Tic-Tac-Toe. Learn how we handle your data, our use of cookies, and your rights regarding personal information."
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
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: April 10, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Introduction
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Welcome to Ultimate Tic-Tac-Toe ("we," "our," or "us"). We are committed to
            protecting your privacy and being transparent about how information is collected and
            used when you visit our website. This Privacy Policy explains what data may be
            collected, how it is used, and what choices you have.
          </p>
          <p className="text-slate-400 leading-relaxed">
            By using our website, you agree to the practices described in this Privacy Policy. If
            you do not agree with any part of this policy, please discontinue use of the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Information We Collect
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Ultimate Tic-Tac-Toe is a client-side game that runs entirely in your web browser. We
            do not require user accounts, and we do not collect personal information such as your
            name, email address, or payment details through the game itself.
          </p>
          <p className="text-slate-400 leading-relaxed mb-3">
            However, certain information may be collected automatically when you visit our site
            through the use of cookies and similar technologies by third-party services. This may
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website or URL</li>
            <li>Pages visited and time spent on the site</li>
            <li>Device type (desktop, mobile, tablet)</li>
            <li>Screen resolution and language preferences</li>
          </ul>
          <p className="mt-3 text-slate-400 leading-relaxed">
            This information is collected automatically by third-party advertising and analytics
            services and is used to serve relevant advertisements and understand how visitors
            interact with the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Google AdSense and Cookies
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            This website uses Google AdSense, a third-party advertising service provided by Google
            LLC, to display advertisements. Google AdSense uses cookies to serve ads based on your
            prior visits to this website and other websites on the internet.
          </p>
          <p className="text-slate-400 leading-relaxed mb-3">
            Google's use of advertising cookies enables it and its partners to serve ads to you
            based on your visit to this site and/or other sites on the internet. These cookies do
            not contain personally identifiable information in the traditional sense, but they do
            track browsing behavior across websites to deliver personalized advertising content.
          </p>
          <p className="text-slate-400 leading-relaxed mb-3">
            You may opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google's Ads Settings
            </a>
            . You can also opt out of third-party vendor cookies by visiting the{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Digital Advertising Alliance opt-out page
            </a>
            .
          </p>
          <p className="text-slate-400 leading-relaxed">
            For more information about how Google collects and uses data, please review{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google's Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              how Google uses data when you use our partners' sites or apps
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            How We Use Information
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Any information collected through the website is used for the following purposes:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>To serve relevant advertisements through Google AdSense</li>
            <li>To understand how visitors use the website so we can improve the user experience</li>
            <li>To monitor and analyze trends, usage patterns, and site performance</li>
            <li>To maintain the security and integrity of the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Third-Party Services
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            In addition to Google AdSense, we may use other third-party services that collect,
            monitor, and analyze visitor data. These services have their own privacy policies that
            govern how they handle your information. We encourage you to review the privacy
            policies of any third-party services you interact with.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We do not sell, trade, or otherwise transfer your information to outside parties,
            except as required to provide the services described in this policy or as required
            by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Your Rights and Choices
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Depending on your location, you may have certain rights regarding your personal data
            under applicable privacy laws such as the General Data Protection Regulation (GDPR)
            or the California Consumer Privacy Act (CCPA). These rights may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400 leading-relaxed">
            <li>The right to access the personal data collected about you</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to opt out of the sale of personal information (where applicable)</li>
            <li>The right to object to or restrict processing of your data</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-3 text-slate-400 leading-relaxed mb-3">
            You can manage your cookie preferences through your browser settings. Most browsers
            allow you to block or delete cookies, though doing so may affect the functionality of
            some websites. You can also use browser extensions that block third-party tracking
            cookies.
          </p>
          <p className="text-slate-400 leading-relaxed">
            To exercise any of these rights or to ask questions about your personal data, please
            contact us using the information provided on our{' '}
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              Contact page
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Children's Privacy
          </h2>
          <p className="text-slate-400 leading-relaxed mb-3">
            Our website is not directed at children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian
            and believe that your child has provided us with personal information, please contact
            us so that we can take the necessary steps to delete such information.
          </p>
          <p className="text-slate-400 leading-relaxed">
            In compliance with the Children's Online Privacy Protection Act (COPPA), we take
            reasonable measures to ensure that advertisements displayed on our site are appropriate
            and that no personal information is knowingly collected from minors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Data Security
          </h2>
          <p className="text-slate-400 leading-relaxed">
            We take reasonable precautions to protect any information transmitted through our
            website. Our site is served over HTTPS, ensuring that data in transit between your
            browser and our servers is encrypted. However, no method of electronic transmission
            or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Changes to This Privacy Policy
          </h2>
          <p className="text-slate-400 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, technology, legal requirements, or other factors. When we make changes, we
            will update the "Last updated" date at the top of this page. We encourage you to
            review this Privacy Policy periodically to stay informed about how we are protecting
            your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-200">
            Contact Us
          </h2>
          <p className="text-slate-400 leading-relaxed">
            If you have any questions about this Privacy Policy or wish to exercise your privacy
            rights, please reach out to us through our{' '}
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
