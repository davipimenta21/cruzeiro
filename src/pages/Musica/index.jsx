import React, { useState, useEffect } from 'react';
import MusicaCard from '../../components/MusicaCard/index'; 
import '../Musica/musica.module.css'; 

const MusicaPage = () => {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    const fetchMusicas = async () => {
      try {
        const response = await fetch('/cruzeiro.json'); // Assume que o arquivo está na pasta public
        if (!response.ok) {
          throw new Error('Falha ao carregar as músicas');
        }
        const data = await response.json();
        const musicasArray = Object.entries(data.musicas).map(([titulo, letra]) => ({ titulo, letra }));
        setMusicas(musicasArray);
      } catch (error) {
        console.error('Erro ao carregar as músicas:', error);
      }
    };

    fetchMusicas();
  }, []);

  return (
    <div className="musica-page">
      <h1>Músicas do Cruzeiro</h1>
      {musicas.map((musica, index) => (
        <MusicaCard key={index} titulo={musica.titulo} letra={musica.letra} />
      ))}
    </div>
  );
};

export default MusicaPage;
