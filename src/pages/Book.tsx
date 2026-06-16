import AppointmentBooking from '../components/booking/AppointmentBooking'

export default function Book() {
  return (
    <main className="w-full bg-theme-bg min-h-screen pt-16 pb-20 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="font-typewriter text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4 text-theme-pink">Book an Appointment</h1>
          <p className="text-sm font-body text-theme-text/70 max-w-md mx-auto">
            Reserve a time with our expert nail technicians for your perfect manicure, pedicure, or custom nail art session.
          </p>
        </div>
        
        <div className="w-full">
          <AppointmentBooking />
        </div>
      </div>
    </main>
  )
}
