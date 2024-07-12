import styles from './home.module.css'
import { Link } from 'react-router-dom'
import img_home from './images/IMG_2999.png'

function Home() {
    return (
        <>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            SEJA BEM-VINDO AO SITE DO<br />
                            <span>CRUZEIRO ESPORTE CLUBE,</span> <br />
                            O MAIOR CLUBE DE MINAS GERAIS
                        </p>
                        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais sobre nossa história
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.img_home} src={img_home} alt="img" />
                    </figure>
                </section>
        </>
    )
}

export default Home
