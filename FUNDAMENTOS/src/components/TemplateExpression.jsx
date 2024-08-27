import React from 'react'

const TemplateExpression = () => {

    const name = "Lucas"

    const data = {
        age: 20,
        job:"desempregado"
    }

  return (
    <div>
        <p>A soma é {2 + 2} </p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e sua condição atual de trabalho é {data.job}</p>
    </div>
  )
}

export default TemplateExpression