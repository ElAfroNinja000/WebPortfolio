interface Project {
  id: number
  title: string
  image: string
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Digital Experience Platform",
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Brand Identity System",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Interactive Installation",
    image: "/images/project3.jpg"
  },
  {
    id: 4,
    title: "Mobile Application Design",
    image: "/images/project4.jpg"
  },
  {
    id: 5,
    title: "Web Platform Redesign",
    image: "/images/project5.jpg"
  },
  {
    id: 6,
    title: "Digital Campaign",
    image: "/images/project6.jpg"
  }
]

export default function Projects() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {PLACEHOLDER_PROJECTS.map((project) => (
        <button
          key={project.id}
          className="group relative aspect-square bg-[#1a1a1a] overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-sm opacity-50">
            [Project Image]
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-light tracking-wide">{project.title}</span>
          </div>
        </button>
      ))}
    </div>
  )
} 