import { Link } from 'react-router-dom'
import AppointmentBooking from '../components/booking/AppointmentBooking'

export default function Home() {
  return (
    <main className="w-full bg-theme-bg min-h-screen text-theme-text font-body pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-screen-2xl mx-auto h-[600px] mb-16 px-4 md:px-6 pt-4 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="w-full h-full rounded-[3rem] overflow-hidden relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2938&auto=format&fit=crop" 
            alt="Pink Nails Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/20">
            <h1 className="text-white font-typewriter text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">Glitter and Shine</h1>
            <p className="text-white text-sm md:text-base max-w-xl mb-8 drop-shadow-md">Share a promotional detail about this banner image or a discount code for customers.</p>
            <Link to="/shop" className="border-2 border-white rounded-full text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-theme-pink transition-colors animate-float shadow-lg" style={{ animationDelay: '0.8s' }}>
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Pinterest Aesthetic Category Cards */}
      <section className="max-w-screen-xl mx-auto px-6 mb-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: Scrapbook Stack */}
          <Link to="/shop" className="flex flex-col bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all duration-500 group relative animate-float" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-typewriter text-sm tracking-widest uppercase font-bold text-theme-text mb-6 group-hover:text-theme-pink transition-colors relative z-20">Glitters & Shine</h3>
            <div className="relative h-64 w-full mb-6 flex items-center justify-center">
              <div className="absolute w-32 h-40 bg-white p-2 shadow-md transform -rotate-12 -translate-x-6 group-hover:-translate-x-12 group-hover:-rotate-[15deg] transition-all duration-500 z-10">
                <img src="/images/custom_holographic_1781638933536.png" className="w-full h-full object-cover" />
              </div>
              <div className="absolute w-32 h-40 bg-white p-2 shadow-md transform rotate-6 translate-x-4 group-hover:translate-x-12 group-hover:rotate-12 transition-all duration-500 z-20">
                <img src="/images/custom_chrome_1781638907788.png" className="w-full h-full object-cover" />
              </div>
              <div className="absolute w-36 h-44 bg-white p-2 shadow-2xl transform -rotate-3 group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-500 z-30">
                <img src="/images/themed_galaxy_1781638853617.png" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-xs font-bold text-theme-pink uppercase tracking-widest group-hover:underline mt-auto relative z-20">Shop Collection &rarr;</span>
          </Link>

          {/* Category 2: Pinterest Masonry */}
          <Link to="/shop" className="flex flex-col bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all duration-500 group animate-float" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-typewriter text-sm tracking-widest uppercase font-bold text-theme-text mb-6 group-hover:text-theme-pink transition-colors">Themed Designs</h3>
            <div className="grid grid-cols-2 gap-2 h-64 mb-6">
              <div className="h-full w-full rounded-tl-[2rem] rounded-bl-lg overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                <img src="/images/themed_bridal_1781638833380.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-2 h-full">
                <div className="h-1/2 w-full rounded-tr-[2rem] overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                  <img src="/images/themed_floral_1781638877488.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-1/2 w-full rounded-br-xl overflow-hidden group-hover:translate-y-1 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                  <img src="/images/themed_neon_1781638866407.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-theme-pink uppercase tracking-widest group-hover:underline mt-auto">Shop Collection &rarr;</span>
          </Link>

          {/* Category 3: Arch & Pill Cutouts */}
          <Link to="/shop" className="flex flex-col bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all duration-500 group animate-float" style={{ animationDelay: '0.9s' }}>
            <h3 className="font-typewriter text-sm tracking-widest uppercase font-bold text-theme-text mb-6 group-hover:text-theme-pink transition-colors">Trending Finishes</h3>
            <div className="relative h-64 w-full mb-6 flex items-center justify-center">
              <div className="absolute left-2 top-2 w-24 h-36 rounded-full overflow-hidden shadow-lg group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 z-10 border-4 border-white">
                <img src="/images/custom_matte_1781638920068.png" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-0 bottom-2 w-28 h-28 rounded-full overflow-hidden shadow-lg group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-110 transition-all duration-500 z-30 border-4 border-white">
                <img src="/images/custom_jelly_1781638944659.png" className="w-full h-full object-cover" />
              </div>
              <div className="absolute w-36 h-56 rounded-t-full rounded-b-xl overflow-hidden shadow-2xl group-hover:-translate-y-4 transition-all duration-500 z-20 border-4 border-white">
                <img src="/images/custom_3d_1781638955619.png" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-xs font-bold text-theme-pink uppercase tracking-widest group-hover:underline mt-auto">Shop Collection &rarr;</span>
          </Link>

        </div>
      </section>

      {/* 3. Welcome Banner */}
      <div className="px-6">
        <section className="w-full max-w-screen-2xl mx-auto rounded-[3rem] bg-[#ffa6c9] text-white py-16 mb-16 px-6 text-center shadow-lg animate-float" style={{ animationDelay: '1.2s' }}>
          <h2 className="font-typewriter text-3xl font-bold tracking-widest uppercase mb-4">Welcome to our store</h2>
          <p className="text-sm max-w-2xl mx-auto opacity-90">Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.</p>
        </section>
      </div>

      {/* Themed Nails Gallery - Infinite Scrolling Marquee */}
      <section className="max-w-screen-2xl mx-auto px-6 mb-20 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="font-typewriter text-2xl font-bold tracking-widest uppercase text-theme-text mb-2">Themed Nails</h2>
          <p className="text-sm text-theme-text/70">Explore our expertly curated design themes.</p>
        </div>
        
        <div className="flex gap-4 group">
          <div className="flex gap-4 min-w-full animate-scroll group-hover:pause-on-hover shrink-0">
            {[
              { title: "Bridal Elegance", img: "/images/themed_bridal_1781638833380.png" },
              { title: "Midnight Galaxy", img: "/images/themed_galaxy_1781638853617.png" },
              { title: "Neon Summer", img: "/images/themed_neon_1781638866407.png" },
              { title: "Vintage Floral", img: "/images/themed_floral_1781638877488.png" },
              { title: "Minimalist Chic", img: "/images/themed_minimalist_1781638889548.png" }
            ].map((theme, i) => (
              <div key={i} className="flex flex-col items-center shrink-0 w-48 md:w-64 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="aspect-square w-full rounded-3xl bg-theme-gray mb-3 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img src={theme.img} alt={theme.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-center bg-white px-4 py-2 rounded-full shadow-sm -mt-6 relative z-10">{theme.title}</h4>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite scroll */}
          <div className="flex gap-4 min-w-full animate-scroll group-hover:pause-on-hover shrink-0" aria-hidden="true">
            {[
              { title: "Bridal Elegance", img: "/images/themed_bridal_1781638833380.png" },
              { title: "Midnight Galaxy", img: "/images/themed_galaxy_1781638853617.png" },
              { title: "Neon Summer", img: "/images/themed_neon_1781638866407.png" },
              { title: "Vintage Floral", img: "/images/themed_floral_1781638877488.png" },
              { title: "Minimalist Chic", img: "/images/themed_minimalist_1781638889548.png" }
            ].map((theme, i) => (
              <div key={i} className="flex flex-col items-center shrink-0 w-48 md:w-64 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="aspect-square w-full rounded-3xl bg-theme-gray mb-3 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img src={theme.img} alt={theme.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-center bg-white px-4 py-2 rounded-full shadow-sm -mt-6 relative z-10">{theme.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Nails & Effects - Horizontal Sliding Carousel */}
      <section className="w-full bg-theme-gray py-16 mb-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-typewriter text-2xl font-bold tracking-widest uppercase text-theme-text mb-2">Custom Effects</h2>
            <p className="text-sm text-theme-text/70">Swipe to explore premium finishes tailored just for you.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { title: "Chrome Metallic", img: "/images/custom_chrome_1781638907788.png" },
              { title: "Velvet Matte", img: "/images/custom_matte_1781638920068.png" },
              { title: "Holographic", img: "/images/custom_holographic_1781638933536.png" },
              { title: "Jelly Finish", img: "/images/custom_jelly_1781638944659.png" },
              { title: "3D Gemstones", img: "/images/custom_3d_1781638955619.png" }
            ].map((effect, i) => (
              <div key={i} className="flex flex-col items-center shrink-0 w-[240px] md:w-[280px] snap-center animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                <div className="aspect-[3/4] w-full bg-white p-3 shadow-xl mb-4 group overflow-hidden rounded-[2rem]">
                  <img src={effect.img} alt={effect.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-typewriter text-sm font-bold uppercase tracking-wider text-center bg-white px-6 py-2 rounded-full -mt-10 relative z-10 shadow-lg text-theme-pink">{effect.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. New Arrivals Grid */}
      <section className="max-w-screen-xl mx-auto px-6">
        <h2 className="font-typewriter text-2xl font-bold tracking-widest uppercase text-theme-text mb-8">New Arrivals</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 mt-12">
          {[1, 2, 3, 4].map((item, index) => (
            <div 
              key={item} 
              className="flex flex-col group cursor-pointer animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square w-full bg-theme-gray mb-4 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-300 rounded-[2rem] p-2 bg-white">
                <img src={`https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2787&auto=format&fit=crop`} alt={`Product ${item}`} className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h4 className="font-typewriter text-sm font-bold mb-1 group-hover:text-theme-pink transition-colors">Product {item}</h4>
              <p className="text-sm text-theme-text font-body">₹5520.00</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/shop" className="bg-theme-pink rounded-full shadow-lg text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-theme-pink-light transition-colors animate-float">
            View All
          </Link>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <div className="px-6">
        <section id="booking" className="max-w-screen-xl mx-auto mt-32 mb-20 scroll-mt-24 transition-all duration-1000 bg-white p-8 md:p-12 shadow-2xl rounded-[3rem] animate-float border border-pink-50 target:bg-theme-pink/5 target:ring-4 target:ring-theme-pink/20" style={{ animationDelay: '1s' }}>
          <div className="text-center mb-10">
            <h2 className="font-typewriter text-3xl font-bold tracking-widest uppercase text-theme-pink mb-2">Book Your Visit</h2>
            <p className="text-sm text-theme-text/70">Reserve a time for your perfect manicure or custom nail art.</p>
          </div>
          <div className="target-pulse-container">
            <AppointmentBooking />
          </div>
        </section>
      </div>

    </main>
  )
}
