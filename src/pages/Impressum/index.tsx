import './Impressum.css'
import { Scale } from 'lucide-react'

function Impressum() {
  return (
    <div id='bodyWrapper' className='space-y-5'>
      <h1 className='text-center mt-3 text-2xl justify-center items-center flex'><Scale size={30} /><span className='ms-2'>Impressum</span></h1>
      <hr />
      <div>
        <p className='text-xl'>Unternehmen</p>
        <br />
        <p>Schubert Automobile</p>
        <p>Liebigstraße 7, 24145 Kiel</p>
        <p>info@schuberts-automobile.de</p>

        <br />
        <p className='text-xl'>Vertreten durch</p>
        <br />
        <p>Geschäftsführer: Juliano Schubert</p>

        <br />
        <p className='text-xl'>Umsatzsteuer-ID</p>
        <br />
        <p>DE-370427982</p>
      </div>
    </div>
  )
}

export default Impressum