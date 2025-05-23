import { HandCoins, Check } from 'lucide-react'
import './Ankauf.css'

function Ankauf() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
          <HandCoins size={30} className="text-blue-400" />
        </div>
        <h1 className='text-3xl font-bold text-white mb-4'>Fahrzeugankauf</h1>
        <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
          Wenn Sie Ihr Auto verkaufen möchten oder eine faire Einschätzung über den 
          aktuellen Wert Ihres Autos haben möchten, dann sind Sie bei uns genau richtig!
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Value Assessment Section */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Einschätzung des Wertes Ihres Fahrzeugs</h2>
          <p className='text-zinc-300 mb-6'>
            Sie fragen sich, wie viel Ihr Fahrzeug aktuell wert ist? 
            Unsere Experten helfen Ihnen dabei!
          </p>
          <ul className='space-y-6'>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                <Check size={16} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Gründliche Fahrzeugbewertung</h3>
                <p className="text-zinc-300">
                  Wir prüfen den Zustand, die Ausstattung und alle relevanten Faktoren Ihres Fahrzeugs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                <Check size={16} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Marktbasierte Analyse</h3>
                <p className="text-zinc-300">
                  Durch unsere umfassende Marktkenntnis können wir Ihnen eine realistische 
                  und faire Einschätzung geben.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Process Section */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Unser Ankaufsprozess</h2>
          <ul className='space-y-6'>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                <Check size={16} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Schneller und unkomplizierter Prozess</h3>
                <p className="text-zinc-300">
                  Vom ersten Kontakt bis zur Auszahlung – alles geht zügig und reibungslos.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                <Check size={16} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Faire Preise</h3>
                <p className="text-zinc-300">
                  Dank unserer umfassenden Marktkenntnis und professionellen Bewertung 
                  erhalten Sie ein Angebot, das sich sehen lassen kann.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                <Check size={16} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Keine versteckten Kosten</h3>
                <p className="text-zinc-300">
                  Unser Service ist transparent und für Sie völlig kostenlos.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Kontaktieren Sie uns</h2>
          <p className='text-zinc-300'>
            Sie haben Fragen oder möchten uns Ihr Anliegen direkt mitteilen? 
            Kein Problem – wir sind für Sie da! Alle nötigen Informationen zur 
            Kontaktaufnahme finden Sie bequem{' '}
            <a 
              href="/#/Kontakt" 
              className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
            >
              hier
            </a>
            {' '}auf unserer Kontaktseite.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Ankauf