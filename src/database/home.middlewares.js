import { db } from "../database/database.connection.js"
import ORM from "../middlewares/orm.js"

export async function postNewCar(req, res, next){
    const data = req.body
    console.log(data)

    try{
        const insertedId = (await db.collection('carros').insertOne({
            titulo: data.titulo,
            marca: data.marca,
            km: data.km,
            ano: data.ano,
            diaria: data.diaria,
            localizacao: data.localizacao,
            img: data.img,
            infoExtra: data.infoExtra || ""
        })).insertedId
        
        console.log("inseriu o id: ", insertedId)
        res.insertedId = insertedId
        next()
    }catch(err){
        next(err)
    }
}