import Image from 'next/image'

interface Project {
  id: number
  title: string
  image: string
  url: string
  description: string
  tags: string[]
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
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {PLACEHOLDER_PROJECTS.map((project) => (
        <a
          href={project.url}
          key={project.id}
          className="group relative aspect-square bg-[#1a1a1a] overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-base md:text-lg font-medium tracking-wide mb-3">{project.title}</span>
            <p className="text-sm md:text-base text-center font-light text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#4eb7b4] text-[#161616] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
} 