import './Navbar.css'
import { NavbarElement } from '../../lib/types'
import Desktop from "./Desktop/Desktop"
import Phone from "./Phone/Phone"

export interface INavbarProps {
  elements: NavbarElement[];
}

const Navbar = ({ elements }: INavbarProps) => {
  return (
    <div className="w-full h-16 border-b border-gray-600 bg-gray-800">
      <Desktop elements={elements} leftSideIcon={<img src='./SA-Logo-Transparent.png' className='rounded'/>} />
      <Phone elements={elements} leftSideIcon={<img src='./SA-Logo-Transparent.png' className='rounded'/>} />
    </div>
  )
}

export default Navbar

