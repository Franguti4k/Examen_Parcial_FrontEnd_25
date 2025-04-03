//BORRAR EN CASO DE QUE NO SE USE BASES DE DATOS
/*import { MongoClient } from 'mongodb';
import { tipoDB } from "../types.ts";

const url = Deno.env.get('MONGO_URL');
if (!url) {
  throw new Error('MONGO_URL not set');
}

const client = new MongoClient(url);
await client.connect();

const db = client.db('Nebrija');
const ContactsCollection = db.collection<tipoDB>(Nombre de la coleccion'');

export default ContactsCollection;*/