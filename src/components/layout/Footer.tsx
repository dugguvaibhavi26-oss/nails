export default function Footer() {
  return (
    <footer className="w-full bg-theme-gray py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 flex flex-col items-center">
          <span className="font-cursive text-4xl text-theme-pink leading-none">Alpha</span>
          <span className="font-typewriter text-[8px] tracking-widest text-theme-text uppercase mt-1">Nail Salon</span>
        </div>
        <div className="flex gap-6 text-xs text-theme-text font-body mb-8">
          <a href="#" className="hover:text-theme-pink">Facebook</a>
          <a href="#" className="hover:text-theme-pink">Instagram</a>
          <a href="#" className="hover:text-theme-pink">Twitter</a>
        </div>
        <p className="text-xs text-theme-text/50 font-body">&copy; {new Date().getFullYear()} Alpha Nail Salon. Powered by You.</p>
      </div>
    </footer>
  )
}
