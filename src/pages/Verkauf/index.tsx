import { Car } from 'lucide-react'
import './Verkauf.css'
import CarList from '../../components/MobileDECars'

function Verkauf() {
  return (
    <div id='bodyWrapper' className='space-y-5'>
      <h1 className='text-center mt-3 text-2xl justify-center items-center flex'><Car size={30} /><span className='ms-2'>Verkauf</span></h1>
      <hr />
      <CarList />
    </div>
  )
}

export default Verkauf