import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-hero">
      <div className="text-center">
        <h1 className="font-display text-7xl font-bold gradient-text">404</h1>
        <p className="mt-3 text-muted">This page drifted into the void.</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-semibold text-background shadow-glow-blue">
          Back Home
        </Link>
      </div>
    </div>
  );
}
