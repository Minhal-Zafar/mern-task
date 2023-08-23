

import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const handler=async()=>{
    const response = await fetch('http://127.0.0.1:5000/todos/',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
    const data = await response.json();
    setTasks(data)
    }
      useEffect(() => {
       handler()  
      }, [tasks]);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map(task => (
          <TodoItem key={task._id} task={task} onEdit={handleEdit} />
        ))}
      </ul>
      <AddTodo />
      {editingTask && <EditTodo task={editingTask} setEditingTask={setEditingTask} />}
    </div>
  );
};

export default TodoList;
