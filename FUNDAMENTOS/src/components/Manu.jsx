import React from 'react'

const Manu = () => {

const handleClick = (e) => {
    console.log("executou");
    console.log(e);
}

const renderSomething = (x) => {
    if(x){
        return <h1>Renderizando isso</h1>
    }else{
        return <h1>renderizando outra coisa</h1>
    }
}

// return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>CLIQUE AQUI</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique aqui só que com função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
        </div>
  )
}

export default Manu