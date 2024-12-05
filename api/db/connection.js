import mongoose from 'mongoose';
const dbURL = 'mongodb://localhost:27017/ecommerce-mobile-app';
// const dbURL = 'mongodb+srv://nileshlachheta1995:aaccihID0AiXQFxT@cluster0.nhpfyuq.mongodb.net/ECommerce'


var connection = mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Database Connection Successful');
  })
  .catch(err => {
    console.log('Error While Database Connection', err);
  });

export default connection;

