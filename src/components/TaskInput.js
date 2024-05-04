
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: { id: uuidv4(), text: task } });
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;
