// todoRoutes.js

const { request } = require('express');
const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

// Get all tasks
router.route('/').get(async(req, res) => {
  const obj=await Todo.find()
  res.json(obj)
});

// Add a new task
router.route('/add').post(async(req, res) => {
  //const { text } = req.body;
  const obj = new Todo({ text: req.body.text });
    await obj.save() 
    res.json(200)
});

// Edit a task
router.route('/edit/:id').post(async(req, res) => {
  await Todo.findById(req.params.id)
    .then((todo) => {
      todo.text = req.body.text;

      todo
        .save()
        .then(() => res.json('Todo updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a task
router.route('/delete/:id').delete(async(req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
