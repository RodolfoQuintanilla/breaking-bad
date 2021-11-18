import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Frase from "./components/Frase";


const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;


const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
`;


function App() {

  const [frase, gardarFrase] = useState({});

  const conSultarAPI = async () => {
    const api = await fetch(`https://breakingbadapi.com/api/quote/random`)
    const frase = await api.json();
    gardarFrase(frase[0]);
  };

  useEffect(() => {
    conSultarAPI();
  }, []);


  return (
    <Contenedor>

      <Frase
        frase={frase}
      />

      <Boton
        onClick={() => conSultarAPI()}
      >Obtener Frace</Boton>


    </Contenedor >

  );
}

export default App;
