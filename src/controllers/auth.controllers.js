import bcrypt from 'bcrypt'
import { v4 as uuid } from "uuid"
import { db } from "../database/database.connection.js"

export async function signUp(req, res) {
    const user = req.body;
    const {email} = user ;
  
    try {
      const existingEmail = await db.collection("users").findOne({ email });
      if (existingEmail) return res.sendStatus(409);

      const passwordHash = bcrypt.hashSync(user.password, 10);
  
      await db.collection("users").insertOne({ ...user, password: passwordHash });
  
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error.message)
      
    }
  }
  
  export async function signIn(req, res) {
    const { email, password } = req.body;
  
    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) return res.sendStatus(404);
      
        if (bcrypt.compareSync(password, user.password)) {
          const token = uuid();
          await db.collection("sessions").deleteMany({  userId: user._id })
          await db.collection("sessions").insertOne({ token, userId: user._id });
          
          delete user.password; 
          return res.status(200).send({ ...user , token });
        }
      
        res.sendStatus(401);
    } catch (error) {
        res.status(500).send(error.message)
    }

  }