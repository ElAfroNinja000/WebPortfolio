export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center w-20 p-4 bg-[#0a0a0a] border-r border-[#1a1a1a] fixed top-0 left-0 h-screen">
      <nav className="flex flex-col space-y-6 mt-12">
        <a href="#projets" className="text-sm hover:text-white">📁</a>
        <a href="#art" className="text-sm hover:text-white">🎨</a>
        <a href="#blog" className="text-sm hover:text-white">📰</a>
      </nav>
    </aside>
  )
}
