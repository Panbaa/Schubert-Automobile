import './Footer.css'


const Footer = () => {
  return (
    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-md w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Schubert Automobile</span>
      <ul className='list-none flex space-x-6'>
        <li>
          <a 
            href="/#/Impressum" 
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Impressum
          </a>
        </li>
        <li>
          <a 
            href="/#/Kontakt" 
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer