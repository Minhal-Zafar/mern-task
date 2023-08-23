

import React from 'react';
import axios from 'axios';

const TodoItem = ({ task, onEdit }) => {
  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:5000/todos/delete/${task._id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
