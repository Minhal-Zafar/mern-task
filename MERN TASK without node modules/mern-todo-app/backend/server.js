
// server.js

const todoRoutes = require('./routes/todoRoutes');

// ...


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;


// Connect to MongoDB (assuming MongoDB is running locally)
mongoose.connect('mongodb://127.0.0.1:27017/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define routes here (e.g., routes for getting, adding, editing, and deleting tasks)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
