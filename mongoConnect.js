import dotenv from "dotenv"

dotenv.config()
const MONGOURI = process.env.MONGOURI
export const client = new MongoClient(MONGOURI) // use the URI path

import { MongoClient } from "mongodb"

// create instace of mongo
const database = client.db('products')
export const toysCollection = database.collection('toys')

//connect to colleciton - or create if none
export const fruitsCollection = database.collection('fruits')