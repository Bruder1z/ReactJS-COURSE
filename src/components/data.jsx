import {useState} from "react";

const data = () => {

    let someData = 10;

    const[anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
    <div>
        <p>Valor: {someData}</p>
    <button onClick={() => (someData = 15)}>Mudar Variavel </button>
    </div>
    <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(5)}>Mudar state</button>
    </div>
    </div>  
  )
}

export default data