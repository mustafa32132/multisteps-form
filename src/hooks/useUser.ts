import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//  import { User } from "../types"
export interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  street: string
  city: string
  state: string
  email: string
  password: string
}

export function useUser() {
  const { id } = useParams<{ id: string }>()

  const [users, setUsers] = useState<User[] | null>(null)

  //
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`)
      .then((res) => res.json())
      .then((res) => setUsers(res))
  }, [])
  return { users, id, setUsers }
}

// ADD-USER
export function useAddUser(newUser: User) {
  // This is the fetch request that adds the new user to the database
  fetch("/db.json")
    // This is the fetch request that adds the new user to the database
    .then((res) => res.json())
    .then((data) => {
      const newUsers = [...data.user, newUser]
      const newData = { ...data, users: newUser }
      fetch("/db.json", {
        method: "PUT",
        headers: {
          // This is the important part
          "Content-Type": "application/json",
        },
        // This is the important part
        body: JSON.stringify(newData),
      })
    })
}
