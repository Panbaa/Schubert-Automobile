import { Phone, House, Car, HandCoins } from "lucide-react"
import { NavbarElement } from "../../../lib/types"

const NavbarElements: NavbarElement[] = [    {
        type: "single",
        key: "Home",
        name: "Home",
        icon: <House size={16} />
    },
    {
        type: "single",
        key: "Verkauf",
        name: "Verkauf",
        icon: <Car size={16} />
    },
    {
        type: "single",
        key: "Ankauf",
        name: "Ankauf",
        icon: <HandCoins size={16} />
    },
    {
        type: "single",
        key: "Kontakt",
        name: "Kontakt",
        icon: <Phone size={16} />
    },
]
  
  export default NavbarElements
