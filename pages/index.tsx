'use client'

import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Hero />
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Projets</h2>
            <p className="text-sm opacity-80">Quelques projets récents...</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Art</h2>
            <p className="text-sm opacity-80">Illustrations, 3D et plus.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
