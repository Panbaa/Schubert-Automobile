import './Home.css'

function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Hero Section */}
      <div className='w-full flex justify-center mb-16'>
        <img 
          src="./SA-Logo-Transparent.png" 
          alt="Logo" 
          className="w-80 h-auto filter drop-shadow-lg"
        />
      </div>

      {/* Welcome Section */}
      <div className='space-y-16'>
        <section className="text-center">
          <h1 className='text-3xl font-bold text-white mb-6'>Willkommen bei Schubert Automobile</h1>
          <p className='text-lg text-zinc-300 max-w-3xl mx-auto'>
            Bei uns finden Sie eine große Auswahl an hochwertigen Gebrauchtwagen 
            und einen erstklassigen Service, der keine Wünsche offen lässt. 
            Ob Sie ein Auto kaufen oder verkaufen möchten – wir sind für Sie da!
          </p>
        </section>

        {/* Vehicle Trading Section */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>An- und Verkauf von Fahrzeugen</h2>
          <p className='text-zinc-300 mb-6'>
            Bei uns können Sie einfach und unkompliziert hochwertige Gebrauchtwagen 
            kaufen oder Ihr eigenes Fahrzeug bewerten lassen und verkaufen – ganz ohne 
            versteckte Kosten. Schnell, transparent und ohne großen Aufwand!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Unser Fahrzeugangebot</h3>
              <p className="text-zinc-300 mb-4">
                Entdecken Sie unsere Auswahl an sorgfältig ausgewählten Fahrzeugen.
                Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.
              </p>
              <a 
                href="/#/Verkauf" 
                className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
              >
                Zum Fahrzeugangebot →
              </a>
            </div>
            <div className="bg-zinc-800/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Ihr Fahrzeug verkaufen</h3>
              <p className="text-zinc-300 mb-4">
                Profitieren Sie von unserer Expertise und verkaufen Sie Ihr 
                Fahrzeug schnell und unkompliziert zu fairen Konditionen.
              </p>
              <a 
                href="/#/Ankauf" 
                className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
              >
                Zum Ankauf →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home