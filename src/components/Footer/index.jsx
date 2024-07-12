import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <span class="nq-c-FooterTitle" data-selector="trigger">

                <span class="contato">
                    NOSSO CONTATO
                </span>

            </span>
            <br />
            <div class="nq-c-FooterLinks-contact" data-selector="collapse">
                <span>
                    <strong>
                        +55 31 4000-2161
                    </strong>
                    <strong>
                        socio5estrelas@cruzeiro.com.br
                    </strong>
                    <strong>
                        Contato disponível das 8h até as 18h.
                    </strong>
                    <br />
                    <strong id='direitos'>
                    © 2024 / Cruzeiro Esporte Clube - Karinne e Davi. Todos os Direitos Reservados
                    </strong>
                </span>
            </div>
        </footer>
    )
}

export default Footer
