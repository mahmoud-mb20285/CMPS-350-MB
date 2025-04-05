// app/ModifyPersonForm.js
'use client'

import { useState } from 'react'
import { modifyPerson } from './modifyPerson'

export default function ModifyPersonForm() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [profession, setProfession] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
  //  e.preventDefault()

    const updatedData = { name, age: Number(age), profession }

    const result = await modifyPerson(Number(id), updatedData)

    if (result.success) {
      setMessage(`Person updated: ${JSON.stringify(result.updatedPerson)}`)
    } else {
      setMessage(result.message)
    }
  }

  return (
    <div>
      <h3>Modify Person Information</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            id="id"
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="profession">Profession:</label>
          <input
            id="profession"
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
