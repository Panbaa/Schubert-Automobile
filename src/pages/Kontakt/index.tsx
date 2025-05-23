import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import './Kontakt.css'

function Kontakt() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
          <Phone size={30} className="text-blue-400" />
        </div>
        <h1 className='text-3xl font-bold text-white mb-4'>Kontakt</h1>
        <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
          Willkommen im Kontaktbereich. Sowohl für private als auch geschäftliche Anliegen
          stehen wir Ihnen telefonisch oder per E-Mail zur Verfügung.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Methods */}
        <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white mb-4">Direkte Kontaktaufnahme</h2>
          <ul className='space-y-4'>
            <li className='flex items-center gap-4 group'>
              <div className="p-3 rounded-lg bg-zinc-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Phone size={20} className="text-blue-400" />
              </div>
              <a
                href="tel:+4917682050343"
                className='text-zinc-300 hover:text-white transition-colors duration-300'
              >
                0176 82050343
              </a>
            </li>
            <li className='flex items-center gap-4 group'>
              <div className="p-3 rounded-lg bg-zinc-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Mail size={20} className="text-blue-400" />
              </div>
              <a
                href="mailto:info@schuberts-automobile.de"
                className='text-zinc-300 hover:text-white transition-colors duration-300'
              >
                info@schuberts-automobile.de
              </a>
            </li>
          </ul>
        </div>

        {/* Address & Hours */}
        <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white mb-4">Vor Ort besuchen</h2>
          <div className='space-y-4'>
            <div className='flex items-start gap-4 group'>
              <div className="p-3 rounded-lg bg-zinc-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                <MapPin size={20} className="text-blue-400" />
              </div>
              <p className='text-zinc-300'>Liebigstraße 7, 24145 Kiel</p>
            </div>
            <div className='flex items-start gap-4 group'>
              <div className="p-3 rounded-lg bg-zinc-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Clock size={20} className="text-blue-400" />
              </div>
              <div className='grid grid-cols-2 gap-2 text-zinc-300 w-full'>
                <span>Montag-Samstag:</span>
                <span className='text-end'>09:00 - 18:00</span>
                <span>Sonntag:</span>
                <span className='text-end font-medium text-red-400'>Geschlossen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm">
        <h2 className="text-xl font-semibold text-white mb-4">Anfahrt</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.030567989248!2d10.136693!3d54.313595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7561d5b903b05%3A0x60c0148f37332cc0!2sLiebigstra%C3%9Fe%207%2C%2024145%20Kiel!5e0!3m2!1sde!2sde!4v1625436000000!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort von Schubert Automobile"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Kontakt