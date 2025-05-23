import { FileQuestion, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import './SeiteNichtGefunden.css'

const SeiteNichtGefunden = () => {
  const navigate = useNavigate();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center justify-center p-6 mb-6 rounded-full bg-zinc-800">
          <FileQuestion size={48} className="text-blue-400" />
        </div>
        
        <h1 className='text-4xl font-bold text-white mb-4'>404 - Seite nicht gefunden</h1>
        
        <p className='text-lg text-zinc-300 max-w-2xl mx-auto mb-8'>
          Die aufgerufene Seite konnte leider nicht gefunden werden. 
          Möglicherweise wurde sie verschoben oder gelöscht.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <Home size={20} />
          Zurück zur Startseite
        </button>
      </div>
    </div>
  )
}

export default SeiteNichtGefunden
