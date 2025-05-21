interface ArtPiece {
  id: number
  title: string
  image: string
  type: string
}

const PLACEHOLDER_ART: ArtPiece[] = [
  {
    id: 1,
    title: "Abstract Composition",
    image: "/images/art1.jpg",
    type: "Digital Art"
  },
  {
    id: 2,
    title: "Geometric Study",
    image: "/images/art2.jpg",
    type: "3D Render"
  },
  {
    id: 3,
    title: "Color Exploration",
    image: "/images/art3.jpg",
    type: "Digital Painting"
  },
  {
    id: 4,
    title: "Pattern Series",
    image: "/images/art4.jpg",
    type: "Vector Art"
  },
  {
    id: 5,
    title: "Light Study",
    image: "/images/art5.jpg",
    type: "3D Render"
  },
  {
    id: 6,
    title: "Texture Experiment",
    image: "/images/art6.jpg",
    type: "Mixed Media"
  },
  {
    id: 7,
    title: "Form Study",
    image: "/images/art7.jpg",
    type: "Digital Art"
  },
  {
    id: 8,
    title: "Motion Exploration",
    image: "/images/art8.jpg",
    type: "Animation"
  }
]

export default function Art() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {PLACEHOLDER_ART.map((piece) => (
        <button
          key={piece.id}
          className="group relative aspect-square bg-[#1a1a1a] overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-sm opacity-50">
            [Art Image]
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-light tracking-wide mb-1">{piece.title}</span>
            <span className="text-xs opacity-50">{piece.type}</span>
          </div>
        </button>
      ))}
    </div>
  )
} 