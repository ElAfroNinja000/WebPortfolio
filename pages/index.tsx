'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Blog from '@/components/Blog'
import Projects from '@/components/Projects'
import Art from '@/components/Art'

export default function Home() {
  const [activeTab, setActiveTab] = useState('blog')

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 flex flex-col">
        <Hero />
        
        {/* Tabs */}
        <div className="px-8 pt-16">
          <div className="flex space-x-12 border-b border-[#e4e4e4]/10">
            {['Blog', 'Projects', 'Art'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-4 text-lg font-light tracking-wide transition-opacity duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? 'opacity-100 border-b-2 border-[#e4e4e4] -mb-[2px]'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          {activeTab === 'blog' && <Blog />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'art' && <Art />}
        </div>
      </main>
    </div>
  )
}
