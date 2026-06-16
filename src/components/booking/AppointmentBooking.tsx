import { useState } from 'react'
import { Calendar, Scissors, Sparkles, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  { id: 'manicure', name: 'Signature Manicure', duration: '45 min', price: '₹3600', icon: <Scissors size={20} /> },
  { id: 'pedicure', name: 'Spa Pedicure', duration: '60 min', price: '₹5200', icon: <Sparkles size={20} /> },
  { id: 'gel', name: 'Gel Extensions', duration: '90 min', price: '₹6800', icon: <Sparkles size={20} /> },
  { id: 'art', name: 'Custom Nail Art', duration: '30 min', price: '+₹2000', icon: <Scissors size={20} /> },
]

const TIME_SLOTS = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM']

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white border border-theme-pink/30 p-12 text-center shadow-sm">
        <div className="flex justify-center mb-6 text-theme-pink">
          <CheckCircle2 size={64} strokeWidth={1} />
        </div>
        <h3 className="font-typewriter text-3xl font-bold mb-4 uppercase text-theme-text">Booking Confirmed!</h3>
        <p className="font-body text-theme-text mb-8">
          Thank you for booking with Alpha Nail Salon. We have reserved your {SERVICES.find(s => s.id === selectedService)?.name} on {selectedDate} at {selectedTime}.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); setSelectedService(''); setSelectedDate(''); setSelectedTime(''); }}
          className="bg-theme-pink text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-theme-pink-light transition-colors"
        >
          Book Another
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar Progress */}
      <div className="w-full md:w-1/3 bg-theme-pink-light/20 p-8 flex flex-col">
        <h3 className="font-typewriter text-xl font-bold mb-8 uppercase text-theme-text">Book Appointment</h3>
        <div className="space-y-6 font-body text-sm">
          <div className={`flex items-center gap-3 ${step >= 1 ? 'text-theme-pink font-bold' : 'text-theme-text/50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-theme-pink' : 'border-theme-text/20'}`}>1</div>
            <span>Select Service</span>
          </div>
          <div className={`flex items-center gap-3 ${step >= 2 ? 'text-theme-pink font-bold' : 'text-theme-text/50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-theme-pink' : 'border-theme-text/20'}`}>2</div>
            <span>Date & Time</span>
          </div>
          <div className={`flex items-center gap-3 ${step >= 3 ? 'text-theme-pink font-bold' : 'text-theme-text/50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-theme-pink' : 'border-theme-text/20'}`}>3</div>
            <span>Your Details</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3 p-8">
        
        {/* Step 1: Services */}
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h4 className="font-typewriter text-lg font-bold mb-6">Choose a Treatment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex flex-col items-start p-4 border transition-all text-left ${selectedService === service.id ? 'border-theme-pink bg-theme-pink/5' : 'border-gray-200 hover:border-theme-pink/50'}`}
                >
                  <div className="text-theme-pink mb-3">{service.icon}</div>
                  <span className="font-typewriter font-bold text-sm mb-1">{service.name}</span>
                  <div className="flex w-full justify-between text-xs text-theme-text/70 font-body">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                disabled={!selectedService}
                onClick={handleNext}
                className="bg-theme-pink text-white px-8 py-3 text-sm font-bold tracking-widest uppercase disabled:opacity-50 hover:bg-theme-pink-light transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h4 className="font-typewriter text-lg font-bold mb-6">Select Date & Time</h4>
            
            <div className="mb-6">
              <label className="block text-xs font-body uppercase tracking-widest text-theme-text/70 mb-2">Select Date</label>
              <div className="flex items-center border border-gray-200 px-4 py-3">
                <Calendar size={18} className="text-theme-pink mr-3" />
                <input 
                  type="date" 
                  className="w-full focus:outline-none font-body text-sm"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {selectedDate && (
              <div className="mb-8">
                <label className="block text-xs font-body uppercase tracking-widest text-theme-text/70 mb-3">Available Slots</label>
                <div className="grid grid-cols-3 gap-3">
                  {TIME_SLOTS.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 text-sm font-body border transition-colors ${selectedTime === time ? 'border-theme-pink bg-theme-pink text-white' : 'border-gray-200 hover:border-theme-pink text-theme-text'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button onClick={handleBack} className="text-theme-text text-sm font-bold uppercase tracking-widest hover:text-theme-pink transition-colors">Back</button>
              <button 
                disabled={!selectedDate || !selectedTime}
                onClick={handleNext}
                className="bg-theme-pink text-white px-8 py-3 text-sm font-bold tracking-widest uppercase disabled:opacity-50 hover:bg-theme-pink-light transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
            <h4 className="font-typewriter text-lg font-bold mb-6">Your Details</h4>
            
            <div className="space-y-4 font-body text-sm">
              <div>
                <input required type="text" placeholder="Full Name" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-theme-pink" />
              </div>
              <div>
                <input required type="email" placeholder="Email Address" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-theme-pink" />
              </div>
              <div>
                <input required type="tel" placeholder="Phone Number" className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-theme-pink" />
              </div>
              <div>
                <textarea placeholder="Special Requests (Optional)" rows={3} className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-theme-pink"></textarea>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button type="button" onClick={handleBack} className="text-theme-text text-sm font-bold uppercase tracking-widest hover:text-theme-pink transition-colors">Back</button>
              <button 
                type="submit"
                className="bg-theme-text text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-theme-pink transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  )
}
