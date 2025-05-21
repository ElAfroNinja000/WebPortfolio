export default function Hero() {
  return (
    <section className="relative h-screen flex">
      {/* Left side - Welcome text */}
      <div className="w-1/2 flex flex-col px-8">
        <div className="w-full">
          {/* Welcome text container - half height */}
          <div className="h-[50vh] flex items-center">
            <div>
              <p className="text-4xl opacity-80">
                <span className="text-red-500">Un site</span>
                <span className="text-[#e4e4e4]"> personnel entre projets, art et idées.</span>
              </p>
              <p className="text-[#e4e4e4]">Developer</p>
            </div>
          </div>
          
          {/* Connect section - half height */}
          <div className="h-[50vh] flex items-start mt-20">
            <div className="w-full pr-8">
              <h2 className="text-2xl font-semibold tracking-wide mb-8 text-[#e4e4e4]">Connect</h2>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-lg font-light tracking-wide hover:opacity-50 transition-opacity duration-300 pb-2 border-b border-[#8CACD3]/10 text-[#8CACD3]"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://instagram.com/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-lg font-light tracking-wide hover:opacity-50 transition-opacity duration-300 pb-2 border-b border-[#AFA4CE]/10 text-[#AFA4CE]"
                >
                  Instagram
                </a>
                <a 
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-lg font-light tracking-wide hover:opacity-50 transition-opacity duration-300 pb-2 border-b border-[#F7F6CF]/10 text-[#F7F6CF]"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="w-full text-lg font-light tracking-wide hover:opacity-50 transition-opacity duration-300 pb-2 border-b border-[#B9CFD0]/10 text-[#B9CFD0]"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Pixel Art Banner */}
      <div className="w-1/2 relative">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/banner.gif')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'pixelated'
          }}
        />
        <div className="absolute inset-0 bg-[#161616]/30"></div>
      </div>
    </section>
  )
}
