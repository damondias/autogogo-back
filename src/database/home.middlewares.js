import { db } from "../database/database.connection.js"

export async function postNewCar(req, res, next){
    const data = req.body
    console.log(data)
    try{
        console.log("antes de inserir")
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
        console.log("inseriu", insertedId)
        next()
    }catch(err){
        next(err)
    }
}