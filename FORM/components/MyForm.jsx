import React from 'react'
import "./MyForm.css"
import { useState } from 'react'


export const MyForm = ({userName, userEmail}) => {

  // gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("")

  const[role, setRole] = useState("");

const handleName = (e) => {
  setName(e.target.value);
}
console.log(name, email);

const handleSubmit = (e) => {

  e.preventDefault();
  console.log(name, email,bio,role);

  // validação
  // envio

  // limpar form
  setName("");
  setEmail("");
  setBio("");
  setRole("");
}

  return (
    <div>
        {/* criação de form */}
        {/* envio de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text"
                 name="name"
                 placeholder='Seu nome' 
                 onChange={handleName}
                 value={name || ""}/>
            </div>
              {/* label com input */}
              <label>
                <span>E:mail:</span>
                <input type="text"
                 name='email' 
                placeholder='Digite o seu e-mail'
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""} />
              </label>
              {/* textarea */}
              <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='descrição' onChange={(e) => setBio(e.target.value)}
                  value={bio}>

                </textarea>
              </label>
              {/* select */}
              <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}value={role}>
                  <option value="user">Usuario</option>
                  <option value="editor">editor</option>
                  <option value="adm">adm</option>
                </select>
              </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
