const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model/product.model'); // Assuming you have a product model defined in this path
const productRoutes = require('./routes/product.route'); // Importing product routes

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/products', productRoutes); // Middleware to parse JSON bodies for product routes

//mongoose connection and API routes for Product model

mongoose.connect('mongodb+srv://vivinfranse:Vivin%400201@vivincluster0.meapvc4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=vivinCluster0')
  .then(() => {
    console.log('Connected to MongoDB...');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Could not connect to MongoDB...', err);
  });
module.exports = app; 