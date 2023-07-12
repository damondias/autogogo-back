import { db } from "../database/database.connection.js"

export function homeController(req, res){
    const data = req.body
    console.log(data)
    console.log("tchau!")
}