import { db } from "../database/database.connection.js"

export async function homeController(req, res){
    res.send(res.insertId)
}

export async function getCarros(req, res){
    const arrayCarros = await db.collection('carros').find().toArray()
    res.send(arrayCarros)

}