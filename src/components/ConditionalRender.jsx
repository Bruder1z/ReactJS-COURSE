import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name = "LUCAS";

  return (
    <div>
        {/* RENDER CONDICIONAL */}
        <h3>Isso será exibido?</h3>
        {x && <p> Se x for true sim!</p>}
        {/* else */}
        <h3>RENDER TERNÁRIO</h3>
        {name === "MANU" ?(
            <div>
                <p>OI MANU</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender