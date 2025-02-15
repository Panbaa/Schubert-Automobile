import './Footer.css'


const Footer = () => {
  return (
    <div className="px-4 border-y w-full h-12 border-gray-600 bg-gray-800 flex items-center justify-between bottom-0">
      <span>&copy; Schubert Automobile</span>
      <ul className='list-none flex space-x-2'>
        <li><a href="/#/Impressum">Impressum</a></li>
        <li><a href="/#/Kontakt">Kontakt</a></li>
      </ul>
    </div>
  )
}

export default Footer