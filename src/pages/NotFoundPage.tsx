import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <title>Page Not Found - Ultimate Tic-Tac-Toe</title>

      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-6xl font-bold mb-4 text-slate-300">404</h1>
        <p className="text-xl text-slate-400 mb-2">Page Not Found</p>
        <p className="text-slate-500 mb-8 max-w-md">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </>
  );
}
