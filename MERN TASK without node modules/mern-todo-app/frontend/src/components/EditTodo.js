

import React, { useState } from 'react';
import axios from 'axios';

const EditTodo = ({ task, setEditingTask }) => {
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    axios.post(`http://127.0.0.1:5000/todos//edit/${task._id}`, { text })
      .then(res => {
        console.log(res.data);
        setEditingTask(null);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setEditingTask(null)}>Cancel</button>
    </div>
  );
};

export default EditTodo;
