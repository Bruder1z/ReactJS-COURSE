import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';

const url = "http://localhost:3000/products";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { data: items, httpConfig, loading } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // Refatorando POST
    httpConfig(product, "POST");

    // Limpa o formulário após o envio
    setName("");
    setPrice("");
  };

  return (
    <div className='App'>
      <h1>Http em React</h1>
      {/* loading */}
      {loading && <p>Carregando...</p>}
      {/* lista */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>{product.name} - R${product.price}</li>
          ))}
      </ul>
      {/* envio de form */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {/* loading com post */}
          {loading && <input type='submit' disabled value='aguarde'/>}
          {!loading && <input type='submit'   value='Criar'/>}
        </form>
      </div>
    </div>
  );
}

export default App;
