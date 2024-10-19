import React from 'react'


interface User{
  id:number;
  name:string;
}
export const users =  async() => {
  const res=await fetch('https://jsonplaceholder.typicode.com/users',
    {next:{revalidate:10}
  })
  const users: User[]=(await res.json()) as User[];
  return (
    <div>
      <h1>Users</h1>
      {users.map(user=> <ul key={user.id}>{user.name}</ul>)}
    </div>
  )
}

export default users