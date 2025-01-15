import { Sparkles } from 'lucide-react'
import './Reinigung.css'
import ScrollingGallery from '../../components/ScrollingGallery/ScrollingGallery'

function Reinigung() {
  return (
    <div className='flex-grow p-4 lg:justify-center lg:flex'>
      <div id='bodyWrapper' className='space-y-5'>
        <h1 className='text-center mt-3 text-2xl justify-center items-center flex'><Sparkles size={30} /><span className='ms-2'>Reinigung</span></h1>
        <div>
          Bei uns können Sie mit Ihrem Auto eine Vielzahl von Reinigungen durchlaufen! Unser erfahrenes Reinigungspersonal behandelt jedes Auto mit größter Sorgfalt und Genauigkeit.
        </div>
        <hr className='border-gray-600' />
        <h2 className='text-xl'>Polsterreinigung</h2>
        <ScrollingGallery images={["src\\assets\\Vorher-Nachher\\Autositz.png"]} />
        <p>Bei unserer professionellen Polsterreinigung setzen wir auf eine gründliche und effektive Methode, um Ihre Polster wieder strahlen zu lassen.
          Durch sorgfältiges Einschamponieren lösen wir selbst tiefsitzenden Schmutz und hartnäckige Verunreinigungen.
          Anschließend werden die Rückstände mit unseren leistungsstarken Waschsaugern restlos entfernt.
          Das Ergebnis: hygienisch saubere und erfrischte Polster, die wieder wie neu aussehen und sich angenehm anfühlen.
          Vertrauen Sie auf unsere Expertise für eine porentiefe Reinigung!</p>
        <hr className='border-gray-600' />
        <h2 className='text-xl'>Innenraumreinigung</h2>
        <ScrollingGallery images={["src\\assets\\Vorher-Nachher\\Kofferraum.png", "src\\assets\\Vorher-Nachher\\Autotuer.png"]} />
        <p>Neben unserer professionellen Polsterreinigung bieten wir auch eine umfassende Innenraumreinigung für Ihr Fahrzeug an.
          Dabei kümmern wir uns um alle Bereiche, um den Innenraum wieder in Bestform zu bringen.
          Ob Türen, Kunststoffe, Kofferraum, Fußraum oder der Dachhimmel – wir reinigen und pflegen jedes Detail gründlich und schonend.
          Mit modernsten Methoden und hochwertigen Reinigungsmitteln entfernen wir Staub, Flecken und Schmutz, sodass Ihr Auto nicht nur sauber, sondern auch wie neu wirkt.
          Für ein frisches und gepflegtes Fahrerlebnis – verlassen Sie sich auf unsere Expertise!</p>
        <hr className='border-gray-600' />
        <h2 className='text-xl'>Außenreinigung</h2>
        <ScrollingGallery images={["src\\assets\\Vorher-Nachher\\RotesAuto.png", "src\\assets\\Vorher-Nachher\\WeisesAutoHinten.png", "src\\assets\\Vorher-Nachher\\WeisesAutoVorne.png"]} />
        <p>Bei unserer Außenreinigung legen wir größten Wert auf Sorgfalt und Detailgenauigkeit, damit Ihr Fahrzeug in neuem Glanz erstrahlt.
          Wir kümmern uns umfassend um die Reinigung des gesamten äußeren Bereichs, von der Lackpflege bis hin zur gründlichen Reinigung der Felgen.
          Zusätzlich bieten wir professionelle Polierungen an, um den Lack zu schützen und wieder zum Strahlen zu bringen.
          Auf Wunsch entfernen wir auch fachgerecht alle Folien oder Beschriftungen von Ihrem Fahrzeug, ohne Rückstände zu hinterlassen.
          Mit unserer Außenreinigung wird Ihr Auto nicht nur sauber, sondern auch perfekt gepflegt – bis ins kleinste Detail! Vertrauen Sie auf unsere Expertise für einen makellosen Auftritt.</p>
      </div>
    </div>
  )
}

export default Reinigung