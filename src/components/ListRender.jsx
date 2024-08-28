import {useState} from "react";

const ListRender = () => {

    const [list] = useState(["lucas", "manu","maya","miguel"])

    const [users, setUsers] = useState([
        {id: 1, name:"lucas", age:20},
        {id: 2, name:"manu", age:19},
        {id: 3, name:"maya", age:0},
        {id: 4, name:"miguel", age:0}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id)
     )
    }


  return (
    <div>
        {/* render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* previous steate */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
   
  )
}

export default ListRender