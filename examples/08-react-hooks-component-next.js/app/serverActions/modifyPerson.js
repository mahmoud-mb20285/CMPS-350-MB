// app/modifyPerson.js
'use server'

import fs from 'fs'
import path from 'path'

const dataFilePath = path.resolve(process.cwd(), 'app/serverActions/data.json')

export async function modifyPerson(id, updatedData) {
  // Read the current data from the JSON file
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))

  // Find the person with the given ID and update their information
  const personIndex = data.findIndex(person => person.id === id)

  if (personIndex !== -1) {
    data[personIndex] = { ...data[personIndex], ...updatedData }

    // Write the updated data back to the JSON file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2))

    return { success: true, updatedPerson: data[personIndex] }
  }

  return { success: false, message: 'Person not found' }
}
