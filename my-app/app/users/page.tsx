import React from 'react'
import styles from './Users.module.css'


interface User{
  id:number;
  name:string;
}
export const users =  async() => {
  const res=await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'})
  const users: User[]=(await res.json()) as User[];
  return (
    <div className={styles.card}>
      <h1>Users</h1>
      <h3>Render at :{new Date().toLocaleTimeString()}</h3>
      {users.map(user=> <ul key={user.id}>{user.name}</ul>)}
    </div>
  )
}

export default users