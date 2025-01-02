import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div id="navbar-logo">
            <img src="/SA-Logo.png" alt="Logo" />
        </div>
        <div id="navbar-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Reinigung">Reinigung</a></li>
                <li><a href="/Verkauf">Verkauf</a></li>
                <li><a href="/Ankauf">Ankauf</a></li>
                <li><a href="/Kontakt">Kontakt</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

