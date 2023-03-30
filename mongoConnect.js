import dotenv from "dotenv"

dotenv.config()
const MONGOURI = process.env.MONGOURI

import { MongoClient } from "mongodb"


export const client = new MongoClient(MONGOURI) // use the URI path