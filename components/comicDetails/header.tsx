'use client'

import { useState } from 'react'

export function Header() {
  const [activeTab, setActiveTab] = useState('synopsis')
  
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-4">
          <h1 className="text-2xl font-bold mb-1">
            The Crazy Genius Composer Returns
          </h1>
          <div className="text-sm text-gray-400">
            한국어 (韓國語), 조선말 (朝鮮語)
          </div>
        </div>
        
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('synopsis')}
            className={`nav-tab py-4 ${activeTab === 'synopsis' ? 'active' : ''}`}
          >
            Synopsis
          </button>
          <button
            onClick={() => setActiveTab('chapters')}
            className={`nav-tab py-4 ${activeTab === 'chapters' ? 'active' : ''}`}
          >
            Chapters ( 47 )
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`nav-tab py-4 ${activeTab === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </button>
        </nav>
      </div>
    </header>
  )
}

