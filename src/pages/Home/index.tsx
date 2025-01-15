import './Home.css'
import ScrollingGallery from '../../components/ScrollingGallery/ScrollingGallery'

function Home() {
  return (
    <div className='flex-grow p-4 lg:justify-center lg:flex'>
      <div id='bodyWrapper' className='lg:w-[100rem] space-y-5'>
        {/* Image as a Header for the Page */}
        <div className='w-full flex justify-center'>
          <img src="./SA-Logo-Transparent.png" alt="Logo" />
        </div>
        {/* Description of what we are */}
        <div className='space-y-5'>
          <hr className='border-gray-600' />
          <h2 className='text-xl text-center'>Willkommen bei Schubert Automobile</h2>
          <p>Bei uns finden Sie nicht nur eine große Auswahl an hochwertigen Neu- und Gebrauchtwagen, sondern auch einen erstklassigen Service, der keine Wünsche offen lässt.
            Ob Sie ein Auto kaufen, verkaufen oder Ihr Fahrzeug einer professionellen Reinigung unterziehen möchten – wir sind für Sie da!</p>
          <h2 className='text-xl'>Reinigung</h2>
          <p>Unser erfahrenes Reinigungspersonal berät Sie gern in Ihrem Anliegen und findet mit Ihnen zusammen, die beste Lösung.</p>
          <ScrollingGallery images={["src\\assets\\Vorher-Nachher\\Autositz.png", "src\\assets\\Vorher-Nachher\\RotesAuto.png", "src\\assets\\Vorher-Nachher\\Kofferraum.png", "src\\assets\\Vorher-Nachher\\WeisesAutoHinten.png", "src\\assets\\Vorher-Nachher\\Autotuer.png", "src\\assets\\Vorher-Nachher\\WeisesAutoVorne.png"]} />
          <p>Sehen Sie sich auf unsere <a className='underline' href="/Reinigung">Reinigungs</a>-Seite vorbei um mehr über unser umfangreiches Angebot an Reinigungen zu erfahren.</p>
          <h2 className='text-xl'>An- und Verkauf von Fahrzeugen</h2>
          <p>Bei uns können Sie einfach und unkompliziert hochwertige Neu- oder Gebrauchtwagen kaufen oder Ihr eigenes Fahrzeug bewerten lassen und verkaufen – ganz ohne versteckte Kosten. Schnell, transparent und ohne großen Aufwand!</p> 
          <p>Schauen Sie sich unser aktuelles Fahrzeugangebot auf unserer <a className='underline' href="/Verkauf">Verkaufsseite</a> an oder erfahren Sie auf unserer <a className='underline' href="/Ankauf">Ankaufsseite</a> alles, was Sie wissen müssen, wenn Sie Ihr Auto an uns verkaufen möchten.</p>
        </div>
      </div>
    </div>
  )
}

export default Home