import { HandCoins } from 'lucide-react'
import './Ankauf.css'

function Ankauf() {
  return (
    <div id='bodyWrapper' className='lg:w-[100rem] space-y-5'>
      <h1 className='text-center mt-3 text-2xl justify-center items-center flex'><HandCoins size={30} /><span className='ms-2'>Ankauf</span></h1>
      <div>
        Wenn Sie Ihr Auto verkaufen möchten, oder eine faire Einschätzung über den aktuellen Wert Ihres Autos haben möchten, dann sind Sie bei uns genau richtig!
      </div>
      <hr className='border-gray-600' />
      <h2 className='text-xl'>Ankauf Ihres Fahrzeugs</h2>
      <p>Sie möchten Ihr Fahrzeug verkaufen? Bei uns sind Sie an der richtigen Adresse!</p>
      <p>Wir garantieren Ihnen:</p>
      <ul className='max-w-md ms-7 space-y-4 list-disc list-inside'>
        <li><span className='font-bold'>Schnellen und unkomplizierten Prozess</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Vom ersten Kontakt bis zur Auszahlung – alles geht zügig und reibungslos.</li>
          </ul>
        </li>
        <li><span className='font-bold'>Faire Preise</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Dank unserer umfassenden Marktkenntnis und professionellen Bewertung erhalten Sie ein Angebot, das sich sehen lassen kann.</li>
          </ul>
        </li>
        <li><span className='font-bold'>Keine versteckten Kosten</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Unser Service ist transparent und für Sie völlig kostenlos.</li>
          </ul>
        </li>
      </ul>
      <hr className='border-gray-600' />
      <h2 className='text-xl'>Einschätzung des Wertes Ihres Fahrzeugs</h2>
      <p>Sie fragen sich, wie viel Ihr Fahrzeug aktuell wert ist? Unsere Experten helfen Ihnen dabei!</p>
      <ul className='max-w-md ms-7 space-y-4 list-disc list-inside'>
        <li><span className='font-bold'>Gründliche Fahrzeugbewertung</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Wir prüfen den Zustand, die Ausstattung und alle relevanten Faktoren Ihres Fahrzeugs.
            </li>
          </ul>
        </li>
        <li><span className='font-bold'>Marktbasierte Analyse</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Unsere Angebote basieren auf tagesaktuellen Marktwerten, sodass Sie sicher sein können, einen realistischen Preis zu erhalten.</li>
          </ul>
        </li>
        <li><span className='font-bold'>Unverbindlich und transparent</span>
          <ul className='max-w-md ms-7 space-y-1 list-none list-inside'>
            <li>Die Einschätzung ist für Sie unverbindlich – es liegt ganz bei Ihnen, ob Sie unser Angebot annehmen möchten.</li>
          </ul>
        </li>
      </ul>
      <hr className='border-gray-600' />
      <h2 className='text-xl'>Noch Fragen?</h2>
      <p>Sie haben Fragen oder möchten uns Ihr Anliegen direkt mitteilen? Kein Problem – wir sind für Sie da! Alle nötigen Informationen zur Kontaktaufnahme finden Sie bequem <a className='underline' href="/#/Kontakt">hier</a> auf unserer Kontaktseite.</p>
    </div>
  )
}

export default Ankauf