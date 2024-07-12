import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            
            <Link to="/">
                <span>CRUZEIRO ESPORTE CLUBE</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/elenco">Elenco</Link>
                <Link to="/musicas">Musicas</Link>
            </nav>
        </header>
    )    
}

export default Header
