import Link from "next/link"

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}