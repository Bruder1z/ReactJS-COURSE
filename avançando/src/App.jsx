import { useState } from 'react';
import './App.css';

// imagem em assets
import night from './assets/foto2.jpg';

import Data from "./components/data";
import ListRender from "./components/ListRender";
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

const cars = [
  { id: 1, brand: "kw", color: "azul", km: 0 },
  { id: 2, brand: "fiat", color: "branco", km: 15 },
  { id: 3, brand: "gm", color: "preto", km: 100 },
];

function App() {
  // prop
  function showMessage() {
    console.log("EVENTO DO PAE");
  }

  // state list
  const [message, setMessage] = useState("");
  
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* foto em public */}
      <img src="/foto1.webp" alt="rua" />
      {/* foto em assets */}
      <img src={night} alt="Outra imagem" />
      {/* useState */}
      <Data />
      {/* list render */}
      <ListRender />
      {/* Render conditional */}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="lucas" />
      {/* destruturando props */}
      <CarDetails brand="vw" km={9000} color="roxo" />
      {/* Reaproveitando de componentes */}
      <CarDetails brand="bmw" km={1000} color="azul" />
      {/* renderização de lista componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
      {/* Fragment */}
      <Fragment />
      {/* children */}
      <Container>
        <p>OI</p>
      </Container>
      <Container>
        <div>
          <h2>TESTE</h2>
          <p>testinho</p>
        </div>
      </Container>
      {/* prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
