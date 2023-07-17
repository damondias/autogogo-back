import { db } from "../database/database.connection.js";

export async function createreserve(req,res){
    const reserve = req.body;
    const { user } = res.locals;

    try {
        if (!reserve) return res.sendStatus(422);
        await db.collection('reserves').insertOne({
            userId: user._id,
            carsId: reserve.carros.map(carro => carro._id),
            total:reserve.total
        })
        res.status(201).send({
            userId: user._id,
            carsId: reserve.carros.map(carro => carro._id),
            total:reserve.total
        });
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}