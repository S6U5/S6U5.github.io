"use client"

import { useState } from "react"
import MainContent from "@/components/main-contents/MainContent"
import AboutContent from "@/components/main-contents/AboutContent"

export default function HomePage() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-10 px-6 bg-slate-50 text-gray-800 transition-all">
      {/* トグルボタン */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setShowAbout(false)}
          className={`px-4 py-2 rounded-lg border transition ${!showAbout
            ? "bg-sky-500 text-white border-sky-500"
            : "bg-white text-sky-600 border-gray-300 hover:border-sky-500"
            }`}
        >
          Main
        </button>
        <button
          onClick={() => setShowAbout(true)}
          className={`px-4 py-2 rounded-lg border transition ${showAbout
            ? "bg-sky-500 text-white border-sky-500"
            : "bg-white text-sky-600 border-gray-300 hover:border-sky-500"
            }`}
        >
          About Me
        </button>
      </div>

      {/* 切り替え領域 */}
      <div className="w-full max-w-3xl transition-all duration-300">
        {showAbout ? <AboutContent /> : <MainContent />}
      </div>
    </main>
  )
}