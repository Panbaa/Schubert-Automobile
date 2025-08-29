import './Home.css';
import MobileDECars from '../../components/MobileDECars/MobileDECars';
import { HandCoins, Check, Car, Phone, Mail, MapPin, Clock, Scale, Building2, User, FileText } from 'lucide-react';

function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24'>
      {/* Hero Section */}
      <div className='w-full flex justify-center mb-16' id="hero">
        <img
          src="./SA-Logo-Transparent.png"
          alt="Logo"
          className="w-80 h-auto filter drop-shadow-lg"
        />
      </div>

      {/* Welcome Section */}
      <section className="text-center" id="home">
        <h1 className='text-3xl font-bold text-white mb-6'>Willkommen bei Schubert Automobile</h1>
        <p className='text-lg text-zinc-300 max-w-3xl mx-auto'>
          Bei uns finden Sie eine große Auswahl an hochwertigen Gebrauchtwagen
          und einen erstklassigen Service, der keine Wünsche offen lässt.
          Ob Sie ein Auto kaufen oder verkaufen möchten – wir sind für Sie da!
        </p>
      </section>

      {/* Fahrzeugangebot Section */}
      <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm" id="verkauf">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
            <Car size={30} className="text-blue-400" />
          </div>
          <h2 className='text-2xl font-bold text-white mb-4'>Unsere Fahrzeuge</h2>
          <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
            Entdecken Sie unser aktuelles Angebot an hochwertigen Fahrzeugen.
            Jedes Fahrzeug wurde sorgfältig geprüft und aufbereitet.
          </p>
        </div>
        <MobileDECars />
      </section>

      {/* Fahrzeugankauf Section */}
      <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm" id="ankauf">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
            <HandCoins size={30} className="text-blue-400" />
          </div>
          <h2 className='text-2xl font-bold text-white mb-4'>Fahrzeugankauf</h2>
          <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
            Wenn Sie Ihr Auto verkaufen möchten oder eine faire Einschätzung über den
            aktuellen Wert Ihres Autos haben möchten, dann sind Sie bei uns genau richtig!
          </p>
        </div>
        <div className="space-y-12">
          {/* Value Assessment Section */}
          <section>
            <h3 className='text-xl font-semibold text-white mb-4'>Einschätzung des Wertes Ihres Fahrzeugs</h3>
            <ul className='space-y-6'>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                  <Check size={16} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Gründliche Fahrzeugbewertung</h4>
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
                  <h4 className="text-white font-semibold mb-2">Marktbasierte Analyse</h4>
                  <p className="text-zinc-300">
                    Durch unsere umfassende Marktkenntnis können wir Ihnen eine realistische
                    und faire Einschätzung geben.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                  <Check size={16} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Schneller und unkomplizierter Prozess</h4>
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
                  <h4 className="text-white font-semibold mb-2">Faire Preise</h4>
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
                  <h4 className="text-white font-semibold mb-2">Keine versteckten Kosten</h4>
                  <p className="text-zinc-300">
                    Unser Service ist transparent und für Sie völlig kostenlos.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm" id="kontakt">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
            <Phone size={30} className="text-blue-400" />
          </div>
          <h2 className='text-2xl font-bold text-white mb-4'>Kontakt</h2>
          <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
            Willkommen im Kontaktbereich. Sowohl für private als auch geschäftliche Anliegen
            stehen wir Ihnen telefonisch oder per E-Mail zur Verfügung.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Direkte Kontaktaufnahme</h3>
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
            <h3 className="text-xl font-semibold text-white mb-4">Vor Ort besuchen</h3>
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
          <h3 className="text-xl font-semibold text-white mb-4">Anfahrt</h3>
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
      </section>

      {/* Impressum Section */}
      <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm" id="impressum">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
            <Scale size={30} className="text-blue-400" />
          </div>
          <h2 className='text-2xl font-bold text-white mb-4'>Impressum</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Building2 size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Unternehmen</h3>
            </div>
            <div className="space-y-2 text-zinc-300">
              <p className="font-medium text-white">Schubert Automobile</p>
              <p>Liebigstraße 7, 24145 Kiel</p>
              <p>
                <a
                  href="mailto:info@schuberts-automobile.de"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  info@schuberts-automobile.de
                </a>
              </p>
            </div>
          </div>

          {/* Management */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <User size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Vertreten durch</h3>
            </div>
            <div className="space-y-2 text-zinc-300">
              <p>Geschäftsführer: Juliano Schubert</p>
            </div>
          </div>

          {/* Tax Info */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 space-y-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <FileText size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Umsatzsteuer-ID</h3>
            </div>
            <div className="space-y-2 text-zinc-300">
              <p>DE-370427982</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;