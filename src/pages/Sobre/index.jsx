import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './sobre.module.css';

function Sobre() {
    const [titles, setTitles] = useState({});

    useEffect(() => {
        axios.get('/cruzeiro.json')
            .then(response => {
                setTitles(response.data.titulos);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <div className={styles.textos}>
                    <h2>A NOSSA HISTÓRIA</h2>
                    <span>
                        O clube foi fundado em 2 de Janeiro de 1921 a partir da comunidade italiana em Belo Horizonte, Minas Gerais, como Società Sportiva Palestra Italia. Seu escudo era verde e vermelho com detalhes em dourado, homenageando a Itália. Seu uniforme principal era na cor verde.

                        Em 1942, com a entrada do Brasil na 2ª Guerra Mundial, um decreto do governo federal proibiu o uso de termos e símbolos que remetessem aos países do Eixo. Desta forma, em 7 de Outubro de 1942, sob muita discussão dos conselheiros e diretores, foi decidido que o clube passaria a se chamar Cruzeiro Esporte Clube, adotando como símbolo a constelação do Cruzeiro do Sul.

                        Apesar da adoção da camisa principal na cor azul em relação velada à Squadra Azzurra (Seleção Italiana de Futebol), o nome e símbolos escolhidos destacam a forte relação do clube com o Brasil, já que a constelação Cruzeiro do Sul está presente nos maiores símbolos nacionais: Brasão da República, Hino Nacional e Bandeira Nacional.

                        Logo no ínicio, a disposição da constelação do Cruzeiro do Sul no escudo e na camisa do clube seguia a da Bandeira Nacional, regida atualmente pela Lei nº 8.421, de 11 de maio de 1992, que em seu artigo 3°, parágrafo 1°, diz que “As constelações que figuram na Bandeira Nacional correspondem ao aspecto do céu, na cidade do Rio de Janeiro, às 8 horas e 30 minutos do dia 15 de Novembro de 1989 (doze horas siderais) e devem ser consideradas como vistas por um observador  situado fora da esfera celeste.”

                        Por isso, as estrelas do primeiro escudo do Cruzeiro eram invertidas em relação a como se vê a partir da Terra.
                    </span>
                </div>
                <div className={styles.titulos}>
                    <h2>Títulos</h2>
                    <div className={styles.cardContainer}>
                        {Object.keys(titles).map((titleCategory, index) => (
                            <div key={index} className={styles.card}>
                                <h3>{titleCategory.replace('_', ' ')}</h3>
                                <p>{titles[titleCategory].join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;

