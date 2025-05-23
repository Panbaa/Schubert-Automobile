import { Car } from 'lucide-react'
import './Verkauf.css'
import MobileDECars from '../../components/MobileDECars/MobileDECars'

function Verkauf() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
          <Car size={30} className="text-blue-400" />
        </div>
        <h1 className='text-3xl font-bold text-white mb-4'>Unsere Fahrzeuge</h1>
        <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
          Entdecken Sie unser aktuelles Angebot an hochwertigen Fahrzeugen. 
          Jedes Fahrzeug wurde sorgfältig geprüft und aufbereitet.
        </p>
      </div>

      {/* Vehicle Listings */}
      <div className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
        <MobileDECars />
      </div>
    </div>
  )
}

export default Verkauf