import { client, fruitsCollection } from './mongoConnect.js'


//connect to do db - or create if there is none
// const database = client.db('products')

// connect to collection - or create if none 
const collection = database.collection('fruits')



// addFruit()

const editFruit = async () => {

  // collection.findOne({name: "Canteloupe" })
  const updatedFruit = await collection.findOneAndUpdate({ name: "Canteloupe" }, { $set: { name: "Pineapple" } })
  console.log(updatedFruit)
}

// editFruit()

// const getAllFruits = async () => {
// // const allFruits = await collection.find().toArray()
//   collection.find().toArray().then(items => console.log(items)).catch(err => console.log(err))
//   console.log(allFruits)
// }

const getAllFruits = async () => {
  try {
    await client.connect()
    const allFruits = await collection.find().toArray()
    console.log(allFruits)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

getAllFruits()

const deleteFruit = async () => {
  //start try catch 
  try {
    await client.connect()
    const itemDeleted = await collection.deleteOne({ name: 'Pineapple' })
    console.log(itemDeleted)
  } catch (error) {
    console.error(err)
  } finally {
    await client.close()
  }
}

// deleteFruit()