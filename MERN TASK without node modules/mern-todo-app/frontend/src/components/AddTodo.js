

import React, { useState } from 'react';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleAdd = async() => {
  //   axios.post('http://127.0.0.1:5000/todos/add', { text })
  //     .then(res => {
  //       console.log(res.data);
  //       setText('');
  //     })
  //     .catch(err => console.log(err));
  // };
  const response = await fetch('http://127.0.0.1:5000/todos/add',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
      text:text
  })
})
  }

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default AddTodo;
