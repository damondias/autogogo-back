import { db } from "../database/database.connection.js"

export async function homeController(req, res){
    res.send(req.body)
}