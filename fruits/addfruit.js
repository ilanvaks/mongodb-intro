import { client, fruitsCollection } from "../mongoConnect.js"

const addFruit = async () => {

  const myFruit = {
    name: "Canteloupe",
    taste: "Sour",
    price: 4,
    stock: 5,
  };
  
  try {
    await client.connect()
    const addedFruit = await fruitsCollection.insertOne(myFruit)
    console.log(addedFruit)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}
    
addFruit()
  