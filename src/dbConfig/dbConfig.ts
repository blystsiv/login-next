import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    const connecting = mongoose.connection;

    connecting.on('connected', () => console.log('Database connected!'));
    connecting.on('error', (error) => console.log('Error connecting to database: ', error));
  } catch (error) {
    console.log('Error connecting to database: ', error);
  }
}
