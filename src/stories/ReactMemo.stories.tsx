import React, {useReducer, useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessgesCounter = (props:any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)
export const Example = () =>{
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([
        "Dimych", "Valera", "Artem"
    ])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={ () => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>+</button>
        <NewMessgesCounter count={counter}/>
        <Users users={users}/>
    </>
}