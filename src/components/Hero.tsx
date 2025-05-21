export default function Hero() {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue</h1>
        <p className="text-lg opacity-80">Un site personnel entre projets, art et idées.</p>
      </div>
    </section>
  )
}
