import React from 'react'
interface User{
    id:number,
    name:String
}

const User =async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const users:User[]=await res.json()
  return (
   <>
   <h1>users</h1>
   <p>{new Date().toLocaleTimeString()}</p>
   <ul>
{users.map(user=><li key={user.id}>{user.name}</li>)}

   </ul>
   
   </>
  )
}

export default User
