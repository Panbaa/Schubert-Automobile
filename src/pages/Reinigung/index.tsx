import { Sparkles } from 'lucide-react'
import './Reinigung.css'
import ScrollingGallery from '../../components/ScrollingGallery/ScrollingGallery'

function Reinigung() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-zinc-800">
          <Sparkles size={30} className="text-blue-400" />
        </div>
        <h1 className='text-3xl font-bold text-white mb-4'>Professionelle Reinigung</h1>
        <p className='text-lg text-zinc-300 max-w-2xl mx-auto'>
          Bei uns können Sie mit Ihrem Auto eine Vielzahl von Reinigungen durchlaufen! 
          Unser erfahrenes Reinigungspersonal behandelt jedes Auto mit größter Sorgfalt und Genauigkeit.
        </p>
      </div>

      {/* Services Sections */}
      <div className="space-y-16">
        {/* Polster Reinigung */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Polsterreinigung</h2>
          <div className="mb-6">
            <ScrollingGallery images={["./Autositz.png"]} />
          </div>
          <p className='text-zinc-300 leading-relaxed'>
            Bei unserer professionellen Polsterreinigung setzen wir auf eine gründliche und 
            effektive Methode, um Ihre Polster wieder strahlen zu lassen. Durch sorgfältiges 
            Einschamponieren lösen wir selbst tiefsitzenden Schmutz und hartnäckige Verunreinigungen. 
            Anschließend werden die Rückstände mit unseren leistungsstarken Waschsaugern restlos entfernt. 
            Das Ergebnis: hygienisch saubere und erfrischte Polster, die wieder wie neu aussehen und 
            sich angenehm anfühlen. Vertrauen Sie auf unsere Expertise für eine porentiefe Reinigung!
          </p>
        </section>

        {/* Innenraum Reinigung */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Innenraumreinigung</h2>
          <div className="mb-6">
            <ScrollingGallery images={["./Kofferraum.png", "./Autotuer.png"]} />
          </div>
          <p className='text-zinc-300 leading-relaxed'>
            Neben unserer professionellen Polsterreinigung bieten wir auch eine umfassende 
            Innenraumreinigung für Ihr Fahrzeug an. Dabei reinigen wir nicht nur oberflächlich, 
            sondern kümmern uns um jedes Detail – von den Fußmatten bis zum Dachhimmel. 
            Mit unseren speziellen Reinigungsmitteln und professionellen Werkzeugen entfernen 
            wir auch hartnäckige Verschmutzungen und sorgen für einen frischen, sauberen Innenraum.
          </p>
        </section>

        {/* Außen Reinigung */}
        <section className="bg-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className='text-2xl font-bold text-white mb-6'>Außenreinigung</h2>
          <div className="mb-6">
            <ScrollingGallery images={["./WeisesAutoVorne.png", "./WeisesAutoHinten.png", "./RotesAuto.png"]} />
          </div>
          <p className='text-zinc-300 leading-relaxed'>
            Eine gründliche Außenreinigung ist essentiell für den Werterhalt Ihres Fahrzeugs. 
            Wir verwenden nur hochwertige Reinigungsmittel und arbeiten mit modernsten Methoden, 
            um Ihrem Auto wieder zu seinem ursprünglichen Glanz zu verhelfen. Von der 
            schonenden Vorwäsche über die Hauptwäsche bis hin zur Konservierung – wir achten 
            auf jedes Detail.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Reinigung