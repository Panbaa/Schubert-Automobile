import './Home.css'
import ScrollingGallery from '../../components/ScrollingGallery/ScrollingGallery'

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
            Bei uns finden Sie nicht nur eine große Auswahl an hochwertigen Gebrauchtwagen, 
            sondern auch einen erstklassigen Service, der keine Wünsche offen lässt. 
            Ob Sie ein Auto kaufen, verkaufen oder Ihr Fahrzeug einer professionellen 
            Reinigung unterziehen möchten – wir sind für Sie da!
          </p>
        </section>

        {/* Services Sections */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Professionelle Reinigung</h2>
          <p className='text-zinc-300 mb-6'>
            Unser erfahrenes Reinigungspersonal berät Sie gern in Ihrem Anliegen 
            und findet mit Ihnen zusammen die beste Lösung.
          </p>
          <div className="mb-6">
            <ScrollingGallery 
              images={[
                "./Autositz.png", 
                "./RotesAuto.png", 
                "./Kofferraum.png", 
                "./WeisesAutoHinten.png", 
                "./Autotuer.png", 
                "./WeisesAutoVorne.png"
              ]} 
            />
          </div>
          <p className='text-zinc-300'>
            Sehen Sie sich auf unserer{' '}
            <a 
              href="/#/Reinigung" 
              className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
            >
              Reinigungs
            </a>
            -Seite um, um mehr über unser umfangreiches Angebot an Reinigungen zu erfahren.
          </p>
        </section>

        {/* Vehicle Trading Section */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>An- und Verkauf von Fahrzeugen</h2>
          <p className='text-zinc-300 mb-6'>
            Bei uns können Sie einfach und unkompliziert hochwertige Neu- oder Gebrauchtwagen 
            kaufen oder Ihr eigenes Fahrzeug bewerten lassen und verkaufen – ganz ohne 
            versteckte Kosten. Schnell, transparent und ohne großen Aufwand!
          </p>
          <p className='text-zinc-300'>
            Schauen Sie sich unser aktuelles Fahrzeugangebot auf unserer{' '}
            <a 
              href="/#/Verkauf" 
              className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
            >
              Verkaufsseite
            </a>
            {' '}an oder erfahren Sie auf unserer{' '}
            <a 
              href="/#/Ankauf" 
              className='text-blue-400 hover:text-blue-300 transition-colors duration-300'
            >
              Ankaufsseite
            </a>
            {' '}alles, was Sie wissen müssen, wenn Sie Ihr Auto an uns verkaufen möchten.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home