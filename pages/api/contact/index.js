import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    res.status(500).json({ message: 'Server configuration error' });
    return;
  }

  const { email, name, subject, message } = req.body;

  if (
    !email?.trim() ||
    !email.includes('@') ||
    !name?.trim() ||
    !subject?.trim() ||
    !message?.trim()
  ) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }

  const newMessage = { email, name, subject, message };

  let client;

  try {
    client = await MongoClient.connect(mongoUri);
    const db = client.db();
    const result = await db.collection('my-messages').insertOne(newMessage);

    res.status(201).json({
      message: 'Successfully stored message!',
      data: { ...newMessage, id: result.insertedId },
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not store message' });
  } finally {
    if (client) {
      await client.close();
    }
  }
};

export default handler;
