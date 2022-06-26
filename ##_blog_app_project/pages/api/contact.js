import { MongoClient } from 'mongodb';
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await postHandler(req, res);
    return;
  }
  res.status(400).send('Invalid Request');
}

async function postHandler(req, res) {
  const { email, name, message } = req.body;

  if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
    res.status(422).json({ message: 'Invalid input.' });
    return;
  }

  const newMessage = {
    email,
    name,
    message,
  };

  let client;

  try {
    client = await MongoClient.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`
    );
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database.' });
    return;
  }

  const db = client.db();

  try {
    const result = await db.collection('messages').insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch (error) {
    client.close();
    res.status(500).json({ message: 'Storing message failed!' });
    return;
  }

  client.close();

  res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
}
