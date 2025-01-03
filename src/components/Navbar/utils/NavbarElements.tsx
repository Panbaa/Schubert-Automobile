import { Phone } from "lucide-react"
import { NavbarElement } from "../../../lib/types"

const NavbarElements: NavbarElement[] = [
    {
        type: "single",
        key: "Home",
        name: "Home",
    },
    {
        type: "single",
        key: "Reinigung",
        name: "Reinigung",
    },
    {
        type: "single",
        key: "Verkauf",
        name: "Verkauf",
    },
    {
        type: "single",
        key: "Ankauf",
        name: "Ankauf",
    },
    {
        type: "single",
        key: "Kontakt",
        name: "Kontakt",
        icon: <Phone size={"16px"} />
    },
]
  
  export default NavbarElements
