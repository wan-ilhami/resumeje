export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      <span className="ml-3 text-blue-600 font-medium">Loading...</span>
    </div>
  )
}
