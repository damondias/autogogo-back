import { db } from "../database/database.connection.js"

export async function postNewCar(req, res, next){
    const data = req.body
    try{
        const insertedId = (await db.collection('carros').insertOne({data})).insertedId

        next()
    }catch(err){
        next(err)
    }
}