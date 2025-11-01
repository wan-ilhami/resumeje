"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        className="mt-2 rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  )
}
