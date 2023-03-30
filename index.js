import { client } from './mongoConnect'

// connect to client
client.connect()

//connect to do db - or create if there is none
const database = client.db('products')

// connect to collection - or create if none 
const collection = database.collection('fruits')


const addFruit = async () => {

  const myFruit = {
    name: "Canteloupe",
    taste: "Sour",
    price: 4,
    stock: 5,
  }

  const addedFruit = await collection.insertOne(myFruit)
  console.log(addedFruit)
}

// addFruit()

const editFruit = async () => {

  // collection.findOne({name: "Canteloupe" })
  const updatedFruit = await collection.findOneAndUpdate({ name: "Canteloupe" }, { $set: { name: "Pineapple" } })
  console.log(updatedFruit)
}

// editFruit()

const getAllFruits = async () => {
  // const allFruits = await collection.find().toArray()
  collection.find().toArray().then(items => console.log(items)).catch(err => console.log(err))
  console.log(allFruits)
}

// getAllFruits() 

const deleteFruit = async () => {
  const itemDeleted = await collection.deleteOne({ name: 'Pineapple' })
  console.log(itemDeleted)
}

deleteFruit()