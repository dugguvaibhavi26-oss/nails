import { useState } from 'react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="w-full bg-theme-bg min-h-screen text-theme-text font-body pb-20 pt-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white border border-gray-100 shadow-sm p-8">
          <h1 className="font-typewriter text-3xl font-bold tracking-widest uppercase mb-2 text-theme-pink">Get in Touch</h1>
          <p className="text-sm text-theme-text/70 mb-8">Send us a message and we'll get back to you as soon as possible.</p>
          
          {isSubmitted ? (
            <div className="bg-theme-pink/10 border border-theme-pink p-6 text-center">
              <h3 className="font-typewriter font-bold text-theme-pink mb-2">Message Sent!</h3>
              <p className="text-sm">Thank you for reaching out. We will reply to your email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Name</label>
                <input required type="text" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-theme-pink" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Email</label>
                <input required type="email" className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-theme-pink" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Message</label>
                <textarea required rows={5} className="w-full border border-gray-200 px-4 py-2 focus:outline-none focus:border-theme-pink"></textarea>
              </div>
              <button type="submit" className="bg-theme-pink text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-theme-pink-light transition-colors w-full mt-4">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="font-typewriter text-2xl font-bold tracking-widest uppercase mb-6">Helpline & Socials</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-typewriter font-bold text-lg text-theme-pink mb-1">Email Us</h3>
              <p className="text-sm">hello@alphanailsalon.com</p>
            </div>
            
            <div>
              <h3 className="font-typewriter font-bold text-lg text-theme-pink mb-1">Call Us</h3>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="font-typewriter font-bold text-lg text-theme-pink mb-1">Instagram</h3>
              <a href="#" className="text-sm hover:text-theme-pink transition-colors">@AlphaNailSalon</a>
            </div>

            <div>
              <h3 className="font-typewriter font-bold text-lg text-theme-pink mb-1">Visit Us</h3>
              <p className="text-sm">123 Beauty Lane, Suite 100<br />New York, NY 10001</p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-typewriter font-bold text-sm tracking-widest uppercase mb-2">Opening Hours</h3>
              <div className="grid grid-cols-2 max-w-xs text-sm text-theme-text/80 gap-y-2">
                <span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span>
                <span>Saturday:</span> <span>10:00 AM - 6:00 PM</span>
                <span>Sunday:</span> <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
