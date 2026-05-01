import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl md:text-9xl font-bold text-orange-500">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found 😢
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 btn btn-primary bg-orange-500 border-none hover:bg-orange-600"
      >
        ⬅ Back to Home
      </Link>

      {/* Optional Extra */}
      <p className="mt-4 text-sm text-gray-400">
        Stay cool with SunCart ☀️
      </p>
    </div>
  );
}