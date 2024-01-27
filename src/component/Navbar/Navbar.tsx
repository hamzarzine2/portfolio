import './Navbar.css'

export default function Navbar() {
    return (
        <div className='container'>
            <ul className='navbar'>
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À propos</a></li>
            </ul>
        </div>
    )
}
