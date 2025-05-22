import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  image: string
  url: string
  description: string
  tags: string[]
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onProjectClick: (url: string) => void
}

function ProjectModal({ project, onClose, onProjectClick }: ProjectModalProps) {
  if (!project) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-square w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
          <h2 className="text-xl font-medium tracking-wide mb-4 text-center">{project.title}</h2>
          <p className="text-base text-center font-light text-gray-300 leading-relaxed mb-8">{project.description}</p>
          <button
            onClick={() => onProjectClick(project.url)}
            className="px-6 py-2 bg-[#4eb7b4] text-[#161616] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Project
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#4eb7b4] text-[#161616] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cartography data visualization",
    image: "/images/projects/carto.svg",
    url: "https://github.com/ElAfroNinja000/cartography_data_viz",
    description: "A python data visualization project that uses cartography data to create a visual representation of geographic data.",
    tags: ["Python", "Cartography", "Data Visualization"]
  },
  {
    id: 2,
    title: "Creative Development Portal",
    image: "/images/projects/tech_dashboard.svg",
    url: "https://github.com/ElAfroNinja000/DashboardTech",
    description: "A dashboard for creative development that provides relevant articles about AI, Data engineering and 3D graphics.",
    tags: ["Python", "Streamlit", "Data Engineering"]
  },
  {
    id: 3,
    title: "AI-Assisted Copywriting app",
    image: "/images/projects/copywriting.svg",
    url: "https://github.com/ElAfroNinja000/GPT_Copywriting",
    description: "An AI-powered copywriting app that uses natural language processing to generate high-quality copy for various marketing channels.",
    tags: ["FastAPI", "Openai"]
  },
  {
    id: 4,
    title: "Machine Learning Practicing",
    image: "/images/projects/ml_training.svg",
    url: "https://github.com/ElAfroNinja000/ML_Training",
    description: "A collection of machine learning projects that I have practiced and learned from.",
    tags: ["Data Engineering", "Arts", "Matplotlib", "Pandas", "TensorFlow"]
  },
  {
    id: 5,
    title: "Blender Setup Script",
    image: "/images/projects/blender_setup.svg",
    url: "https://github.com/ElAfroNinja000/Blender_Scripts",
    description: "[WIP] A collection of scripts that I have used to setup my Blender projects.",
    tags: ["Blender", "Python", "3D Graphics"]
  },
  {
    id: 6,
    title: "QRCode Scanner",
    image: "/images/projects/qr_scanner.svg",
    url: "https://github.com/ElAfroNinja000/QRCode_WebApp",
    description: "A web application that allows you to scan QR codes and get information about the scanned code.",
    tags: ["Python", "FastAPI", "QRCode"]
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    if (window.innerWidth >= 768) return
    e.preventDefault()
    setSelectedProject(project)
  }

  const handleModalProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PLACEHOLDER_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square bg-[#1a1a1a] overflow-hidden cursor-pointer"
            onClick={(e) => handleProjectClick(project, e)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block absolute inset-0"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col items-center justify-center px-6">
                  <span className="text-base md:text-lg font-medium tracking-wide mb-4">{project.title}</span>
                  <p className="text-sm md:text-base text-center font-light text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 max-w-[80%]">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#4eb7b4] text-[#161616] whitespace-nowrap inline-block mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onProjectClick={handleModalProjectClick}
      />
    </>
  )
} 