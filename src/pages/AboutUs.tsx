export default function AboutUs() {
  return (
    <main className="w-full bg-theme-bg min-h-screen text-theme-text font-body pb-20 pt-12 px-6">
      <div className="max-w-screen-md mx-auto">
        <h1 className="font-typewriter text-4xl md:text-5xl font-bold tracking-widest uppercase mb-8 text-center text-theme-text">About Alpha</h1>
        
        <div className="aspect-video w-full bg-theme-gray mb-12">
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2800&auto=format&fit=crop" alt="Salon Interior" className="w-full h-full object-cover" />
        </div>

        <section className="mb-16">
          <h2 className="font-typewriter text-2xl font-bold uppercase mb-4 text-theme-pink">Our Story</h2>
          <p className="leading-relaxed text-theme-text/80 mb-4">
            Alpha Nail Salon was founded with a single mission: to provide an oasis of beauty and relaxation. We believe that your nails are an extension of your personal style, and our dedicated team of technicians are true artists.
          </p>
          <p className="leading-relaxed text-theme-text/80">
            From the moment you step through our doors, you'll be greeted by our signature pink aesthetic, a warm smile, and a commitment to hygiene and excellence that is second to none.
          </p>
        </section>

        <section>
          <h2 className="font-typewriter text-2xl font-bold uppercase mb-8 text-theme-pink">Services We Provide</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-typewriter font-bold text-lg mb-2">Signature Manicures & Pedicures</h3>
              <p className="text-sm text-theme-text/80 leading-relaxed">
                Our classic treatments involve precise cuticle care, shaping, exfoliation, and a relaxing massage, finished off with your choice of premium polish.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-typewriter font-bold text-lg mb-2">Gel & Acrylic Enhancements</h3>
              <p className="text-sm text-theme-text/80 leading-relaxed">
                For those seeking length and durability, our master technicians sculpt flawless acrylics and hard gel extensions. We specialize in natural-looking structures and perfectly balanced apexes.
              </p>
            </div>

            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-typewriter font-bold text-lg mb-2">Custom Nail Art</h3>
              <p className="text-sm text-theme-text/80 leading-relaxed">
                Bring your vision to life. From minimalist line work and French tips to intricate hand-painted floral designs and 3D gemstone placements, our artists can execute any trend.
              </p>
            </div>

            <div className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-typewriter font-bold text-lg mb-2">Specialty Finishes</h3>
              <p className="text-sm text-theme-text/80 leading-relaxed">
                Upgrade your look with our specialty finishes, including high-shine Chrome, Velvet Matte, mesmerizing Holographic powders, and the trendy Jelly transparent look.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
