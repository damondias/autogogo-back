import { db } from "../database/database.connection.js"

export async function homeController(req, res){
    console.log("saiu")
    res.send(req.body)
}

export async function getCarros(req, res){
    const arrayCarros = await db.collection('carros').find().toArray()
    res.send(arrayCarros)

}