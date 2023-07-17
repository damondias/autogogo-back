import { db } from "../database/database.connection.js";

export default class ORM {
    constructor() {
        this.db = db;
    }
  
    async create(collectionName, document) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.insertOne(document)
            console.log('Documento criado com sucesso:', result.insertedId)
            return result.insertedId
        } catch (error) {
            console.error('Erro ao criar o documento:', error)
            throw error
        }
    }
  
    async createMany(collectionName, documents) {
        try {
            const collection = this.db.collection(collectionName)
            const result = await collection.insertMany(documents)
            console.log('Documentos criados com sucesso:', result.insertedIds)
        } catch (error) {
            console.error('Erro ao criar os documentos:', error)
            throw error
        }
    }
  
    async read(collectionName) {
        try {
            const collection = this.db.collection(collectionName);
            const documents = await collection.find().toArray();
            console.log('Documentos:', documents);
        } catch (error) {
            console.error('Erro ao ler os documentos:', error);
            throw error;
        }
    }
  
    async update(collectionName, filter, update) {
        try {
            const collection = this.db.collection(collectionName);
            const result = await collection.updateMany(filter, { $set: update });
            console.log('Documentos atualizados com sucesso:', result.modifiedCount);
        } catch (error) {
            console.error('Erro ao atualizar os documentos:', error);
            throw error;
        }
    }
  
    async remove(collectionName, filter) {
        try {
            const collection = this.db.collection(collectionName);
            const result = await collection.deleteMany(filter);
            console.log('Documentos removidos com sucesso:', result.deletedCount);
        } catch (error) {
            console.error('Erro ao remover os documentos:', error);
            throw error;
        }
    }
  }
  

  