import './Navbar.css'
import { NavbarElement } from '../../lib/types'
import Desktop from "./Desktop/Desktop"
import Phone from "./Phone/Phone"

export interface INavbarProps {
  elements: NavbarElement[];
}

const Navbar = ({ elements }: INavbarProps) => {
  return (
    <div id="navbar-wrapper" className="w-full h-16 border-b border-zinc-700/50 bg-zinc-900/90 backdrop-blur-md">
      <Desktop elements={elements} leftSideIcon={<img src='./SA-Logo-Transparent.png' className='rounded'/>} />
      <Phone elements={elements} leftSideIcon={<img src='./SA-Logo-Transparent.png' className='rounded'/>} />
    </div>
  )
}

export default Navbar

