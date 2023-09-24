import { MongoClient, Db } from 'mongodb';

let db: Db;

export async function connectToDB() {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    db = client.db('zincprotocol');
    return db;
}

export function getDB(): Db {
    return db;
}

