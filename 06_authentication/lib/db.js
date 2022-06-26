import { MongoClient } from 'mongodb';
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`
  );

  return client;
}
