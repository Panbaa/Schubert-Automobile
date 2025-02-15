import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import './Kontakt.css'

function Kontakt() {
  return (
    <div id='bodyWrapper' className='space-y-5'>
      <h1 className='text-center mt-3 text-2xl justify-center items-center flex'><Phone size={30} /><span className='ms-2'>Kontakt</span></h1>
      <div>
        <p>Willkommen im Kontaktbereich.</p>
        <br />
        <p>Sowohl für private als auch geschäftliche Anliegen stehen wir Ihnen telefonisch oder per E-Mail zur Verfügung:</p>
      </div>
      <hr className='border-gray-600' />
      <p>Sie erreichen uns unter:</p>
      <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
        <li className='items-center flex'>
          <Phone size={16} />
          <a className='ms-3' href="tel:+4917682050343">0176 82050343</a>
        </li>
        <li className='items-center flex'>
          <Mail size={16} />
          <a className='ms-3' href="mailto:">info@schuberts-automobile.de</a>
        </li>
      </ul>
      <hr className='border-gray-600' />
      <h2 className='text-xl'>Lieber persönlich?</h2>
      <p>Sie können uns während der Öffnungszeiten auch persönlich an unserem Standort besuchen:</p>
      <ul className='max-w-md ms-7 space-y-6 list-none list-inside'>
        <li className='items-center flex'>
          <MapPin size={16} />
          <span className='ms-3'>Liebigstraße 7, 24145 Kiel</span>
        </li>
        <li className='items-start flex'>
          <Clock size={16} className='mt-1' />
          <div className='ms-3 me-10 grid grid-cols-2 w-full gap-3'>
            <span>Montag-Samstag:</span><span className='text-end'>09:00 - 18:00</span>
            <span>Sonntag:</span><span className='text-end'>Geschlossen</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Kontakt