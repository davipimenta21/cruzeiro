import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import './elenco.module.css';

const Elenco = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/cruzeiro.json')
      .then(response => {
        setPlayers(response.data.jogadores);
      })
      .catch(error => {
        console.error("Houve um erro ao carregar o repositório", error);
      });
  }, []);

  return (
    <div>
      <h2 id='elenco'>Jogadores</h2>
      <div className="card">
        {players.map((player, index) => (
          <Card
            key={index}
            title={player.nome}
            description={`${player.posicao}, ${player.idade} anos, ${player.nacionalidade}`}
            photo={player.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default Elenco;
