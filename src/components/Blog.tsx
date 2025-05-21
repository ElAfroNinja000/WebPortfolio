import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  date: string
}

const PLACEHOLDER_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Digital Design",
    description: "Exploring the transformation of design principles in the digital age and how they shape our interaction with modern interfaces.",
    image: "/images/blog1.jpg",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Creative Process Unveiled",
    description: "A deep dive into the creative process, from initial concept to final execution, and the tools that make it possible.",
    image: "/images/blog2.jpg",
    date: "March 10, 2024"
  },
  {
    id: 3,
    title: "Future of Interactive Media",
    description: "Examining emerging trends in interactive media and their potential impact on how we consume and create content.",
    image: "/images/blog3.jpg",
    date: "March 5, 2024"
  }
]

export default function Blog() {
  return (
    <div className="grid gap-12">
      {PLACEHOLDER_POSTS.map((post) => (
        <article key={post.id} className="grid md:grid-cols-[2fr,3fr] gap-8 items-start">
          <div className="relative aspect-[4/3] bg-[#1a1a1a]">
            <div className="absolute inset-0 flex items-center justify-center text-sm opacity-50">
              [Placeholder Image]
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-2">{post.title}</h3>
            <p className="text-sm opacity-50 mb-4">{post.date}</p>
            <p className="text-base opacity-80 leading-relaxed">{post.description}</p>
            <button className="mt-6 text-sm font-light tracking-wide hover:opacity-50 transition-opacity duration-300">
              Read More →
            </button>
          </div>
        </article>
      ))}
    </div>
  )
} 