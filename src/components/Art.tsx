import Image from 'next/image'
import { useState } from 'react'

interface ArtPiece {
  id: number
  title: string
  image: string
  type: string
}

interface ModalProps {
  piece: ArtPiece | null
  onClose: () => void
}

function Modal({ piece, onClose }: ModalProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  if (!piece) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative"
        style={{
          width: dimensions.width ? Math.min(dimensions.width, window.innerWidth - 32) : 'auto',
          height: dimensions.height ? Math.min(dimensions.height, window.innerHeight - 32) : 'auto'
        }}
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={piece.image}
          alt={piece.title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
          onLoadingComplete={(target) => {
            setDimensions({
              width: target.naturalWidth,
              height: target.naturalHeight
            })
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-black/50 backdrop-blur-sm">
          <h2 className="text-xl font-light tracking-wide">{piece.title}</h2>
          <p className="text-sm opacity-70 mt-1">{piece.type}</p>
        </div>
      </div>
    </div>
  )
}

const PLACEHOLDER_ART: ArtPiece[] = [
  {
    id: 1,
    title: "Tormented",
    image: "/images/arts/tormented.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 2,
    title: "Vapor Space",
    image: "/images/arts/vaporspace.jpg",
    type: "3D Render"
  },
  {
    id: 3,
    title: "Devotion",
    image: "/images/arts/devotion.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 4,
    title: "Diamonds",
    image: "/images/arts/to_the_beginning.jpg",
    type: "3D Render"
  },
  {
    id: 5,
    title: "Hidden Cave",
    image: "/images/arts/shrooms.jpg",
    type: "3D Render"
  },
  {
    id: 6,
    title: "Senses Shatterer",
    image: "/images/arts/senses_shatterer.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 7,
    title: "Dimensional Lift Off",
    image: "/images/arts/dimensional_lift_off.jpg",
    type: "3D Render"
  },
  {
    id: 8,
    title: "Time Leap",
    image: "/images/arts/time_leap.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 9,
    title: "Neon Sunset",
    image: "/images/arts/neon_sunset.jpg",
    type: "3D Render"
  },
  {
    id: 10,
    title: "Silence",
    image: "/images/arts/silence.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 11,
    title: "Thinking Of You",
    image: "/images/arts/thinking_of_you.jpg",
    type: "3D Render"
  },
  {
    id: 12,
    title: "Face To Face",
    image: "/images/arts/face_to_face.jpg",
    type: "Digital Art/Glitch Art"
  },
  {
    id: 13,
    title: "Vapor Space 2",
    image: "/images/arts/vaporspace_2.jpg",
    type: "3D Render"
  },
  {
    id: 14,
    title: "Rebirth",
    image: "/images/arts/rebirth.jpg",
    type: "Digital Art/Glitch Art"
  }
]

export default function Art() {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PLACEHOLDER_ART.map((piece) => (
          <button
            key={piece.id}
            className="group relative aspect-square bg-[#1a1a1a] overflow-hidden"
            onClick={() => setSelectedPiece(piece)}
          >
            <Image
              src={piece.image}
              alt={piece.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-light tracking-wide mb-1">{piece.title}</span>
              <span className="text-xs opacity-50">{piece.type}</span>
            </div>
          </button>
        ))}
      </div>

      <Modal 
        piece={selectedPiece} 
        onClose={() => setSelectedPiece(null)} 
      />
    </>
  )
} 